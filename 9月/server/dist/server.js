"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _http = _interopRequireDefault(require("http"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _url = _interopRequireDefault(require("url"));

var _zlib = _interopRequireDefault(require("zlib"));

var _crypto = _interopRequireDefault(require("crypto"));

var _mime = _interopRequireDefault(require("mime"));

var _chalk = _interopRequireDefault(require("chalk"));

var _ejs = _interopRequireDefault(require("ejs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let {
  readFile,
  writeFile,
  readdir,
  stat
} = _fs.default.promises; // 第三方

//模板引擎
let template = _fs.default.readFileSync(_path.default.resolve(__dirname, "../template.html"), "utf8");

console.log(template);

class Server {
  constructor(config) {
    // console.log(config.port)
    this.port = config.port; // 将template属性放到实例上，可以保证属性通过this来获取，不被参数覆盖掉

    this.template = template;
  }

  async handleRequest(req, res) {
    let {
      pathname
    } = _url.default.parse(req.url, true); // pathname可能是中文，浏览器会自动编码


    pathname = decodeURIComponent(pathname);

    let filePath = _path.default.join(process.cwd(), pathname); // console.log(filePath)//F:\5H5\train\9月\server\dist\
    // console.log(process.cwd())//获取当前的工作目录   F:\5H5\train\9月\server     


    try {
      let statObj = await stat(filePath); //stat判断是文件还是文件夹
      // console.log(statObj)//文件夹和文件的mode值不同

      if (statObj.isDirectory()) {
        // console.log("是一个目录")
        // 如果是目录，需要把目录下面的文件读出来
        let dirs = await readdir(filePath); // console.log(dirs)//[ 'a.txt' ]
        // 返回一个网页

        let templateStr = _ejs.default.render(this.template, {
          dirs,
          path: pathname === "/" ? "" : pathname
        });

        res.setHeader("Content-Type", "text/html,utf-8");
        res.end(templateStr);
      } else {
        // console.log("是一个文件")
        // 如果是文件，把文件的内容返回
        this.sendFile(filePath, req, res, statObj);
      }
    } catch (e) {
      this.sendError(e, req, res);
    }
  }

  gzip(filePath, req, res, statObj) {
    // console.log(req.headers)//accept-encoding
    let encoding = req.headers['accept-encoding'];

    if (encoding) {
      if (encoding.match(/gzip/)) {
        res.setHeader("Content-Encoding", "gzip");
        return _zlib.default.createGzip();
      } else if (encoding.match(/deflate/)) {
        res.setHeader("Content-Encoding", "deflate");
        return _zlib.default.createDeflate();
      } else {
        return false;
      }
    }

    return false;
  }

  cache(filePath, req, res, statObj) {
    // console.log(statObj.ctime)//2019-09-11T02:35:30.761Z
    // console.log(statObj.ctime.toGMTString())//Wed, 11 Sep 2019 02:35:30 GMT
    let lastModified = statObj.ctime.toGMTString();

    let Etag = _crypto.default.createHash("md5").update(_fs.default.readFileSync(filePath)).digest("base64"); //    if-none-match 修改服务器上的文件时，请求头会自动加


    res.setHeader("Last-Modified", statObj.ctime.toGMTString());
    res.setHeader("Etag", Etag); //Etag是响应头 
    // // ifModifiedSine：上次修改
    // // lastModified:最后一次修改

    let ifModifiedSince = req.headers['if-modified-since'];
    let ifNoneMatch = req.headers['if-none-match'];

    if (ifModifiedSince && ifNoneMatch) {
      if (ifModifiedSince !== lastModified && ifNoneMatch !== Etag) {
        // 修改了文件 走网络
        return false;
      }
    } else {
      return false;
    }

    return true;
  }

  sendFile(filePath, req, res, statObj) {
    // 设置响应头，15秒内不要再访问
    // res.setHeader("Cache-Control","max-age=15")//有更高优先级
    // res.setHeader("Expires",new Date(Date.now()+1000*20).toGMTString())
    res.setHeader("Cache-Control", "no-cache"); //还请求服务器，但是有缓存
    // res.setHeader("Cache-Control","no-store")//还请求服务器，不缓存

    let cache = this.cache(filePath, req, res, statObj);

    if (cache) {
      // 有缓存 直接找缓存中的内容
      res.statusCode = 304;
      return res.end();
    } // 在响应数据之前，把数据压缩一把


    let flag = this.gzip(filePath, req, res, statObj); // 在访问数据之前，先设置一个头
    // console.log(mime.getType(filePath))

    res.setHeader("content-Type", _mime.default.getType(filePath) + ";charset=utf8"); // let flag:false|zlib.Gzip

    if (!flag) {
      // 客户端不支持压缩 或者 客户端支持的压缩格式在服务器处理不了
      // 流 创建一个可读流 pipe管道
      _fs.default.createReadStream(filePath).pipe(res);
    } else {
      _fs.default.createReadStream(filePath).pipe(flag).pipe(res);
    }
  }

  sendError(e, req, res) {
    console.log(e);
    res.statusCode = 404;
    res.end("Not Found");
  }

  start() {
    let server = _http.default.createServer(this.handleRequest.bind(this));

    server.listen(this.port, () => {
      console.log(`${_chalk.default.yellow(`Starting up http-serve,serveing`)} ${_chalk.default.blue(`./`)}
    ${_chalk.default.yellow(` Availabel on:`)}
    ${_chalk.default.green(`  http://127.0.0.1:`)}${_chalk.default.green(this.port)}
    Hit CTRL-C to stop the server
            `);
    });
  }

}

var _default = Server;
exports.default = _default;
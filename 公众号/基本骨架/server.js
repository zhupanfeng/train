const Koa = require('koa')
const fs = require('fs')
const KoaStatic = require('koa-static')
const Router = require('koa-router')
const { ServerToken } = require("./mongoose")
const wechat = require("co-wechat")
const config = require('./config')
const WechatAPI = require('co-wechat-api');


let app = new Koa()
let router = new Router()

let menu = {
    "button": [
        {
            "type": "click",
            "name": "今日歌曲",
            "key": "V1001_TODAY_MUSIC"
        },
        {
            "name": "菜单",
            "sub_button": [
                {
                    "type": "view",
                    "name": "搜索",
                    "url": "http://www.soso.com/"
                },
                {
                    "type": "click",
                    "name": "赞一下我们",
                    "key": "V1001_GOOD"
                }]
        }]
}


// 托管静态资源
app.use(KoaStatic(__dirname + '/'))

// 自己的服务器要接入到腾讯服务器
router.all('/wechat', wechat(config).middleware(async message => {
    // console.log('wechat',message)
    if (message.Content === 'diaosi') {
        // 回复屌丝(普通回复)
        return 'hehe';
      } else if (message.Content === 'text') {
        //你也可以这样回复text类型的信息
        return {
          content: 'text object',
          type: 'text'
        };
      } else if (message.Content === 'hehe') {
        // 回复一段音乐
        return {
          type: "music",
          content: {
            title: "来段音乐吧",
            description: "一无所有",
            musicUrl: "http://mp3.com/xx.mp3",
            hqMusicUrl: "http://mp3.com/xx.mp3"
          }
        };
      } else if (message.Content === 'kf') {
        // 转发到客服接口
        return {
          type: "customerService",
          kfAccount: "test1@test"
        };
      } else {
        // 回复高富帅(图文回复)
        return [
          {
            title: '你来我家接我吧',
            description: '这是女神与高富帅之间的对话',
            picurl: 'http://nodeapi.cloudfoundry.com/qrcode.jpg',
            url: 'http://nodeapi.cloudfoundry.com/'
          }
        ];
      }
}))

// 后面就可以通过这个对象请求公众平台上的接口了
const api = new WechatAPI(config.appId, config.appsecret,
    async () => await ServerToken.findOne(),
    async token => await ServerToken.updateOne({}, token, { upsert: true })
)

router.get('/getFollers', async ctx => {
    let res = await api.getFollowers();
    // console.log(res)
    // 创建菜单 
    api.createMenu(menu);
    ctx.body = res
})


app.use(router.routes())//启动路由
app.use(router.allowedMethods());
app.listen(8888)

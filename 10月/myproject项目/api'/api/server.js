let express = require('express');
let bodyParser = require('body-parser');
let session = require('express-session');
let cors = require('cors');
let MongoStore = require('connect-mongo')(session);
let { User, Slider, Lesson } = require('./db');
let { url } = require('./settings');
let multer = require('multer');
let path = require('path');
let upload = multer({ dest: path.join(__dirname, 'public') });
let { md5 } = require('./utils');
let app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(
    cors({
        origin: ["http://localhost:8080", "http://localhost:8081"],
        credentials: true,//是否允许跨域 发cookie
        allowedHeaders: "Content-Type,x-requested-with",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS"
    })
);
app.use(function (req, res, next) {
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'wangcai',
    store: new MongoStore({ url })
}));
app.use(function (req, res, next) {
    res.success = function (data) {
        res.json({ code: 0, data });
    }
    res.error = function (error) {
        res.json({ code: 1, error });
    }
    next();
});
app.post('/register', async (req, res) => {
    let user = req.body;
    user.avatar = `https://secure.gravatar.com/avatar/${md5(user.email)}?s=48`;
    let result = await User.create(user);
    res.success(result);
});
app.post('/login', async (req, res) => {
    let query = req.body;//{username,password}
    let user = await User.findOne(query);
    if (user) {
        req.session.user = user;
        res.json({
            code: 0,
            data: user
        });
    } else {
        res.json({
            code: 1,
            error: '用户登录失败'
        });
    }
});
//验证用户是否登录
app.get('/validate', async (req, res) => {
    if (req.session.user) {
        res.json({
            code: 0, data: req.session.user
        });
    } else {
        res.json({
            code: 1,
            error: '此用户尚未登录'
        });
    }
});
app.get('/logout', async (req, res) => {
    req.session.user = null;
    res.success('退出登录成功');
});

app.listen(9000);
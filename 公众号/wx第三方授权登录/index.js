const Koa = require('Koa')
const KoaStatic = require('koa-static')
const Router = require('koa-router')
const config = require('./config')
const wechat = require('co-wechat')
const wechatAPI = require('co-wechat-api')
const OAuth = require('co-wechat-oauth');
const { clientToken, ServerToken } = require('./mongoose')

const app = new Koa()
const router = new Router()

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
                    "url": "http://wc.free.idcfengye.com/"
                },
                {
                    "type": "click",
                    "name": "赞一下我们",
                    "key": "V1001_GOOD"
                }]
        }]
}

app.use(KoaStatic(__dirname + '/'))

// 自己的服务器接入腾讯服务器
router.all('/wechat', wechat(config).middleware(async message => {
    return "hello"
}))

// co-wechat-api 处理access_token
// 得到令牌,去请求微信公众平台的api接口
const api = new wechatAPI(config.appId, config.appsecret,
    async () => await ServerToken.findOne(),
    async token => await ServerToken.updateOne({}, token, { upsert: true })
)

// 后面去调接口
router.get('/getFollers', async ctx => {
    let res = await api.getFollowers();
    api.createMenu(menu);
    console.log(res)
    ctx.body = res
})

const oauth = new OAuth(config.appId, config.appsecret);
router.get("/wxAuthrize", async ctx => {
    const state = ctx.query.id;
    // console.log("hahaha")
    // console.log(ctx.href)//http://zpf.free.idcfengye.com/wxAuthrize
    let redirectUrl = ctx.href.replace("wxAuthrize", "wxCallback")
    // console.log(redirectUrl)//http://zpf.free.idcfengye.com/wxCallback
    const scope = "snsapi_userinfo"//弹出
    const url = oauth.getAuthorizeURL(redirectUrl, state, scope)
    ctx.redirect(url)
})
router.get("/wxCallback", async ctx => {
    // console.log("callback")
    const code = ctx.query.code;
    // console.log(code)//001MnoN223qOeV0eSBK22rCiN22MnoNR
    const token = await oauth.getAccessToken(code)
    // console.log(token)
    const accessToken = token.data.access_token;
    // console.log(accessToken)
    const openid = token.data.openid;

    let userInfo = await oauth.getUser(openid)
    // console.log(userInfo)
    // -------------
    // {
    //     openid: 'ohmrlt8Y
    //     nickname: '青柠',
    //         sex: 2,
    //             language: 'zh_CN'
    //     city: '',
    //         province: '',
    //             country: '',
    //                 headimgurl:
    //     'http://thirdwx.
    //     u3k7YuevWGIC2B2UYnP
    //     privilege: []
    // }
    // ----------------
    ctx.body = `
    <h1>${userInfo.nickname}</h1>`
})

app
    .use(router.routes())
    .use(router.allowedMethods());
app.listen(8888)
const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const cors = require('koa2-cors');
const menus = require("./Home/menus");
const swipers = require("./Home/swipers");
const dframes = require("./Home/dframes");
const orders = require("./order/orders");
const koaBody = require('koa-body');
const jwt = require('jsonwebtoken');
const koaJwt = require('koa-jwt');

const router = new Router();
const jwtSecret = "my_token";

app.use((ctx, next) => {
    return next().catch((err) => {
        if (err.status === 401) {
            ctx.status = 401;
            ctx.body = {
                ok: false,
                msg: err.originalError ? err.originalError.message : err.message
            }
        } else {
            throw err;
        }
    });
});

//设置不需要验证的路由
app.use(koaJwt({secret: jwtSecret}).unless({
    path: [/^\/api\/swiper/, /^\/api\/menus/, /^\/api\/dframes/, /^\/api\/login/]
}));

// 使用ctx.body解析中间件
app.use(koaBody());

//设置跨域
app.use(cors());

router.get("/api/swipers", (ctx) => {
    ctx.body = swipers;
});
router.get("/api/menus", (ctx) => {
    ctx.body = menus;
});
router.get("/api/dframes", (ctx) => {
    ctx.body = dframes;
});
router.get("/api/orders/all", (ctx) => {
    ctx.body = orders;
});
router.get("/api/orders/payment", (ctx) => {
    ctx.body = {};
});
router.get("/api/orders/ship", (ctx) => {
    ctx.body = {};
});
router.get("/api/orders/reward", (ctx) => {
    ctx.body = {};
});
router.get("/api/orders/evaluation", (ctx) => {
    ctx.body = {};
});
router.post("/api/login", (ctx) => {
    const {username, password} = ctx.request.body;
    if (username === "han" && password === "123456") {
        const token = jwt.sign({
            name: username,
            _id: 1
        }, 'my_token');
        ctx.body = {
            mes: "success",
            status: true,
            token: token,
            userinfo:{
                username:"han",
                headImg:"http://gw.alicdn.com/sns_logo/i4/131040155068500649/TB21HmAiVXXXXatXpXXXXXXXXXX_!!0-mytaobao.jpg_.webp"
            }
        }

    } else {
        ctx.body = {
            mes: "fail",
            status: false,
        }
    }
});

router.get("/api/person/info", (ctx) => {

});

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(8000);
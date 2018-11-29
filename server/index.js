const Koa = require('koa');
const app = new Koa();
const route = require('koa-route');
const cors = require('koa2-cors');
const menus = require("./Home/menus");
const swipers = require("./Home/swipers");
const dframes = require("./Home/dframes");
const orders = require("./order/orders");
const koaBody = require('koa-body');
const jwt = require('jsonwebtoken');
const koaJwt = require('koa-jwt')

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

app.use(route.get("/api/swipers", (ctx) => {
    ctx.body = swipers;
}));
app.use(route.get("/api/menus", (ctx) => {
    ctx.body = menus;
}));
app.use(route.get("/api/dframes", (ctx) => {
    ctx.body = dframes;
}));
app.use(route.get("/api/orders", (ctx) => {
    console.log(ctx);
    ctx.body = orders;
}));

app.use(route.post("/api/login", (ctx) => {
    const {username, password} = ctx.request.body;
    if (username === "han" && password === "123456") {
        const token = jwt.sign({
            name: username,
            _id: 1
        }, 'my_token');
        ctx.body = {
            mes: "success",
            status: true,
            token: token
        }

    } else {
        ctx.body = {
            mes: "fail",
            status: false,
        }
    }
}));

app.use(route.get("/api/person/info", (ctx) => {

}));
app.listen(8000);
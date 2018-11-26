const Koa = require('koa');
const app = new Koa();
const route = require('koa-route');
const cors = require('koa2-cors');
const menus = require("./Home/menus");
const swipers = require("./Home/swipers");
const dframes = require("./Home/dframes");
const orders = require("./order/orders");
const koaBody = require('koa-body');
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
    ctx.body = orders;
}));
app.use(route.post("/api/login", (ctx) => {
    const {username, password} = ctx.request.body;
    console.log(ctx.request.body);
    if (username === "han" && password === "123456") {
        ctx.body = {
            mes: "success",
            status:true
        }
    }else{
        ctx.body = {
            mes:"fail",
            status:false
        }
    }
}));
app.listen(8000);
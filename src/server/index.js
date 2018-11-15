const Koa = require('koa');
const app = new Koa();
const route = require('koa-route');
const cors = require('koa2-cors');
const bannerList = require("./Home/bannerList")
const bannerImg = require("./Home/bannerImg")
app.use(cors());
app.use(route.get("/getbannerlist", (ctx) => {
    ctx.body = bannerList;
}));

app.use(route.get("/getbannerimg", (ctx) => {
    ctx.body = bannerImg;
}));
app.listen(8000);
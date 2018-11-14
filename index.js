const koa = require("koa");
const koaStatic = require("koa-static");
const path = require("path");
const app = new koa();
const Router = require("koa-router");
const router = new Router();

const version = (ctx,next) => {
    ctx.response.type = "text";
    ctx.response.body = "<h1>111</h1>"
}

router.all("version", version);
app.use(router.routes());
app.use(koaStatic(path.resolve("./static/")));
app.listen("3389");
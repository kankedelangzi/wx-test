const koa = require("koa");
const koaStatic = require("koa-static");
const path = require("path");
const app = new koa();
app.use(koaStatic(path.resolve("./static/")));
app.listen("3389");
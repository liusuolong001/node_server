const koa = require("koa");
const koaRouter = require("@koa/router");
const bodyParser = require("koa-bodyparser");
const koaMulter = require("@koa/multer");

/* 
  创建一个实列kao
  创建一个路由router对象
*/
const server = new koa();
const userRouter = new koaRouter({ prefix: "/users" });
server.use(bodyParser());

/**
 * get:params; 如/:id;context.params
 * get:query; 如?pageSize=1&pageNum=10;context.query
 *
 * koa中解析POST中Json数据需要用到第三方库koa-bodyparser
 * server.use(bodyParser());
 * post:json; 如{name:'yinhao',age:18};注:解析的json是放在koa中context.request.body中
 * post:x-www-form-urlencoded;
 * koa中解析POST中form-data数据需要用到第三方库koa-multer 使用any解析form-data
 * post:form-data;
 */

/* POST json*/
userRouter.post("/json", (context, next) => {
  console.log("json", context.request.body);
  context.body = "json格式";
});

/* POST urlencoded*/
userRouter.post("/urlencoded", (context, next) => {
  console.log("urlencoded", context.request.body);
  context.body = "urlencoded格式";
});

/* POST form-data*/
const multer = koaMulter();
userRouter.post("/fromdata", multer.any(), (context, next) => {
  console.log("fromdata", context.request.body);
  context.body = "fromdata格式";
});

/* 
 路由生效
*/

server.use(userRouter.routes());
server.use(userRouter.allowedMethods());

/* 
  开启服务
*/
server.listen("8000", () => {
  console.log("server success");
});

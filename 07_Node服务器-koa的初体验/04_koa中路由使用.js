/*
 * @Description:
 * @Author: liusuolong001
 * @Date: 2024-07-09 16:43:40
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-09 18:20:01
 */
const koa = require("koa");
const koaRouter = require("@koa/router");

/* 
  创建一个实列kao
  创建一个路由router对象
  prefix 前缀对用户的路由是/users
*/
const server = new koa();
const userRouter = new koaRouter({ prefix: "/users" });

userRouter.get("/", (context, next) => {
  console.log(context.query);
  context.body = "context.query";
});
userRouter.get("/:id", (context, next) => {
  console.log(context.params);
  context.body = "context.params";
});

userRouter.post("/", (context, next) => {
  console.log(context.request.body);
  // console.log(context);
  /*   context.req.on("data", (data) => {
    console.log("data@@", data.toString());
  }); */
  context.body = "post.body";
});

/* 
 路由生效
 allowedMethods 不存在的方法会返回优化的提示
*/
server.use(userRouter.routes());
server.use(userRouter.allowedMethods());

/* 
  开启服务
*/
server.listen("8000", () => {
  console.log("server success");
});

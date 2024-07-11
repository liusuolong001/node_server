/*
 * @Description:
 * @Author: liusuolong001
 * @Date: 2024-07-11 07:52:30
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-11 07:54:43
 */
const koa = require("koa");
const koaRouter = require("@koa/router");
const static = require("koa-static");

/* 
  创建一个实列kao
  创建一个路由router对象
*/
const server = new koa();
const userRouter = new koaRouter({ prefix: "/users" });

userRouter.get("/", (context, next) => {
  context.body = "query";
});

/**
 * 部署静态资源
 */
server.use(static("./uploads"));

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

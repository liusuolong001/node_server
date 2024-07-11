/*
 * @Description:
 * @Author: liusuolong001
 * @Date: 2024-07-11 07:52:30
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-11 08:21:56
 */
const fs = require("fs");
const koa = require("koa");
const koaRouter = require("@koa/router");

/* 
  创建一个实列kao
  创建一个路由router对象
*/
const server = new koa();
const userRouter = new koaRouter({ prefix: "/users" });

/**
 * string字符串类型
 * buffer类型
 * stream类型
 * Object/Array类型
 * null 自动设置状态码204
 * context.status = 500; 设置状态码
 */
userRouter.get("/", (context, next) => {
  context.status = 500;
  // context.body = "query";
  // context.body = Buffer.from("你好,李银河");
  // context.type = "image/jpeg";
  // context.body = fs.createReadStream("./uploads/1720654361730_10.png");
  context.body = {
    code: 200,
    data: [{ name: "xxx" }],
  };
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

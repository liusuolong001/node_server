/*
 * @Description:
 * @Author: liusuolong001
 * @Date: 2024-07-07 14:49:11
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-07 17:10:59
 */
const express = require("express");

/* 
  创建一个server服务
*/
const server = express();

/* 
  注册路多个中间件 一个路径要执行很多操作时
*/
server.post(
  "/home",
  (request, response) => {
    response.end("methods_post path_home middleware");
    next();
  },
  (request, response) => {
    console.log("xxx1");
    next();
  },
  (request, response) => {
    console.log("xxx2");
  }
);

/* 
  开启服务
*/
server.listen("8000", () => {
  console.log("server success");
});

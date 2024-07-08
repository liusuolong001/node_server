/*
 * @Description:
 * @Author: liusuolong001
 * @Date: 2024-07-07 14:49:11
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-07 17:07:36
 */
const express = require("express");

/* 
  创建一个server服务
*/
const server = express();

/* 
  use注册路径匹配的中间件 当path === /home符合匹配规则时才会使用这个中间件
*/
server.use("/home", (request, response) => {
  response.end("home middleware");
});

/* 
  开启服务
*/
server.listen("8000", () => {
  console.log("server success");
});

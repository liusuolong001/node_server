/*
 * @Description:
 * @Author: liusuolong001
 * @Date: 2024-07-08 13:35:18
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-08 13:39:45
 */
const express = require("express");

/* 
  创建一个server服务
*/
const server = express();

/*  解析headers["content-type"] === application/x-www-form-urlencoded */
server.use(express.urlencoded());

server.post("/login", (request, response) => {
  console.log(request.body);
  response.end("login success");
});

/* 
  开启服务
*/
server.listen("8000", () => {
  console.log("server success");
});

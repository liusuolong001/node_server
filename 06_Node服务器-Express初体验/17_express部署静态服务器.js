/*
 * @Description:
 * @Author: liusuolong001
 * @Date: 2024-07-09 16:06:59
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-09 16:11:30
 */
const express = require("express");

/* 
  创建一个server服务
*/
const server = express();

/* 
  创建一个server服务
*/
server.use(express.static("./uploads"));

/*  
  内置中间件static
  uploads文件名
*/
server.post("/login", (request, response) => {
  response.end("login success");
});

/* 
  开启服务
*/
server.listen("8000", () => {
  console.log("server success");
});

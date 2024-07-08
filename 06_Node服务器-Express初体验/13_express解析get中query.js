/*
 * @Description:
 * @Author: liusuolong001
 * @Date: 2024-07-08 13:35:18
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-08 19:26:58
 */
const express = require("express");
const multer = require("multer");

/* 
  创建一个server服务
*/
const server = express();

/*  
  中间件express中解析get query
  默认解析完放到request.query
*/
server.get("/search", (request, response) => {
  console.log(request.query);
  response.end("login success");
});

/* 
  开启服务
*/
server.listen("8000", () => {
  console.log("server success");
});

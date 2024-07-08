/*
 * @Description:
 * @Author: liusuolong001
 * @Date: 2024-07-08 13:35:18
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-08 14:00:27
 */
const fs = require("fs");
const express = require("express");
const morgan = require("morgan");

/* 
  创建一个server服务
*/
const server = express();

/*  第三方库的中间件morgan 查看接口请求日志*/
const writeStream = fs.createWriteStream("./files/log.txt");
server.use(morgan("combined", { stream: writeStream }));

server.post("/login", (request, response) => {
  response.end("login success");
});

/* 
  开启服务
*/
server.listen("8000", () => {
  console.log("server success");
});

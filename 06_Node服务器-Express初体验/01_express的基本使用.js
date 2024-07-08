/*
 * @Description: express 基本使用
 * @Author: liusuolong001
 * @Date: 2024-07-07 14:02:28
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-07 14:14:57
 */

const express = require("express");

/* 
  创建一个server服务
*/
const server = express();

/* 
  处理login的post请求 method不对会报错
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

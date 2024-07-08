/*
 * @Description:
 * @Author: liusuolong001
 * @Date: 2024-07-08 13:35:18
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-08 19:13:08
 */
const express = require("express");
const multer = require("multer");

/* 
  创建一个server服务
*/
const server = express();

/*  
  第三方库的中间件express-multer 使用any解析form-data
*/
const formdata = multer();
server.post("/upload", formdata.any(), (request, response) => {
  console.log(request.body);
  response.end("login success");
});

/* 
  开启服务
*/
server.listen("8000", () => {
  console.log("server success");
});

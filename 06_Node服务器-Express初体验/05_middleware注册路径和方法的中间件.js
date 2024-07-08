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
  注册路径与方法匹配的中间件 当path === /home && methods === post 符合匹配规则时才会使用这个中间件
*/
server.post("/home", (request, response) => {
  response.end("methods_post path_home middleware");
});

/* 
  开启服务
*/
server.listen("8000", () => {
  console.log("server success");
});

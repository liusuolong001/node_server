/*
 * @Description:
 * @Author: liusuolong001
 * @Date: 2024-07-07 14:49:11
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-07 14:58:41
 */
const express = require("express");

/* 
  创建一个server服务
*/
const server = express();

/* 
  use注册中间件最普通的中间件 符合匹配规则时
  任何请求方式post/get/put都能匹配上
  后续中间件是否执行?取决于上一个中间件next()是否调用
*/
server.use((request, response) => {
  console.log("use.login");
});

/* 
  开启服务
*/
server.listen("8000", () => {
  console.log("server success");
});

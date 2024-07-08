/*
 * @Description:
 * @Author: liusuolong001
 * @Date: 2024-07-07 14:28:19
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-07 14:42:14
 */
const express = require("express");

/* 
  创建一个server服务
*/
const server = express();

/* 
  中间件的本质传递给express的一个回调函数
  request(请求对象)
  response(响应对象)
  next(在express中定义的用于执行下一个中间件的函数)
*/
server.post("/login", (request, response, next) => {
  /* 
    1.执行任何代码  console.log();查询数据
    2.修改request response对象 request.age = 18
    3.结束请求-响应周期 response.end('xx')
    4.调用下一个中间件 next()
    serve.ues((req,res,next) => {})
  */
  response.end("next middleware");
});

/* 
  开启服务
*/
server.listen("8000", () => {
  console.log("server success");
});

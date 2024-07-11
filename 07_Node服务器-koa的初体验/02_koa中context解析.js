/*
 * @Description:
 * @Author: liusuolong001
 * @Date: 2024-07-09 16:43:40
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-11 07:35:24
 */
const koa = require("koa");

/* 
  创建一个实列kao
*/
const server = new koa();

/* 
  express中存在三个参数req,res,next
  kao两个参数context,next
  context {
    request;请求对象 Koa封装的request
    response;响应对象 Koa封装的response
    
    (http.createServer())
    req:请求对象 Node封装的request
    res:请求对象 Node封装的response
  }
  【其他属性】
  context.query
  context.params
  context.body
*/
server.use((context, next) => {
  const data = [{ name: "xx", age: 18 }];
  context.body = data;
});

/* 
  开启服务
*/
server.listen("8000", () => {
  console.log("server success");
});

/*
 * @Description:
 * @Author: liusuolong001
 * @Date: 2024-07-09 16:43:40
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-09 16:51:10
 */
const koa = require("koa");

/* 
  创建一个实列kao
*/
const server = new koa();

/* 
  express中存在三个参数req,res,next
  kao两个参数context,next 内部将req,res封装斤context中
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

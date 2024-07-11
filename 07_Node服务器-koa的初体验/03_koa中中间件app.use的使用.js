/*
 * @Description:
 * @Author: liusuolong001
 * @Date: 2024-07-09 16:43:40
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-09 17:27:34
 */
const koa = require("koa");

/* 
  创建一个实列kao
*/
const server = new koa();

/* 
 【express】
  server.post('/login',(req,res) => {})

 【kao】
  server.use(() => {}) 只能通过回调函数
  kao 并没有提供methods的方法来注册中间件 
  kao 并没有提供path的方法来匹配路径 
  一般情况request response属性都可以在context中拿到 ===
*/
server.use((context, next) => {
  if (context.path === "/login") {
    if (context.method === "POST") {
      context.body = "context";
    }
  }
});

/* 
  开启服务
*/
server.listen("8000", () => {
  console.log("server success");
});

/*
 * @Description:
 * @Author: liusuolong001
 * @Date: 2024-07-06 15:51:05
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-06 15:52:29
 */
const http = require("http");

/* 
  创建一个http对应的服务器
  方式一:statusCode
  方式一:setHead 响应头
*/
const serve = http.createServer((request, response) => {
  response.statusCode = 201;
  // response.setHeader(400)
  response.end("response");
});

/* 开启一个http服务 */
serve.listen(8000, () => {
  console.log("http服务开启~");
});

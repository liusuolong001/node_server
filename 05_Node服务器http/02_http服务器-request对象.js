/*
 * @Description:
 * @Author: liusuolong001
 * @Date: 2024-07-06 04:29:08
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-06 05:03:03
 */
const http = require("http");

/* 
  创建一个http对应的服务器 
  
  request;本次客户端请求的所有数据
  url:路径
  method:方法
  headers:请求头
*/
const serve = http.createServer((request, response) => {
  console.log(request.url);
  console.log(request.method);
  console.log(request.headers);

  response.end("response");
});

/* 开启一个http服务 */
serve.listen(8000, () => {
  console.log("http服务开启~");
});

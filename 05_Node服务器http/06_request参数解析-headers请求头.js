/*
 * @Description:
 * @Author: liusuolong001
 * @Date: 2024-07-06 05:24:13
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-06 07:12:06
 */
const http = require("http");

/* 创建一个http对应的服务器  启动命令nodemon */
/*  
  网络通讯也是数据流的格式
  headers
  1. Content-Type数据类型
  2. authorization token相关
*/
const serve = http.createServer((request, response) => {
  console.log(request.headers["Content-Type"]);

  console.log(request.headers["authorization"]);
  response.end("success responses");
});

/* 开启一个http服务 */
serve.listen(8000, () => {
  console.log("http服务开启~");
});

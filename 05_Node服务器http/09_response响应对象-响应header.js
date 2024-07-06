/*
 * @Description:
 * @Author: liusuolong001
 * @Date: 2024-07-06 15:51:05
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-06 16:09:59
 */
const http = require("http");

/* 
  创建一个http对应的服务器
  中文时候乱码 默认客户端接收到的是字符串，客户端会按照自己默认的方式进行处理
  设置json格式 编码转成utf-8
*/
const serve = http.createServer((request, response) => {
  response.setHeader("Content-Type", "application/json;charset=utf8");
  response.end("你好,李银河");
});

/* 开启一个http服务 */
serve.listen(8000, () => {
  console.log("http服务开启~");
});

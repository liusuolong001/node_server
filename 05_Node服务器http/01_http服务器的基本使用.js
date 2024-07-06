/*
 * @Description: http的使用
 * @Author: liusuolong001
 * @Date: 2024-07-06 03:24:21
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-06 04:29:25
 */

const http = require("http");

/* 
  创建一个http对应的服务器
  客户端请求数据会执行createServer中回调函数

  request;本次客户端请求的所有数据 【本质可读流】
  请求url
  请求方法
  请求header
  请求携带的数据
  response;给客户端返回结果 【本质可写流】
*/
const serve1 = http.createServer((request, response) => {
  response.end("hello serve1");
});

/*  
  node中默认不会开启服务器;需要手动开启服务器,并且告知所需要监听的端口号;
  开启服务后不会默认关闭; 
  本地访问localhost:8000
*/
serve1.listen(8000, () => {
  console.log("服务器1开启成功");
});

/* 
  创建多个服务器 
  第二个服务器
 */
const serve2 = http.createServer((req, res) => {
  res.end("hello serve2");
});
serve2.listen(2000, () => {
  console.log("服务器2开启成功");
});

/*
 * @Description:
 * @Author: liusuolong001
 * @Date: 2024-07-06 05:24:13
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-06 05:44:58
 */
const http = require("http");
const url = require("url");
const qs = require("querystring");

/* 创建一个http对应的服务器  启动命令nodemon */
/*  
  query类型参数
  1.解析url 通过内置url模块处理request.url  
  2.解析query 通过内置querystring模块处理urls.query
*/
const serve = http.createServer((request, response) => {
  const urls = url.parse(request.url);
  const queryUrls = qs.parse(urls.query);
  console.log(queryUrls);
  response.end("response success");
});

/* 开启一个http服务 */
serve.listen(8000, () => {
  console.log("http服务开启~");
});

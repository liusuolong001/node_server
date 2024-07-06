/*
 * @Description:
 * @Author: liusuolong001
 * @Date: 2024-07-06 15:19:43
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-06 15:46:59
 */
const http = require("http");

/* 
  创建一个http对应的服务器
  response 可写流
  响应数据方式一:write 这种方式直接写出数据并且不会关闭流 未调用close或者end方法客户端会一直请求【response不能调用close】
  响应数据方式二:end 这种方式写出最后数据并且关闭流
*/
const serve = http.createServer((request, response) => {
  response.write("响应方式数据一");
  response.end("response");
});

/* 开启一个http服务 */
serve.listen(8000, () => {
  console.log("http服务开启~");
});

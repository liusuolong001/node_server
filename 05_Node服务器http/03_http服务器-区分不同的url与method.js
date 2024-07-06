/*
 * @Description:
 * @Author: liusuolong001
 * @Date: 2024-07-06 05:12:20
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-06 05:21:42
 */
const http = require("http");

/* 创建一个http对应的服务器 */
const serve = http.createServer((request, response) => {
  const url = request.url;
  const method = request.method;

  /* 区分url与method 返回不同的数据 */
  if (url === "/login") {
    if (method === "POST") {
      response.end("login success");
      return;
    }
    response.end("login error");
  }
});

/* 开启一个http服务 */
serve.listen(8000, () => {
  console.log("http服务开启~");
});

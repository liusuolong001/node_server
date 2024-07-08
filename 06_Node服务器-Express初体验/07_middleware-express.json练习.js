/*
 * @Description: express.json()使用
 * @Author: liusuolong001
 * @Date: 2024-07-07 17:48:18
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-07 18:17:44
 */

const express = require("express");

const server = express();

/* server.use((request, response, next) => {
  if (request.headers["content-type"] === "application/json") {
    request.on("data", (data) => {
      const info = JSON.parse(data.toString());
      request.body = info;
    });
    request.on("end", () => {
      next();
    });
    return;
  }
  next();
}); */

/*  === 上面的操作 只能解析JSON格式*/
server.use(express.json());

server.post("/login", (request, response) => {
  console.log(request.body);
  if (request.body.name === "coderwhy" && request.body.password === "123456") {
    response.end("login success");
    return;
  }
  response.end("login error");
});

server.listen("8000", () => {
  console.log("本地服务已经开启xx");
});

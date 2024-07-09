/*
 * @Description:
 * @Author: liusuolong001
 * @Date: 2024-07-09 05:27:12
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-09 05:34:47
 */
const express = require("express");

/* 
  创建一个server服务
*/
const server = express();

/*  
  response.end()
  response.json() 传入很多类型Object,array,boolean,string,null.... 都会以Json格式返回
  response.status()方法 设置返回状态码
*/
server.post("/login", (request, response) => {
  // response.end("login success");
  response.status(500);
  response.json({
    code: 200,
    data: [
      {
        name: "yinhao",
        age: 18,
      },
    ],
  });
});

/* 
  开启服务
*/
server.listen("8000", () => {
  console.log("server success");
});

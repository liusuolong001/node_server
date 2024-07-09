/*
 * @Description:
 * @Author: liusuolong001
 * @Date: 2024-07-09 05:27:12
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-09 16:01:12
 */
const express = require("express");

/* 
  创建一个server服务
*/
const server = express();

/*  
  1.创建路由对象
  2.对应路由映射接口
*/
const useRouter = express.Router();

useRouter.get("/", (request, response) => {
  response.json("get info");
});

useRouter.get("/:id", (request, response) => {
  response.json("get user info");
});

server.use("/user", useRouter);
/* 
  开启服务
*/
server.listen("8000", () => {
  console.log("server success");
});

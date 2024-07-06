/*
 * @Description:
 * @Author: liusuolong001
 * @Date: 2024-07-06 05:24:13
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-06 07:03:53
 */
const http = require("http");

/* 创建一个http对应的服务器  启动命令nodemon */
/*  
  网络通讯也是数据流的格式
  body类型参数 request为可读流 
  1. request.on('data',(data) => {})当有一部分数据到达时触发，用于处理接收到的数据块;
  2. 解析body;获取16进制数据将其转成对象操作
  3. request.end 当请求全部接受完毕时出发end事件
*/
const serve = http.createServer((request, response) => {
  request.setEncoding("utf-8");
  let login;

  request.on("data", (data) => {
    const info = JSON.parse(data);
    if (request.method === "POST") {
      if (info.name === "coderwhy" && info.password === "123456") {
        login = true;
        return;
      }
      login = false;
    }
  });
  request.on("end", () => {
    if (login) {
      response.end("login success");
      return;
    }
    response.end("error request");
  });
});

/* 开启一个http服务 */
serve.listen(8000, () => {
  console.log("http服务开启~");
});

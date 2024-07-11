/*
 * @Description:
 * @Author: liusuolong001
 * @Date: 2024-07-11 09:14:06
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-11 09:22:34
 */
const koa = require("koa");

/* 
  创建一个实列kao
  创建一个路由router对象
*/
const app = new koa();

/**
 * 1.先打印11 有next执行第2个中间件
 * 2.打印22 有next执行第3个中间件
 * 3.打印33
 * 4.执行打印55
 * 5.最后执行打印44
 *
 * 洋葱模型
 * request由外往里面执行在由response里往外执行
 */
app.use((ctx, next) => {
  console.log("11");
  next();
  console.log("44");
});

app.use((ctx, next) => {
  console.log("22");
  next(), console.log("55");
});

app.use((ctx, next) => {
  console.log("33");
});
/* 
  开启服务
*/
app.listen("8000", () => {
  console.log("app success");
});

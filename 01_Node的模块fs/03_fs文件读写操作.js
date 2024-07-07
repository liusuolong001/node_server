/*
 * @Description:
 * @Author: liusuolong001
 * @Date: 2024-07-03 22:16:36
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-06 19:23:46
 */
/* commonjs 常用 */
const fs = require("fs");

/* 客户端传入的数据 */
const msg = "learning node服务器的";

/* 写入文件 flag*/
fs.writeFile("./files/txt/demo.txt", msg, { flag: "a" }, (error) => {
  if (error) {
    console.log("写入文件失败");
    return;
  }
  console.log("写入文件成功");
});

/* 读取文件 注意写入一个文件会将原文件数据覆盖掉*/
fs.readFile("./files/txt/demo.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.log("读取文件失败");
    return;
  }
  console.log("data@@", data);
});

console.log("yinhao");

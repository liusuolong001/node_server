/*
 * @Description:
 * @Author: liusuolong001
 * @Date: 2024-07-05 18:09:22
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-06 06:41:25
 */
const fs = require("fs");

/* 
  创建一个可读流
  start 从什么位置开始读取
  end 读取到什么位置后结束(包含end位置字符)
  highWaterMark 每次读取多个字节
*/

const readStream = fs.createReadStream("./files/demo.txt", {
  start: 3,
  end: 7,
  highWaterMark: 2,
});
/* 文件流是EventEmitter的实例 EventEmitter中所有方法readStream都可以使用 从第四位开始读取读到第七位*/
readStream.on("data", (data) => {
  console.log("readSteam", data.toString());
});

/* 
  open 通过流将文件打开 打开文件最先执行
*/
readStream.on("open", (fd) => {
  console.log("将文件流进行打开", fd);
});

/* 
  end 当所有数据接收完毕时触发，用于处理所有数据接收完毕后的操作
*/
readStream.on("end", () => {
  console.log("文件流已经读取到end位置");
});

/* 
  close 文件读取结束并且被关闭 文件流中不用手动去close文件 如果通过fs.open打开文件需要手动关闭 fs.close() 文件流中不需要手动emit事件底层帮你做了次操作
*/
readStream.on("close", () => {
  console.log("文件读取结束并且被关闭");
});

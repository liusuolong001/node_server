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

  readStream.pause(); //对文件读取进行暂停
  setTimeout(() => {
    readStream.resume(); //对文件恢复继续读取
  }, 2000);
});

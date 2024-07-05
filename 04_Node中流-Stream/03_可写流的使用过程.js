/*
 * @Description:
 * @Author: liusuolong001
 * @Date: 2024-07-05 20:55:10
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-06 03:14:13
 */

const fs = require("fs");

/*
  如果没有文件则创建并且覆盖  flags默认 w (打开文件写入)
  保留原有值 flags 修改为 r+ (打开文件进行读写) r+将3后面数据全部替换为write写入数据

  创建一个可写流
  start 开始文件的某个位置写入文件
  flags 修改文件而不是替换 修改为r+ 默认w 
*/
const writeStream = fs.createWriteStream("./files/write.txt", {
  start: 3,
  flags: "a+",
});

/* 
  写入成功有一个回调函数 return undefined 没有报错表示写入成功
*/
writeStream.write("zengbintao", (err) => {
  console.log("写入成功");
});

/* 
  写入完成createWriteStream与createReadStream不一样 写入流打开后不会自动关闭 需要手动调用close()
*/
writeStream.close();
writeStream.on("close", () => {
  console.log("文件被关闭了");
});

/* 
end两部操作将最后的文件写入到文件中,并且关闭文件
*/
// writeStream.end("hhhhh");

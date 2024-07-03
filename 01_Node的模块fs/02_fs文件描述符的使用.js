/* commonjs 常用 */
const fs = require("fs");

/* 打开文件  回调函数第二个参数是你文件描述符*/
fs.open("./files/txt/demo.txt", (error, fd) => {
  if (error) return;
  console.log("文件描述符", fd);

  // readFile读取文件 可以传入文件描述符number
  fs.readFile(fd, { encoding: "utf8" }, (error, res) => {
    if (error) return;
    console.log(res);
  });

  // 读取文件信息 必须要传入文件描述符
  fs.fstat(fd, (error, stats) => {
    if (error) return;
    console.log("stats", stats);
  });

  fs.close(fd);
});

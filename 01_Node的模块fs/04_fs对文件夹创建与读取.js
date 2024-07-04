/* commonjs 常用 */
const fs = require("fs");

const options = {
  withFileTypes: true,
};

/* 创建文件夹 */
fs.mkdir("./files/utils", (err) => {});

/* 读取文件夹  获取文件夹中文件的字符串*/
/* fs.readdir("./files", (err, files) => {
  console.log("files", files);
});
 */

/* 获取文件夹中文件的信息 2:文件夹 1:文件 isDirectory()判断是不是一个文件夹*/
fs.readdir("./files", options, (err, files) => {
  files.forEach((element) => {
    if (element.isDirectory()) {
      console.log("文件夹", element.name);
      return;
    }
    console.log("文件", element.name);
    fs.readFile(`./files/${element.name}`, { encoding: "utf-8" }, (err, data) => {
      console.log("element.name内容", data);
    });
  });
});

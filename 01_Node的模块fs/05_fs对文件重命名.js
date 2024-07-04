/* commonjs 常用 */
const fs = require("fs");

/* 对文件夹重命名 */
fs.rename("./files/utils", "./files/util", (err) => {
  if (err) {
    console.log("error", err);
  }
});

/* 对文件重命名 */
fs.rename("./files/demo001.txt", "./files/demo1.txt", (err) => {
  if (err) {
    console.log(err);
  }
});

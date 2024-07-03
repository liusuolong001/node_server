/* commonjs 常用 */
const fs = require("fs");

/* 同步读取 */
const res = fs.readFileSync("./files/txt/demo.txt", {
  encoding: "utf-8",
});
console.log("fs", res);
console.log("只有当readFileSync结束完之后才会执行我");

/* 异步读取:回调函数  通过回调函数拿到对应的结果*/
fs.readFile("./files/txt/demo.txt", { encoding: "utf-8" }, (error, res) => {
  if (error) {
    console.log("没有读取到");
    return;
  }
  console.log("readFile读取到了");
});
console.log("不用必须等到readFile方法会带哦读取完才走这里");

/* 异步读取:Promise  通过then的方式去拿到结果*/
fs.promises.readFile("./files/txt/demo.txt", { encoding: "utf-8" }).then((res) => {
  console.log("promises", res);
  console.log("promises.readFile");
});

// const { Buffer } = require("buffer");

/* 创建Buffer【16进制】  一个英文字母一个字节 一个中文三个字节 */
const b = Buffer.from("abcdef");

console.log("b", b);
console.log("b", b.toString());

/* 手动指定buffer创建过程的编码  默认utf-8   编码与解码格式必须一致*/
const c = Buffer.from("hhh", "utf16le");
console.log("c", c.toString("utf16le"));

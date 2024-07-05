// const { Buffer } = require("buffer");

/* 创建Buffer【16进制】 在内存中创建一个6位长度的buffer */
const b = Buffer.alloc(6);

// charCodeAt 获取w的编码将其传入到b[0]的位置 注意这里的102并不是数组102时ascall对应的16进制
b[0] = "w".charCodeAt();
b[1] = 102;
console.log("b", b);
console.log("b", b.toString());

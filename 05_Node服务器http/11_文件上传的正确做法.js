/*
 * @Description: 文件上传的正确做法 (底层太麻烦 直接用插件)
 * @Author: liusuolong001
 * @Date: 2024-07-06 18:14:40
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-06 22:06:22
 */

const http = require("http");
const fs = require("fs");

/* 
  创建一个http对应的服务器
  总结:客户端传入文件不仅仅只包含图片的数据,也有其他字符串和boundary数据,需要手动将图片信息截取出来才能展示正确图片或者文件
  上传文件客户端header应该设置为
  headers:{
    'Content-Type':'multipart/form-data'
  }

  步骤一:将数据作为二进制数据进行读取和处理
  步骤二:再将图片或者文件信息进行截取
  步骤三:将截取图片或者文件信息通过writeFile写入一个新的文件里展示
*/
const serve = http.createServer((request, response) => {
  //  并不会将数据转换成二进制格式，而是会将数据作为二进制数据进行读取和处理
  request.setEncoding("binary");
  /* 获取boundary 为最后移除boundary做准备 */
  const boundary = request.headers["content-type"].split("; ")[1].replace("boundary=", "");

  let formData = "";
  request.on("data", (data) => {
    console.log("data", data);
    formData += data;
  });
  request.on("end", () => {
    /* 截取image/jpeg位置开始的所有数据 */
    const imgType = "image/jpeg";
    let imageBinary = formData.substring(formData.indexOf(imgType) + imgType.length);

    /* imageBinary开始位置又两个空格 */
    imageBinary = imageBinary.replace(/^\s\s*/, "");

    /* 替换最后的boundary */
    imageBinary = imageBinary.substring(0, imageBinary.indexOf(`--${boundary}--`));

    fs.writeFile("./files/image.png", imageBinary, "binary", (err) => {
      if (err) {
        response.end("files upload error");
        return;
      }
      response.end("files upload success");
    });
  });
});

/* 开启一个http服务 */
serve.listen(8000, () => {
  console.log("http服务开启~");
});

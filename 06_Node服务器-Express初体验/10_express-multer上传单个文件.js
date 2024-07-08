/*
 * @Description:
 * @Author: liusuolong001
 * @Date: 2024-07-08 13:35:18
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-08 18:51:11
 */
const express = require("express");
const multer = require("multer");

/* 
  创建一个server服务
*/
const server = express();

/*  
  第三方库的中间件express-multer 处理上传文件
  dest 输出文件位置
  上传单文件upload.single('upload') 内部处理文件格式将处理完数据传给request 并且调用next()
  'upload' postman中上传文件的名称 
*/

const upload = multer({
  // dest: "upload",
  /* 自定义文件名称,需要指定文件夹名;手动创建
     null判断是否有错误
  */
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, "./uploads");
    },
    filename(req, file, callback) {
      callback(null, Date.now() + "_" + file.originalname);
    },
  }),
});
server.post("/upload", upload.single("upload"), (request, response) => {
  console.log(request.file);
  response.end("login success");
});

/* 
  开启服务
*/
server.listen("8000", () => {
  console.log("server success");
});

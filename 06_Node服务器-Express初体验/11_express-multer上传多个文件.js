/*
 * @Description:
 * @Author: liusuolong001
 * @Date: 2024-07-08 13:35:18
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-08 19:02:18
 */
const express = require("express");
const multer = require("multer");

/* 
  创建一个server服务
*/
const server = express();

/*  
  第三方库的中间件express-multer 处理上传文件
  上传多个文件upload.array('photos') 内部处理文件格式将处理完数据传给request 并且调用next()
  'photos' postman中上传文件的名称 
*/

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, "./uploads");
    },
    filename(req, file, callback) {
      callback(null, Date.now() + "_" + file.originalname);
    },
  }),
});
server.post("/upload", upload.array("photos"), (request, response) => {
  console.log(request.file);
  response.end("login success");
});

/* 
  开启服务
*/
server.listen("8000", () => {
  console.log("server success");
});

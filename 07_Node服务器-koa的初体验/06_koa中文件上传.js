/*
 * @Description:
 * @Author: liusuolong001
 * @Date: 2024-07-11 07:18:21
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-11 07:55:53
 */
const koa = require("koa");
const koaRouter = require("@koa/router");
const bodyParser = require("koa-bodyparser");
const koaMulter = require("@koa/multer");

/* 
  创建一个实列kao
  创建一个路由router对象
*/
const server = new koa();
const userRouter = new koaRouter({ prefix: "/upload" });
server.use(bodyParser());

const upload = koaMulter({
  // dest: "uploads",
  /* 自定义文件名称 */
  storage: koaMulter.diskStorage({
    destination(req, file, callback) {
      callback(null, "./uploads");
    },
    filename(req, file, callback) {
      callback(null, Date.now() + "_" + file.originalname);
    },
  }),
});

/**
 * 与express上传文件相似
 * 文件信息在context.request.file中
 * 单个文件上传
 * multer.single("img")
 * 多个文件上传
 * multer.array('photos')
 */
userRouter.post("/uploadImg", upload.single("img"), (context, next) => {
  console.log("file", context.request.file);
  context.body = "upload success";
});

userRouter.post("/uploadsPhotos", upload.array("photos"), (context, next) => {
  console.log("file", context.request.file);
});

/* 
 路由生效
*/
server.use(userRouter.routes());
server.use(userRouter.allowedMethods());

/* 
  开启服务
*/
server.listen("8000", () => {
  console.log("server success");
});

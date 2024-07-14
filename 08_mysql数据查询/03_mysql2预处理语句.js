/*
 * @Description:
 * @Author: liusuolong001
 * @Date: 2024-07-14 16:12:15
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-14 17:19:14
 */
const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  database: "demo_db",
  user: "root",
  password: "252739582yh",
});

/**
 * 预处理语句
 * 使用execute函数
 */
const sql = "SELECT * FROM `t_dql` WHERE price > ? && brand = ?";
connection.execute(sql, [1000, "华为"], (error, result) => {
  if (error) {
    console.log("error", error);
    return;
  }
  console.log("result", result);
});

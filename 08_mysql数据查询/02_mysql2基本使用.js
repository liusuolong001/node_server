/*
 * @Description:
 * @Author: liusuolong001
 * @Date: 2024-07-14 16:12:15
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-14 17:20:10
 */
const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  database: "demo_db",
  user: "root",
  password: "252739582yh",
});

/**
 * 处理基本语句使用query
 */
const sql = "SELECT * FROM `t_dql`";
connection.query(sql, (error, result, fields) => {
  if (error) {
    console.log("error", error);
    return;
  }
  console.log("result", result);
});

/*
 * @Description:
 * @Author: liusuolong001
 * @Date: 2024-07-14 16:12:15
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-14 17:29:23
 */

const mysql = require("mysql2");
const connection = mysql.createPool({
  host: "localhost",
  database: "demo_db",
  user: "root",
  password: "252739582yh",
  connectionLimit: 5,
});

// 使用promise()写法
const sql = "SELECT * FROM `t_dql` WHERE price > ? && brand = ?";
connection
  .promise()
  .execute(sql, [1000, "华为"])
  .then((res) => {
    console.log("result", result);
  })
  .catch((error) => {
    console.log(error);
  });

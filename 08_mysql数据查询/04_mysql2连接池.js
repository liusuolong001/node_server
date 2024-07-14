/*
 * @Description:
 * @Author: liusuolong001
 * @Date: 2024-07-14 16:12:15
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-14 17:22:18
 */

/**
 * 一个连接有多个请求情况下线程可能会被占用,每次请求都需要创建一个新的连接吗?
 * createPool创建一个连接池;连接池可以在需要的时候自动创建连接，并且创建的连接不会被销毁，会放到连接池中，后续可以继续使用；
 * connectionLimit;创建最大个数
 */
const mysql = require("mysql2");
const connection = mysql.createPool({
  host: "localhost",
  database: "demo_db",
  user: "root",
  password: "252739582yh",
  connectionLimit: 5,
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

/*
 * @Description:
 * @Author: liusuolong001
 * @Date: 2024-07-05 20:55:10
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-06 02:16:49
 */

const fs = require("fs");

/*
  可读流和可写流之间创建一个管道 
*/
const readSteam = fs.createReadStream("./files/demo.txt");
const writeSteam = fs.createWriteStream("./files/demo_copy.txt", {
  start: 4,
  flags: "a+",
});

readSteam.pipe(writeSteam);

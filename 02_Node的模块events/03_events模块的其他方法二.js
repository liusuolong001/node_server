const EventEmitter = require("events");
const e = new EventEmitter();

/* 事件监听只监听一次 */
e.once("why", () => {
  console.log("我只监听了一次 on1");
});

/* 将事件放在最前面*/
e.prependListener("why", () => {
  console.log("监听 on2");
});

/* 将事件放在最前面并且只监听一次*/
e.prependOnceListener("why", () => {
  console.log("prependOnceListener");
});

/* 移除所有事件监听 不传参数时移除所有事件名称 传参数时候只移除传递参数的时间监听*/
e.removeAllListeners("why");

e.emit("why");
// e.emit("why");
// e.emit("why");

const EventEmitter = require("events");
const e = new EventEmitter();

e.on("why", () => {});
e.on("why", () => {});
e.on("why", () => {});
e.on("kobe", () => {});
e.on("kobe", () => {});

/* 获取所有事件的监听名称 */
console.log(e.eventNames());

/* 获取监听器最大的监听个数 */
console.log(e.getMaxListeners());

/* 获取某一个事件名称对应的监听器个数 */
console.log(e.listenerCount("why"));

/* 获取某一个事件名称对应的监听器函数 [数组] */
console.log(e.listeners("kobe"));

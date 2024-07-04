const EventEmitter = require("events");
const emitter = new EventEmitter();

/* 监听事件的变化 */
emitter.on("foo", (...args) => {
  console.log("e", args);
});

function foo() {
  console.log("foo");
}

setTimeout(() => {
  /* 发射事件 */
  emitter.emit("foo", foo, 18);

  /* 取消事件 */
  emitter.off("foo", () => {
    console.log("取消事件");
  });
}, 2000);

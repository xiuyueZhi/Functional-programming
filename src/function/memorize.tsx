import * as React from "react";

class Memorize extends React.Component<any, any> {
  // 缓存函数
  memorize = (fn: Function): any => {
    const cache = {};
    return (...args) => {
      const key = JSON.stringify(args);
      if (!cache[key]) {
        cache[key] = fn.apply(this, args);
      }
      // console.log("缓存中的数据：", cache);
      return cache[key];
    };
  };

  // 加法运算 a + b
  add = (a: number, b: number): number => {
    console.log("add 函数被调用了！");
    return a + b;
  };
  addMemorize = this.memorize(this.add);

  render() {
    console.log("add(1,2)：", this.addMemorize(1, 2));
    console.log("add(1,2)：", this.addMemorize(1, 2));
    console.log("add(3,4)：", this.addMemorize(3, 4));
    return <div></div>;
  }
}
export default Memorize;

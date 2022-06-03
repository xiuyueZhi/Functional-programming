import * as React from "react";

class Parital extends React.Component<any, any> {
  // 计算 x + y + z
  add = (x: number, y: number, z: number): number => {
    return x + y + z;
  };

  // 偏函数
  partial = (fn, ...args) => {
    const arg1 = args;
    return (...args) => {
      return fn.apply(this, arg1.concat(args));
    };
  };

  addAB = this.partial(this.add, 1, 2);
  addPartial = this.partial(this.add);

  render() {
    console.log("普通调用：", this.add(1, 2, 3));
    console.log("偏函数(公用 a + b)：", this.addAB(3));
    console.log("偏函数：", this.addPartial(1, 2, 3));

    return <div></div>;
  }
}

export default Parital;

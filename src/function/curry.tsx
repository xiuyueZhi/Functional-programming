import * as React from "react";

class Curry extends React.Component<any, any> {
  // 返回参数相加的和
  // 传统方式
  add = (
    num1: number,
    num2: number,
    num3: number,
    num4: number,
    num5: number
  ): number => {
    return num1 + num2 + num3 + num4 + num5;
  };

  // 柯里化
  addCurry = (num1: number) => {
    return (num2: number) => {
      return (num3: number) => {
        return (num4: number) => {
          return (num5: number) => {
            return num1 + num2 + num3 + num4 + num5;
          };
        };
      };
    };
  };

  curry = (fn: Function): any => {
    return (...args) => {
      const arg1 = args;
      return (...args) => {
        const arg2 = arg1.concat(args);
        return (...args) => {
          return fn.apply(this, arg2.concat(args));
        };
      };
    };
  };

  // 拼接参数返回函数
  sub_curry = (fn: Function, args: any): any => {
    const arg1 = args;
    return (...args) => {
      return fn.apply(this, arg1.concat(args));
    };
  };

  // curry = (fn: Function, length?: number): any => {
  //   length = length || fn.length;
  //   return (...args) => {
  //     if (args.length < length) {
  //       return this.curry(this.sub_curry(fn, args), length - args.length);
  //     } else {
  //       return fn.apply(this, args);
  //     }
  //   };
  // };

  // curryFn = this.curry(this.add);

  render() {
    console.log("传统计算 1 + 2 + 3 + 4 + 5 ：", this.add(1, 2, 3, 4, 5));
    console.log(
      "柯里化计算 1 + 2 + 3 + 4 + 5 : ",
      this.addCurry(1)(2)(3)(4)(5)
    );

    // console.log(
    //   "经过柯里化转换之后的调用curryFn(1)(2)(3)(4)(5)：",
    //   this.curryFn(1)(2)(3)(4)(5)
    // );
    // console.log(
    //   "经过柯里化转换之后的调用curryFn(1, 2)(3, 4, 5))：",
    //   this.curryFn(1, 2)(3, 4, 5)
    // );
    // console.log(
    //   "经过柯里化转换之后的调用curryFn(1)(2, 3)(4, 5)：",
    //   this.curryFn(1)(2, 3)(4, 5)
    // );
    // console.log(
    //   "经过柯里化转换之后的调用curryFn(1, 2, 3, 4, 5)：",
    //   this.curryFn(1, 2, 3, 4, 5)
    // );
    return <div></div>;
  }
}
export default Curry;

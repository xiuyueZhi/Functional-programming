import * as React from "react";

class Compose extends React.Component<any, any> {
  // 1、实现首字母大写
  toUpperCase = (value: string): string => {
    return `${value.slice(0, 1).toUpperCase()}${value.slice(1)}`;
  };
  //2、添加字符串 Hello
  hello = (value: string): string => {
    return `Hello, ${value}`;
  };

  greet = (value: string): string => {
    return this.hello(this.toUpperCase(value));
  };

  // 实现组合函数
  compose = (...args: any): any => {
    const arg1 = args;
    return (...args) => {
      return arg1.reduceRight((result, fn) => [fn.apply(this, result)], args);
    };
  };

  greetCompose = this.compose(this.hello, this.toUpperCase);

  render() {
    return (
      <div>
        <div className="normal">
          <div>normal：this.hello(this.toUpperCase(value))</div>
          {`kite => Hello： Kite${this.greet("kite")}`}
        </div>
        <div className="compose">
          <div>compose：this.compose(this.hello, this.toUpperCase)</div>
          {`kite => Hello： Kite${this.greetCompose("kite")}`}
        </div>
      </div>
    );
  }
}
export default Compose;

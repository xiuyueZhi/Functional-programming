import * as React from "react";

class Lazy extends React.Component<any, any> {
  divide = (divisor: number, dividend: number): number => {
    if (divisor === 0) {
      this.divide = (divisor: number, dividend: number): number => {
        console.log("除数不能为0");
        return null;
      };
    } else if (typeof divisor === "number") {
      this.divide = (divisor: number, dividend: number): number => {
        return dividend / divisor;
      };
    }
    return null;
  };

  render() {
    this.divide(0, 1);
    console.log(this.divide(0, 1));
    console.log(this.divide(1, 1));
    // console.log(this.divide(1,1))
    return <div></div>;
  }
}
export default Lazy;

import * as React from "react";
import "./styles.css";

interface Student {
  stuNo: number;
  name: string;
  sex: number;
  age: number;
  province: string;
  city: string;
}

class Search extends React.Component<any, any> {
  students: Student[] = [
    {
      stuNo: 2022001,
      name: "张三三",
      sex: 1,
      age: 16,
      province: "浙江省",
      city: "杭州市"
    },
    {
      stuNo: 2022002,
      name: "王小明",
      sex: 1,
      age: 17,
      province: "浙江省",
      city: "杭州市"
    },
    {
      stuNo: 2022003,
      name: "张小安",
      sex: 2,
      age: 16,
      province: "浙江省",
      city: "杭州市"
    }
  ];
  // 需求一：根据学号查找其中一个学生。
  searchByStuNo = (value: number): Student => {
    for (let i = 0; i < this.students?.length; i++) {
      if (this.students[i]?.stuNo === value) return this.students[i];
    }
    return null;
  };

  // 需求二：根据姓名查找其中一个学生。
  searchByName = (value: string): Student => {
    for (let i = 0; i < this.students?.length; i++) {
      if (this.students[i]?.name === value) return this.students[i];
    }
    return null;
  };

  // 需求三：根据城市查找其中一个学生。
  searchByCity = (value: string): Student => {
    for (let i = 0; i < this.students?.length; i++) {
      if (this.students[i]?.city === value) return this.students[i];
    }
    return null;
  };

  // 优化1
  searchEqual = (property: string, value: any): Student => {
    for (let i = 0; i < this.students?.length; i++) {
      if (this.students[i]?.[property] === value) return this.students[i];
    }
    return null;
  };

  // 需求四：根据姓名模糊搜索其中一个学生
  searchFuzzy = (property: string, value: any): Student => {
    for (let i = 0; i < this.students?.length; i++) {
      if (this.students[i]?.[property]?.includes(value))
        return this.students[i];
    }
    return null;
  };

  // 优化2
  search = (fn: Function) => {
    for (let i = 0; i < this.students?.length; i++) {
      const student = this.students[i];
      if (fn(student)) return student;
    }
    return null;
  };

  byEqual = (property: string, value: any) => {
    return (student) => student?.[property] === value;
  };
  byFuzzy = (property: string, value: any) => {
    return (student) => student?.[property].includes(value);
  };

  // 需求五：根据学号和姓名查找其中一个学生。
  searchByStuNoAndName = (fn1: Function, fn2: Function) => {
    for (let i = 0; i < this.students?.length; i++) {
      const student = this.students[i];
      if (fn1(student) && fn2(student)) return student;
    }
    return null;
  };

  // and 方法
  and = (...params) => {
    return (student) => {
      for (let i = 0; i < params.length; i++) {
        if (!params[i](student)) return false;
      }
      return true;
    };
  };

  // 纯函数
  searchPure = (fn: Function, students: Student[]) => {
    for (let i = 0; i < students?.length; i++) {
      const student = students[i];
      if (fn(student)) return student;
    }
    return null;
  };

  // 柯里化
  searchCurry = (fn: Function) => {
    return (students: Student[]) => {
      for (let i = 0; i < students?.length; i++) {
        const student = students[i];
        if (fn(student)) return student;
      }
      return null;
    };
  };

  render() {
    return (
      <div>
        {/* <div className="normal common">
          <span>常规：</span>
          <div>
            查找学号2022001：
            {this.searchByStuNo(2022001)?.name}
          </div>
          <div>
            查找名字张小安：
            {this.searchByName("张小安")?.name}
          </div>
        </div> */}
        {/* <div className="first-property common">
          <span>抽离出 property:</span>
          <div>
            查找学号2022001：
            {this.searchEqual("stuNo", 2022001)?.name}
          </div>
          <div>
            模糊查找名字包含“小”：
            {this.searchFuzzy("name", "小")?.name}
          </div>
        </div> */}
        <div className="second-search common">
          <span>抽离出 search:</span>
          <div>
            查找学号2022001：
            {this.search(this.byEqual("stuNo", 2022001))?.name}
          </div>
          <div>
            模糊查找名字包含“小”：
            {this.search(this.byFuzzy("name", "小"))?.name}
          </div>
        </div>
        <div className="third-and common">
          <span>组合 and:</span>
          <div>
            查找性别1和名字包含“小”：
            {
              this.search(
                this.and(this.byEqual("sex", 1), this.byFuzzy("name", "小"))
              )?.name
            }
          </div>
        </div>
        {/* <div className="fourth-curry common">
          <span>纯函数 searchPure:</span>
          <div>
            查找学号2022001：
            {
              this.searchPure(this.byEqual("stuNo", 2022001), this.students)
                ?.name
            }
          </div>
        </div> */}
        <div className="last-curry common">
          <span>柯里化 searchCurry:</span>
          <div>
            查找学号2022001：
            {
              this.searchCurry(this.byEqual("stuNo", 2022001))(this.students)
                ?.name
            }
          </div>
        </div>
      </div>
    );
  }
}
export default Search;

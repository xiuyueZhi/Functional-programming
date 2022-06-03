import "./styles.css";
import Search from "./search";
import Lazy from "./function/lazy";
import Memorize from "./function/memorize";
import Curry from "./function/curry";
import Parital from "./function/parital";
import Compose from "./function/compose";

export default function App() {
  return (
    <div className="App">
      {/* <h1>函数式编程</h1>
      <Search /> */}
      {/* <h1>惰性函数</h1>
      <Lazy /> */}
      {/* <h1>缓存函数</h1>
      <Memorize /> */}
      {/* <h1>柯里化函数</h1>
      <Curry /> */}
      {/* <h1>偏函数</h1>
      <Parital /> */}
      <h1>组合函数</h1>
      <Compose />
    </div>
  );
}

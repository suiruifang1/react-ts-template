import React, { useState, useEffect } from "react";
import Robot from "./components/Rebot";
import styles from "./App.module.css";
import logo from "./assets/images/logo.svg";
import ShoppingCart from "./components/ShoppingCart";
interface Props {}

const App: React.FC<Props> = (props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const [robotFallery, setRobotFallery] = useState<any>([]); //来自网络请求，返回的数据不受控制 不强行定义数据类型

  useEffect(() => {
    document.title = `count${count}`;
  }, [count]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setRobotFallery(data);
    setLoading(false);
  };

  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="" />
        <h1>阿斯顿</h1>
      </div>
      {/* setState 异步更新 同步执行 */}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        加法
      </button>
      count:{count}
      <ShoppingCart />
      {!loading ? (
        <div className={styles.robotList}>
          {robotFallery.map((item) => (
            <Robot id={item.id} email={item.email} name={item.name} />
          ))}
        </div>
      ) : (
        "加载中"
      )}
    </div>
  );
};

export default App;

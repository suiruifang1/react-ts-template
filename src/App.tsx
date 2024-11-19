import robots from "./mockdata/rebots.json";
import Robot from "./components/Rebot";
import styles from "./App.module.css";
import logo from "./assets/images/logo.svg"

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} />
        <h1>阿斯顿</h1>
      </div>
      <div className={styles.robotList}>
        {robots.map((item) => (
          <Robot id={item.id} email={item.email} name={item.name} />
        ))}
      </div>
    </div>
  );
}

export default App;

import styles from "./App.module.css";
import HomePage from "./pages/HomePage";
import HomePage2 from "./pages/HomePage2";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home2" element={<HomePage2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

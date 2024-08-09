import { Link, Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";

const Layout = () => {
  return (
    <div className={styles.container}>
      <Link to="/">Generator</Link>
      <Link to="/scan">Scanner</Link>
      <Link to="scan/history">History generator</Link>
      <Link to="generator/history">History scanner</Link>
      <Outlet />
    </div>
  );
};

export default Layout;

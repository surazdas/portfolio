import styles from "@/styles/Header.module.scss";
import Link from "next/link";
import { useState } from "react";
const Header = () => {
  const [clicked, setClicked] = useState("Home");

  return (
    <div className={styles.header}>
      <div className={styles.header_left}></div>
      <div className={styles.header_right}>
        <div
          className={styles.header_right_home}
          onClick={() => setClicked("Home")}
        >
          <Link href="/">Home</Link>
          {clicked === "Home" && (
            <div className={styles.header_right_buttom}></div>
          )}
        </div>
        <div
          className={styles.header_right_home}
          onClick={() => setClicked("About")}
        >
          <Link href="#about">About</Link>
          {clicked === "About" && (
            <div className={styles.header_right_buttom}></div>
          )}
        </div>
        <div
          className={styles.header_right_home}
          onClick={() => setClicked("Todo")}
        >
          <Link href="/todo">Todo</Link>
          {clicked === "Todo" && (
            <div className={styles.header_right_buttom}></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

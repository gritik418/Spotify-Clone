import React from "react";
import styles from "./TopBar.module.css";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const TopBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.group}>
        <div className={styles.icon}>
          <GoChevronLeft />
        </div>
        <div className={styles.icon}>
          <GoChevronRight />
        </div>
      </div>
      <div className={styles.group}>
        <button className={styles.textBtn}>Sign up</button>
        <button className={styles.btn}>Log in</button>
      </div>
    </div>
  );
};

export default TopBar;

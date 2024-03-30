import React from "react";
import { GoHomeFill } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import styles from "./NavigationGroup.module.css";

const NavigationGroup = () => {
  return (
    <div className={styles.navigation}>
      <img src="/images/logo.png" alt="Spotify" className={styles.logo}></img>
      <div className={styles.navItems}>
        <div className={styles.item}>
          <a href="/" className={styles.link}>
            <GoHomeFill className={styles.icon} />
            Home
          </a>
        </div>
        <div className={styles.item}>
          <a href="/" className={styles.link}>
            <CiSearch className={styles.icon} />
            Search
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavigationGroup;

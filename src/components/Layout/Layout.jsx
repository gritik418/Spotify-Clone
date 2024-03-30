import React from "react";
import styles from "./Layout.module.css";
import NavigationGroup from "../NavigationGroup/NavigationGroup";
import Library from "../Library/Library";
import TopBar from "../TopBar/TopBar";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.group}>
        <div className={styles.sidebar}>
          <NavigationGroup />
          <Library />
        </div>
        <div className={styles.mainSection}>
          <TopBar />
          {children}
        </div>
      </div>
      <div className={styles.bottomBar}>
        <p>Preview of Spotify</p>
        <div className={styles.btn}>Sign up free</div>
      </div>
    </div>
  );
};

export default Layout;

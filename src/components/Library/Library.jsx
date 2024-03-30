import React from "react";
import { LuLibrary } from "react-icons/lu";
import { IoAddOutline } from "react-icons/io5";
import { GrLanguage } from "react-icons/gr";
import styles from "./Library.module.css";

const Library = () => {
  return (
    <div className={styles.library}>
      <div className={styles.heading}>
        <div className={styles.group}>
          <div className={styles.subgroup}>
            <LuLibrary className={styles.icon} />
            Your Library
          </div>
          <IoAddOutline className={styles.addIcon} />
        </div>
      </div>
      <div className={styles.items}>
        <div className={styles.createPlaylist}>
          <p className={styles.title}>Create your first playlist</p>
          <p className={styles.subtitle}> It's easy, we'll help you</p>
          <button className={styles.btn}>Create playlist</button>
        </div>

        <div className={styles.podcasts}>
          Let's find some podcasts to follow
        </div>
      </div>

      <div className={styles.actions}>
        <div className={styles.row}>
          <p className={styles.text}>Legal</p>
          <p className={styles.text}>Safety & Privacy Center</p>
          <p className={styles.text}>Privacy Policy</p>
        </div>

        <div className={styles.row}>
          <p className={styles.text}>Cookies</p>
          <p className={styles.text}>About Ads</p>
          <p className={styles.text}>Accessibility</p>
        </div>

        <div className={styles.row}>
          <p className={styles.text}>Cookies</p>
        </div>

        <button className={styles.btnOutlined}>
          <GrLanguage />
          English
        </button>
      </div>
    </div>
  );
};

export default Library;

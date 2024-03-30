import React from "react";
import styles from "./ListView.module.css";
import RoundedCard from "../RoundedCard/RoundedCard";

const ListView = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.title}>Popular artists</p>
        <p className={styles.btn}>Show all</p>
      </div>

      <div className={styles.list}>
        <RoundedCard />
        <RoundedCard />
        <RoundedCard />
        <RoundedCard />
        <RoundedCard />
        <RoundedCard />
      </div>
    </div>
  );
};

export default ListView;

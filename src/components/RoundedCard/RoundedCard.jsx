import React from "react";
import styles from "./RoundedCard.module.css";

const RoundedCard = () => {
  return (
    <div className={styles.container}>
      <img
        src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
        className={styles.image}
      />
      <p className={styles.title}>Anirudh Ravichander</p>
      <p className={styles.desc}>Artist</p>
    </div>
  );
};

export default RoundedCard;

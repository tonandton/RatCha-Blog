import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b className={styles.bold}>Hi, everyone </b>this my blog Ratcha
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            praesentium corporis distinctio
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            modi itaque cupiditate harum eligendi, mollitia officia delectus
            recusandae laboriosam enim sint quam laborum fugiat distinctio
            consequatur sed reprehenderit? Quo, porro.
          </p>
          <button className={styles.button}>Read Me</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;

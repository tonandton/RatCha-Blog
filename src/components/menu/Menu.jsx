import React from "react";
import Link from "next/link";
import styles from "./menu.module.css";
import Image from "next/image";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category}`}>Travel</span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              doloremque
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}> - 10.03.2025</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Menu;

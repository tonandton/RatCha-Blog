import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          {/* <Image src="/logo.png" alt="Ratcha" width={50} height={50} /> */}
          <h3 className={styles.logoText}>Ratcha | Blog</h3>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
          assumenda consequuntur similique veniam labore ullam.
        </p>
        {/* <div className={styles.icons}>
          <Image src="/facebook.png" alt="" width={18}height={18} />
          <Image src="/instagram.png" alt="" width={18}height={18} />
          <Image src="/youtube.png" alt="" width={18}height={18} />
          <Image src="/facebook.png" alt="" width={18}height={18} />
        </div> */}
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Blog</Link>
          <Link href="/">Work</Link>
          <Link href="/">About</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Travel</Link>
          <Link href="/">Food</Link>
          <Link href="/">Coding</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

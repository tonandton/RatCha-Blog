import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import AuthLink from "../authLink/AuthLink";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/"> RatCha | Blog</Link>
      </div>
      <div className={styles.links}>
        <ThemeToggle />
        {/* <Link href="/" className={styles.link}>
          Home
        </Link> */}
        <Link href="/" className={styles.link}>
          Blog
        </Link>
        <Link href="/" className={styles.link}>
          Work
        </Link>
        <Link href="/" className={styles.link}>
          About
        </Link>
        <AuthLink />
      </div>
    </div>
  );
};

export default Navbar;

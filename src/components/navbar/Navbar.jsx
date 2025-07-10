import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import AuthLink from "../authLink/AuthLink";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>RatCha | Blog</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/">Homepage</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Work</Link>
        <Link href="/">About</Link>
        <AuthLink />
      </div>
    </div>
  );
};

export default Navbar;

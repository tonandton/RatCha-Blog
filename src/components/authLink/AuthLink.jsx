"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./authLink.module.css";
import Link from "next/link";

const AuthLink = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // temporary
  const status = "notauthenticated";

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.desktopLinks}>
        {status === "notauthenticated" ? (
          <Link href="/login" className={styles.link}>
            Login
          </Link>
        ) : (
          <>
            <Link href="/write" className={styles.link}>
              Write
            </Link>
            <span className={styles.link}>Logout</span>
          </>
        )}
      </div>

      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      <div
        ref={menuRef}
        className={`${styles.responsiveMenu} ${open ? styles.open : ""}`}
      >
        {/* <Link href="/" onClick={() => setOpen(false)}>
          Home
        </Link> */}
        <Link href="/blog" onClick={() => setOpen(false)}>
          Blog
        </Link>
        <Link href="/work" onClick={() => setOpen(false)}>
          Work
        </Link>
        <Link href="/about" onClick={() => setOpen(false)}>
          About
        </Link>

        {status === "notauthenticated" ? (
          <Link href="login" onClick={() => setOpen(false)}>
            Login
          </Link>
        ) : (
          <>
            <Link href="/write" onClick={() => setOpen(false)}>
              Write
            </Link>
            <span className={styles.link}>Logout</span>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthLink;

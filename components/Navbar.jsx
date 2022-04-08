// import React from 'react'
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {

  const [open, setOpen] = useState(false)

  return (
    <nav className={styles.container}>
      <Link href="/">
        <a>AGENCIA</a>
      </Link>
      <ul className={styles.list}>
        <li className={styles.itemList}>
          <Link href="/products/design">
            <a>DESIGN</a>
          </Link>
        </li>
        <li className={styles.itemList}>
          <Link href="/products/development">
            <a>DEVELOPMENT</a>
          </Link>
        </li>
        <li className={styles.itemList}>
          <Link href="/products/production">
            <a>PRODUCTION</a>
          </Link>
        </li>
        <li className={styles.itemList}>
          <Link href="/products/photography">
            <a>PHOTOGRAPHY</a>
          </Link>
        </li>
        <li className={styles.itemList}>
          <Link href="/contact">
            <a>CONTACT</a>
          </Link>
        </li>
      </ul>
      <div className={styles.hamburger} onClick={()=> setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      <ul className={styles.menu} style={{right: open ? "0px" : "-50vw"}} onClick={()=> setOpen(false)}>
      <li className={styles.menuItem}>
          <Link href="/products/design">
            <a>DESIGN</a>
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/products/development">
            <a>DEVELOPMENT</a>
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/products/production">
            <a>PRODUCTION</a>
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/products/photography">
            <a>PHOTOGRAPHY</a>
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/contact">
            <a>CONTACT</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

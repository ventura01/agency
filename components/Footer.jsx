import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.cardL}>
        <h1 className={styles.title}>AGENCIA CREATIVA</h1>
        <h1 className={styles.linkTitle}>
          <Link passHref href="/">
            <span className={styles.linkText}>WORK WITH US</span>
          </Link>
  {/*<Image src="/img/link.png" alt="" width={40} height={40} />*/}
        </h1>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          9309 Reynolds Pines <br />
          16486-1985
        </div>
        <div className={styles.cardItem}>
          Amalia32@yahoo.com <br />
          503.550.7687 x2837
        </div>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          Schoen, Thiel and Crist
          <br />
        </div>
        <div className={styles.cardItem}>
          All rights reeserved. <br />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

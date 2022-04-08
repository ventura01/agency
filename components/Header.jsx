import React from "react";
import Image from "next/image";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>
          <span className={styles.brand}>AGENCIA </span>DIGITAL PRODUCTION
          AGENCY
        </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
          nam laboriosam amet a veniam aspernatur inventore totam? Ex dolor quos
          cumque animi autem maxime, veritatis quae temporibus sunt adipisci
          quas odit quo! Doloribus vitae mollitia fugit.
        </p>
        <button className={styles.button}>More info</button>
      </div>
      <div className={styles.card}>
        <Image
          src="/img/Designer.png"
          // width={100}
          // height={100}
          priority
          layout="fill"
          objectFit="cover"
          alt=""
        />
      </div>
    </header>
  );
};

export default Header;

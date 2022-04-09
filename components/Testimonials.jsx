import React from "react";
import { users } from "../data";
import Image from "next/image";
import styles from "../styles/Testimonials.module.css";

const Testimonials = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Testimonials</h1>
      <div className={styles.wrapper}>
        {users.map((user) => (
          <div key={user.id} className={styles.card}>
            <Image src={`/img/${user.logo}`} width={30} height={30} alt="" />
            <p className={styles.comment}>{user.comment}</p>
            <div className={styles.person}>
              <Image
                src={`/img/${user.avatar}`}
                alt=""
                width={45}
                height={45}
                objectFit="cover"
                className={styles.avatar}
              />
              <div className={styles.info}>
                <span className={styles.username}>{user.name}</span>
                <span className={styles.jobTitle}>{user.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

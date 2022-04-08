import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Services.module.css";

const Services = ({ services }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>What we can do</h1>
      <h2 className={styles.subTitle}>Services we can help you with!</h2>
      <div className={styles.services}>
        {services.map((service) => (
          <Link passHref href={`/products/${service.name}`} key={service.id}>
            <div className={styles.service}>
              <div className={styles.desc}>{service.desc}</div>
              <span className={styles.cat}>{service.title}</span>
              <div className={styles.media}>
                {service.video ? (
                  <video
                    src={`/img/${service.video}`}
                    autoPlay
                    loop
                    muted
                    className={styles.video}
                  />
                ) : (
                  <Image
                    src={`/img/${service.photo}`}
                    height={100}
                    width={100}
                    objectFit="cover"
                    alt=""
                    layout="responsive"
                  />
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;

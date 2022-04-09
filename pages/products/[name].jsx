import React from "react";
import Head from "next/head";
import Link from "next/image";
import Image from "next/image";
import styles from "../../styles/Product.module.css";
import { data } from "../../data";

const Product = ({ product }) => {
  const pageServ = product.title;

  return (
    <div className={styles.container}>
      <Head>
        <title>Agencia | {pageServ}</title>
        <meta name="description" content="Pagina de servicios" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.cardL}>
        {product.images.map((image) => (
          <div key={image.id} className={styles.imgContainer}>
            <Image
              src={image.url}
              alt=""
              // width={500}
              // height={500}
              objectFit="cover"
              layout="fill"
            />
          </div>
        ))}
      </div>
      <div className={styles.cardS}>
        <h1 className={styles.title}>{product.title}</h1>
        <p className={styles.desc}>{product.longDesc}</p>
        <button className={styles.button}>Contact</button>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const products = data;
  const paths = products.map((item) => {
    return { params: { name: item.name } };
  });
  return { paths, fallback: false };
};

export const getStaticProps = async (ctx) => {
  const name = ctx.params.name;
  const product = data.filter((item) => item.name === name)[0];
  return { props: { product } };
};

export default Product;

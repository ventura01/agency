import Head from "next/head";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import { data } from "../data";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";

export default function Home({ services }) {
  console.log(services);
  return (
    
    <div className={styles.container}>
    <Head>
        <title>Agencia | Inicio</title>
        <meta name="description" content='Pagina de inicio de la mejor Agencia de Publicidad' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Services services={services} />
      <Testimonials />
    </div>
  );
}
export const getStaticProps = async () => {
  const services = data;
  return {
    props: { services },
  };
};

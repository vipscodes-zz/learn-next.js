import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Head from "next/head";
export default function Home() {
  return (
    <Layout titlePage="Home">
      <h1 className={styles["title-homepage"]}>Welcome Avip</h1>
    </Layout>
  );
}

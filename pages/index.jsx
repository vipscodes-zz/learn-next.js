import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Image from "next/image";
export default function Home() {
  return (
    <Layout titlePage="Home">
      <Image src="/vercel.svg" width={300} height={200} alt="profile" />
      <h1 className={styles["title-homepage"]}>Welcome Avip</h1>
    </Layout>
  );
}

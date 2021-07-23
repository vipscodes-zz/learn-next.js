import Header from "../components/header";
import Footer from "../components/footer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <h1 className={styles["title-homepage"]}>Welcome Avip</h1>
      <Footer />
    </>
  );
}

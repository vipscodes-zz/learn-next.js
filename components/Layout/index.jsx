import Header from "../header";
import Footer from "../footer";
import styles from "./Layout.module.css";
import { ReactNode } from "react";

// interface LayoutProps {
//   children: ReactNode;
// }
export default function index(props) {
  const { children } = props;
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
}

import Header from "../header";
import Footer from "../footer";
import styles from "./Layout.module.css";
import { ReactNode } from "react";
import Head from "next/head";
import PropTypes from "prop-types";

// interface LayoutProps {
//   children: ReactNode;
// }
export default function Index(props) {
  const { children, titlePage } = props;
  return (
    <>
      <Head>
        <title>NextJS Basic | {titlePage}</title>
        <meta name="description" content="Website NextJS" />
      </Head>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    </>
  );
}
Index.propTypes = {
  titlePage: PropTypes.string,
  children: PropTypes.node,
};

import Meta from "./Meta";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className={styles.container}>
        <h1>Coming from Layout</h1>
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;

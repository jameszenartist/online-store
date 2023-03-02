import Link from "next/link";
import Styles from "../styles/Nav.module.css";
const Nav = () => {
  return (
    <nav>
      <h1>Nav Component</h1>
      <div className={Styles.logo}>
        <h3>
          <Link href="/">Home</Link>
        </h3>
        <h3>
          <Link href="/about">About</Link>
        </h3>
        <h3>
          <Link href="/cart">Cart</Link>
        </h3>
        <h3>
          <Link href="/ninjas">Ninja Listing</Link>
        </h3>
      </div>
    </nav>
  );
};

export default Nav;

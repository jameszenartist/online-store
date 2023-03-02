import Meta from "../../components/Meta";
import List from "../../components/List";
import Link from "next/link";
import { Items } from "../../items";
import Styles from "../../styles/Cart.module.css";

export const getStaticProps = async () => {
  return { props: { cartItems: Items } };
};

const cartItems = ({ cartItems }) => {
  return (
    <>
      <Meta title="All Cart Items" href="/favicon.ico" />

      <h1>All Shopping Cart Items</h1>
      <div className={Styles.list}>
        <List>
          {cartItems.map((item) => (
            <Link
              key={item.id}
              href={`/cart/${item.id}`}
              className={Styles.card}
            >
              <h3>{item.title}</h3>
            </Link>
          ))}
        </List>
      </div>
    </>
  );
};

export default cartItems;

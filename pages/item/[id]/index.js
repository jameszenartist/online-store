import { server } from "../../../config/index";
import Meta from "../../../components/Meta";
import Link from "next/link";
import recommendProducts from "../../../components/recommendProducts";
import Styles from "../../../styles/Item.module.css";

const item = ({ item }) => {
  return (
    <>
      <Meta title="Item Page" description={item.description} />
      <div className={Styles.container}>
        <p>This is item {item.id}</p>
        <h3>{item.title}</h3>
        <br />

        <p>{item.description}</p>
        <br />
        <img src={item.image} alt="product-img" />
        <br />

        <h2>
          <Link href="/">Go Back</Link>
        </h2>
      </div>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/items/${context.params.id}`);
  const item = await res.json();
  return { props: { item } };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/items`);
  const items = await res.json();
  console.log(items);
  const ids = items.map((item) => item.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return { paths, fallback: false };
};

export default item;

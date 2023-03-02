import { Items } from "../../items";

const cartItem = ({ cartItem }) => {
  return (
    <div>
      <h1>{`Cart Item ${cartItem.id}`}</h1>
      <div>
        <h2>{cartItem.title}</h2>
        <h2>{cartItem.price}</h2>
      </div>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const cartItem = Items.find((item) => item.id === id);
  return {
    props: {
      cartItem: cartItem,
    },
  };
};

export const getStaticPaths = async () => {
  const ids = Items.map((item) => item.id);
  const paths = ids.map((id) => ({
    params: { id: id.toString() },
  }));
  return { paths, fallback: false };
};

export default cartItem;

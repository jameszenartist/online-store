import List from "./List";
import Card from "../components/Card";

import Styles from "../styles/ItemsList.module.css";

const ItemsList = ({ items }) => {
  return (
    <>
      <h1>Items List: {items.length} items</h1>

      <List className={Styles.itemsList}>
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </List>
    </>
  );
};

export default ItemsList;

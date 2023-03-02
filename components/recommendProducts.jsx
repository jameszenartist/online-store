import List from "./List";
import Card from "../components/Card";

const recommendProducts = ({ suggItems }) => {
  return (
    <>
      <h1>Recommended Items: </h1>

      <List>
        {suggItems.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </List>
    </>
  );
};

export default recommendProducts;

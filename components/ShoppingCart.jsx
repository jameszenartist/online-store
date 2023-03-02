import List from "./List";

const ShoppingCart = ({ cartItems }) => {
  return (
    <div className=".cart">
      <h2>Your Shopping Cart: {cartItems.length} Items</h2>
      <List>
        {cartItems.map((item) => (
          <li key={item.id}>
            <p>{item.title}</p>
          </li>
        ))}
      </List>
    </div>
  );
};

export default ShoppingCart;

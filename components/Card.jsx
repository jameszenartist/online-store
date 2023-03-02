import Link from "next/link";
import cardStyles from "../styles/Card.module.css";

const Card = ({ item }) => {
  return (
    <div className={cardStyles.card}>
      <Link legacyBehavior href="/item/[id]" as={`/item/${item.id}`}>
        <a>
          <h3>{item.title}</h3>
          <img src={item.image} alt="product_img" />
          <p>{item.description}</p>
        </a>
      </Link>
    </div>
  );
};

export default Card;

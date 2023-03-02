import { AiOutlineShoppingCart } from "react-icons/ai";
import Meta from "../components/Meta";
import Header from "../components/Header";
import { Items } from "../items";
import ItemsList from "../components/ItemsList";
import Pagination from "../HOC/Pagination";
import Styles from "../styles/Home.module.css";
const PaginationItems = Pagination(ItemsList, Items);

export default function Home() {
  return (
    <div>
      <Meta title="Home Page" href="/favicon.ico" />
      <Header title="Develop. Preview. Ship. 🚀" />
      <h1 className={Styles.icon}>
        <AiOutlineShoppingCart />
      </h1>

      <PaginationItems items={Items} />
    </div>
  );
}

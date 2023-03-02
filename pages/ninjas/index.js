import Meta from "../../components/Meta";
import List from "../../components/List";

import Link from "next/link";
import ninjasStyles from "../../styles/Ninjas.module.css";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users?_limit=5"
  );
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
};

// Route for this index.js will be:
// http://localhost:3000/ninjas
const Ninjas = ({ ninjas }) => {
  // console.log(ninjas);
  return (
    <>
      <Meta title="All Ninjas" href="/favicon.ico" />

      <div className={ninjasStyles.ninjas}>
        <h1>All Ninjas</h1>
        <h2 className={ninjasStyles.link}>
          <Link href="/">Back Home</Link>
        </h2>
        <div className={ninjasStyles.list}>
          <List>
            {ninjas.map((ninja) => (
              <Link key={ninja.id} href={`/ninjas/${ninja.id}`}>
                <h3>{ninja.name}</h3>
              </Link>
            ))}
          </List>
        </div>
      </div>
    </>
  );
};

export default Ninjas;

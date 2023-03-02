import Meta from "../../components/Meta";

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users?_limit=5"
  );
  const data = await res.json();
  const paths = data.map((ninja) => {
    return { params: { id: ninja.id.toString() } };
  });
  return { paths, fallback: false };
};

// this data will be injected into each individ page:
// fetched 5 times
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();
  return { props: { ninja: data } };
};

const Details = ({ ninja }) => {
  console.log(ninja);
  return (
    <>
      <Meta title="Details Page" description={ninja.description} />
      <div>
        <h1>Details Page</h1>
        <h3>{ninja.name}</h3>
        <h3>{ninja.email}</h3>
      </div>
    </>
  );
};

export default Details;

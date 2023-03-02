import Link from "next/link";

// Route for this page will be:
// http://localhost:3000/ninjas/test
const Test = () => {
  return (
    <div>
      <h1>TEST</h1>

      <h2>
        <Link href="/">Back Home</Link>
      </h2>
    </div>
  );
};

export default Test;

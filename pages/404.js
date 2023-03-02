import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    console.log("useEffect ran");
    let timer = setTimeout(() => {
      // router.go()
      router.push("/");
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="not-found">
      <h1>Oooops...</h1>
      <h2>That page cannot be found.</h2>
      <h2>
        <Link href="/">Back Home</Link>
      </h2>
    </div>
  );
};

export default NotFound;

import { useState } from "react";
import Link from "next/link";
import Meta from "../components/Meta";
import Header from "../components/Header";

export default function About(props) {
  return (
    <>
      <div>
        <Meta title="About Page" href="/favicon.ico" />

        <Header title="About Page 📕" />

        <h2>
          <Link href="/">Back Home</Link>
        </h2>
      </div>
    </>
  );
}

import Head from "next/head";

const Meta = ({ title, href, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />

      <link rel="icon" href={href} />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Online Store",
  keywords: "store products online shopping stripe",
  description: "Buy the latest products today.",
};

export default Meta;

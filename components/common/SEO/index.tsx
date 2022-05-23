import Head from "next/head";
import { description, url, image, name } from "../../../data/config";

const SEO = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content={name} />
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta name="og:type" content="website" />
      <meta name="og:title" content={title} />
      <meta name="og:url" content={url} />
      <meta name="og:image" content={image} />
      <meta name="og:image:alt" content="karam koujan's image" />
      <meta name="og:site_name" content="personal portfolio" />
      <meta name="og:description" content={description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:type" content="website" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content="karam koujan's image" />
    </Head>
  );
};
export default SEO;

import Head from "next/head";
import { description, url, name } from "../../../data/config";
import profileImg from "../../../public/assets/images/profileImg.jpg";
import cardProfileImg from "../../../public/assets/images/cardProfileImg.jpg";

interface propsI {
  title: string;
}
const SEO = ({ title }: propsI) => {
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
      <meta name="og:image" content={profileImg.src} />
      <meta name="image" property="og:image" content={profileImg.src} />
      <meta name="og:image:alt" content="karam koujan's image" />
      <meta name="og:site_name" content="personal portfolio" />
      <meta name="og:description" content={description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:type" content="website" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:image" content={cardProfileImg.src} />
      <meta name="twitter:image:alt" content="karam koujan's image" />
      <meta name="title" property="og:title" content={title} />
      <meta property="og:type" content="website" />
    </Head>
  );
};
export default SEO;

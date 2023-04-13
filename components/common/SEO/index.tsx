import Head from "next/head";

interface propsI {
  title: string;
  image: {src:string,alt:string};
  description:string;
  name:string;
  url:string;
}
const SEO = ({ title , image:{src,alt},description,name,url }: propsI) => {
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
      <meta name="og:image" content={src} />
      <meta name="image" property="og:image" content={src} />
      <meta name="og:image:alt" content={alt} />
      <meta name="og:site_name" content={name} />
      <meta name="og:description" content={description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:type" content="website" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:image" content={src} />
      <meta name="twitter:image:alt" content={alt} />
      <meta name="title" property="og:title" content={title} />
      <meta property="og:type" content="website" />
    </Head>
  );
};
export default SEO;

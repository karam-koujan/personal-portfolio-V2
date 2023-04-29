import * as React from "react";
import { useRouter } from "next/router";
import { parseMdFileToObj } from "../../lib/";
import Layout from "../../components/common/layout";
import SEO from "../../components/common/SEO";
import { propsI } from "../../types/pages/blog/";
import cardProfileImg from "../../public/assets/images/cardProfileImg.jpg";
import Articles from "../../components/blog/";
import { articleI } from "../../types/pages/blog/";
const Blogs = ({ articles, tags, nav }: propsI) => {
  const { asPath } = useRouter();
  return (
    <>
      <SEO
        title="karam koujan | Blog"
        description="karam koujan's blog"
        url={asPath}
        name="karam koujan's blog"
        image={{
          src: cardProfileImg.src,
          alt: "karam's image",
        }}
      />

      <Layout nav={nav}>
        <Articles articles={articles} tags={tags} />
      </Layout>
    </>
  );
};
export async function getStaticProps() {
  const commonPath = ["content"];
  const navData = await parseMdFileToObj([...commonPath, "nav", "nav.md"]);
  const articles = await parseMdFileToObj([
    ...commonPath,
    "articles",
    "articles.md",
  ]);
  let tags = articles.data.articles
    .map((article: articleI) => article.tags)
    .flat();
  let tagsObj: { [key: string]: undefined } = {};
  tags.forEach((tag: string) => {
    tagsObj[tag] = undefined;
  });
  tags = Object.keys(tagsObj);
  return {
    props: { articles: articles.data.articles, tags, nav: navData.data.nav },
  };
}
export default Blogs;

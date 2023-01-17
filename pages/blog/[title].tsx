import { NextPage } from "next";
import { parseMdFileToObj, getFilesFromDir } from "../../lib/";
import Layout from "../../components/common/layout";
import Article from "../../components/blog";
import SEO from "../../components/common/SEO";

interface dataI {
  title: string;
  date: string;
  duration: string;
}
interface articleI {
  data: dataI;
  content: string;
}
interface propsI {
  nav: string[];
  article: articleI;
}
const Blog: NextPage = ({ article, nav }: propsI) => {
  return (
    <>
    <SEO title={article.data.title}/>
    <Layout nav={nav}>
    <Article article={article}/>
    </Layout>
    </>
  );
};

export async function getStaticPaths() {
  const files = (await getFilesFromDir(["content", "blog"])) as string[];
  const paths = files.map((file) => ({
    params: { title: file.split(".md")[0] },
  }));
  console.log(paths);
  return { paths, fallback: false };
}
export async function getStaticProps({
  params,
}: {
  params: { title: string };
}) {
  const commonPath = ["content"];
  const navData = await parseMdFileToObj([...commonPath, "nav", "nav.md"]);
  console.log(navData.data.nav);
  const article = await parseMdFileToObj([
    ...commonPath,
    "blog",
    `${params.title}.md`,
  ]);
  return { props: { article: article, nav: navData.data.nav } };
}
export default Blog;

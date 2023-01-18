import { useRouter } from "next/router";
import { parseMdFileToObj, getFilesFromDir } from "../../lib/";
import { propsI } from "../../types/pages/blog/[title]";
import Layout from "../../components/common/layout";
import Article from "../../components/blog";
import SEO from "../../components/common/SEO";


const Blog = ({ article, nav }: propsI) => {
  const { asPath } = useRouter();
    const origin =
        typeof window !== 'undefined' && window.location.origin
            ? window.location.origin
            : '';

    const url= `${origin}${asPath}`;
  return (
    <>
    <SEO title={article.data.title} url={url}  name={article.data.title} image={{src:article.data.image,alt:article.data.title}} description={article.data.introduction}  />
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

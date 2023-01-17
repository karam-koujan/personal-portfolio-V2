import { parseMdFileToObj, getFilesFromDir } from "../../lib/";
import Layout from "../../components/common/layout";
import md from "markdown-it";
import Title from "../../components/common/title";

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
    <Layout nav={nav}>
      <main className="md:px-[1rem]">
        <h1 className="mx-auto mt-[3rem]  w-fit text-color-primary text-[2.5rem] font-bold dark:text-color-white">
          {article.data.title}
        </h1>
        <div className="mx-auto mb-[1.4rem] text-center text-color-secondary">
          <span>{article.data.date}</span>
          <span className="mx-[.2rem]">-</span>
          <span>{article.data.duration} read</span>
        </div>

        <article
          className="m-auto prose prose-lg prose-p:text-color-primary dark:prose-p:text-color-white dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: md().render(article.content) }}
        ></article>
      </main>
    </Layout>
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

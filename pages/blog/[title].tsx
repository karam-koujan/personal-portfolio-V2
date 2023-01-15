import { parseMdFileToObj, getFilesFromDir } from "../../lib/";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Layout from "../../components/common/layout";
import md from "markdown-it";

const CodeBlock = {
  code({ node, inline, className, children, ...props }: unknown) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        style={vscDarkPlus}
        language={match[1]}
        PreTag="div"
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

interface dataI {
  title: string;
}
interface articleI {
  data: dataI;
  content: string;
}
interface propsI {
  nav: string[];
  article: articleI;
}
const Blog = ({ article, nav }: propsI) => {
  return (
    <Layout nav={nav}>
      <main>
        <h1 className="mx-auto mt-[3rem] mb-[4.5rem] w-fit text-color-primary text-[2.5rem] font-bold dark:text-color-white">
          {article.data.title}
        </h1>
        <div className="mx-auto mb-[1.4rem] text-center text-color-secondary">
          <span>{article.data.date}</span>
          <span className="mx-[.2rem]">-</span>
          <span>{article.data.duration} read</span>
        </div>

        <article
          className="m-auto prose prose-xl prose-p:text-color-primary dark:prose-p:text-color-white dark:prose-invert"
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

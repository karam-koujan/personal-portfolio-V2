import { propsI } from "./types";
import md from "markdown-it";

const Article = ({ article }: propsI) => {
  return (
    <main className="md:px-[1rem]">
      <h1 className="mx-auto mt-[3rem]  w-fit text-color-primary text-[2.5rem] md:text-[1.5rem] xsm:text-[1rem] font-bold dark:text-color-white">
        {article.data.title}
      </h1>
      <div className="mx-auto mb-[1.4rem] w-fit  text-color-secondary">
        <span>{article.data.date}</span>
        <span className="mx-[.2rem]">-</span>
        <span>{article.data.duration} read</span>
      </div>

      <article
        className="m-auto prose prose-lg prose-p:text-color-primary prose-headings:text-color-secondary dark:prose-p:text-color-white dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: md().render(article.content) }}
      ></article>
    </main>
  );
};

export default Article;


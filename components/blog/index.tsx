import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { propsI, articleI } from "../../types/components/blog/";

import {
  ArticleImg,
  ArticleMetaData,
  ArticleWrapper,
  TextWrapper,
  Wrapper,
  Tag,
  TagWrapper,
  Date,
  Duration,
  ArticleTitle,
  ArticleText,
} from "../../components/common/articles/styles";
import Title from "../../components/common/title";

const Articles = ({ articles, tags }: propsI) => {
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);
  const [currentArticles, setCurrentArticles] = React.useState(articles);
  React.useEffect(() => {
    const filtredArticles = articles.filter(
      (ele) =>
        ele.tags.filter((element: string) => selectedTags.includes(element))
          .length === selectedTags.length
    );
    setCurrentArticles(filtredArticles);
  }, [selectedTags.length, articles, selectedTags]);
  const handleSelectTag = (tag: string) => {
    return () => {
      const isClicked = selectedTags.some((ele) => ele === tag);
      if (isClicked) {
        const filtredTags = selectedTags.filter((ele) => ele !== tag);
        setSelectedTags(filtredTags);
      } else {
        setSelectedTags((selectedTags) => [...selectedTags, tag]);
      }
    };
  };

  return (
    <div className="px-[2rem] md:px-[1rem]">
      <div className="container">
        <Title isVisible={true}>Articles</Title>
        <div className="w-full max-w-[700px] flex flex-wrap gap-[.5rem] mb-[2rem]">
          {tags.map((tag, idx) => (
            <button
              key={idx}
              className={` py-[.4rem] px-[.8rem] border-[2px] border-solid border-color-secondary  rounded-[20px] capitalize transition-all ease-in-out duration-[250ms] hover:bg-transparent hover:text-color-secondary focus:bg-transparent focus:text-color-secondary  
               ${
                 selectedTags.some((ele) => ele === tag)
                   ? ` bg-color-transparent text-color-secondary`
                   : ` bg-color-secondary text-color-white`
               } `}
              onClick={handleSelectTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        <main className="pb-[14rem]">
          {currentArticles.length > 0 ? (
            <ArticleWrapper isVisible={true} className="gap-[5%] sm:gap-[2%]">
              {currentArticles.map(
                (
                  {
                    title,
                    image,
                    placeholder,
                    introduction,
                    tags,
                    date,
                    link,
                    duration,
                  }: articleI,
                  idx: number
                ) => (
                  <Wrapper key={idx} className="max-w-[21rem]">
                    <Link href={link}>
                      <a>
                        <ArticleImg placeholderColor={placeholder}>
                          <Image
                            layout="responsive"
                            height={60}
                            width={100}
                            src={image}
                            alt={`${title} image`}
                          />
                        </ArticleImg>
                        <TextWrapper>
                          <ArticleTitle className="text-color-primary dark:text-color-white my-[1rem] font-bold">
                            {title}
                          </ArticleTitle>
                          <ArticleText className="text-color-primary dark:text-color-white my-[1rem]">
                            {introduction}
                          </ArticleText>
                          <ArticleMetaData>
                            <TagWrapper>
                              {tags.map((tag, idx) => (
                                <Tag
                                  key={idx}
                                  className="bg-color-secondary text-color-white"
                                >
                                  {tag}
                                </Tag>
                              ))}
                            </TagWrapper>
                            <Date className="text-color-primary dark:text-color-white">
                              {date}
                            </Date>
                            <Duration className="text-color-primary dark:text-color-white">
                              {duration}
                            </Duration>
                          </ArticleMetaData>
                        </TextWrapper>
                      </a>
                    </Link>
                  </Wrapper>
                )
              )}
            </ArticleWrapper>
          ) : (
            <div className="py-[5rem] flex align-center ">
              <p className="text-color-primary dark:text-color-white w-fit m-auto">
                No Articles found with this{" "}
                {selectedTags.length > 1 ? "tags" : "tag"}
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
export default Articles;

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { propsI, articleI } from "../../types/components/blog/articles";

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
} from "../../components/landing/articles/styles";
import Title from "../../components/common/title";

const Articles = ({ articles }: propsI) => {
  return (
    <div className="px-[2rem] md:px-[1rem]">
      <div className="container">
        <Title isVisible={true}>Articles</Title>
        <main className="pb-[14rem]">
          <ArticleWrapper isVisible={true} className="gap-[5%] sm:gap-[2%]">
            {articles.map(
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
                <Wrapper key={idx}>
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
        </main>
      </div>
    </div>
  );
};
export default Articles;

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../../common/button";
import {
  ArticleImg,
  ArticleMetaData,
  TextWrapper,
  Tag,
  TagWrapper,
  Date,
  Duration,
  ArticleTitle,
  ArticleText,
} from "../../common/articles/styles";
import { Section, BtnWrapper,Wrapper,ArticleWrapper} from "./styles";
import { useOnScreen } from "../../../hooks";
import Title from "../../common/title/";

interface articlesI {
  title: string;
  image: string;
  introduction: string;
  tags: string[];
  placeholder: string;
  duration: string;
  date: string;
  link: string;
}
interface propsI {
  articles: articlesI[];
  blogLink: string;
}

const Articles = ({ articles, blogLink }: propsI) => {
  const [isVisible, ref] = useOnScreen({
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.2,
  });

  return (
    <Section
      ref={ref}
      id="articles"
      className="px-[2rem]  md:px-[1rem] pt-[4.5rem]"
    >
      <div className="mx-auto w-full max-w-6xl">
        <Title isVisible={isVisible}>Articles</Title>
        <ArticleWrapper isVisible={isVisible}>
          {articles
            .slice(0, 3)
            .map(
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
                },
                idx
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
              {true ? (
                <BtnWrapper className="mt-[2rem]">
                  <Link href={blogLink} target={blogLink}>
                    <a>
                      <Button>see more</Button>
                    </a>
                  </Link>
                </BtnWrapper>
              ) : null}
      </div>
    </Section>
  );
};

export default Articles;

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArticleImg,
  ArticleMetaData,
  ArticleWrapper,
  Section,
  TextWrapper,
  Wrapper,
  Tag,
  TagWrapper,
  Date,
  Duration,
  Btn,
  ArticleTitle,
  ArticleText,
  BtnWrapper
} from "./styles";
import { useOnScreen } from "../../hooks";
import Title from "../common/title/";

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
    threshold: 0.3
  });

  return (
    <Section ref={ref}>
      <Title isVisible={isVisible}>Articles</Title>
      <ArticleWrapper isVisible={isVisible}>
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
              duration
            },
            idx
          ) => (
            <Wrapper key={idx}>
              <Link href={link}>
                <a target={link}>
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
                    <ArticleTitle>{title}</ArticleTitle>
                    <ArticleText>{introduction}</ArticleText>
                    <ArticleMetaData>
                      <TagWrapper>
                        {tags.map((tag, idx) => (
                          <Tag key={idx}>{tag}</Tag>
                        ))}
                      </TagWrapper>
                      <Date>{date}</Date>
                      <Duration>{duration}</Duration>
                    </ArticleMetaData>
                  </TextWrapper>
                </a>
              </Link>
            </Wrapper>
          )
        )}
      </ArticleWrapper>
      {articles.length > 3 ? (
        <BtnWrapper>
          <Btn href={blogLink} target={blogLink}>
            see more
          </Btn>
        </BtnWrapper>
      ) : null}
    </Section>
  );
};

export default Articles;
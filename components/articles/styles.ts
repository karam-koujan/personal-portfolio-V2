import styled, { css } from "styled-components";
import { fadeInUp } from "../../styles/animation";

const ArticleTitle = styled.h3`
  font-size: 1.5rem;
`;
const ArticleText = styled.p`
  line-height: 22px;
`;
const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const Btn = styled.button`
  border: 2px solid var(--blue);
  display: block;
  max-width: 210px;
  margin: 1rem auto !important;
  transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;
  width: 90%;
  &:hover,
  &:focus {
    background-color: transparent;
    border: 2px solid var(--blue);
    color: var(--blue);
  }
  & + & {
    margin-left: 2rem;
  }
`;
const ArticleImg = styled.div`
  background-color: ${({ placeholderColor }: { placeholderColor: string }) =>
    placeholderColor};
  cursor: pointer;
  width: 100%;
`;
const ArticleWrapper = styled.div`
  display: grid;
  grid-gap: 5%;
  grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
  opacity: 0;
  padding: 1rem 0 4rem 0;
  transform: translateY(20%);
  ${({ isVisible }: { isVisible: string }) =>
    isVisible
      ? css`
          animation-delay: 1s;
          animation-duration: 0.6s;
          animation-fill-mode: forwards;
          animation-name: ${fadeInUp};
          animation-timing-function: ease;
        `
      : null}
`;

const Section = styled.section``;
const Wrapper = styled.div`
 border-top-left-radius:8px;
 border-top-right-radius:8px;
 box-shadow:rgba(0, 0, 0, 0.2) 0px 1px 5px 0px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 3px 1px -2px;
 cursor:pointer;
 padding:0 0 1rem 0;
 position:relative;
 transition:all 0.5 ease;
 &>img{
  border-top-left-radius:8px;
  border-top-right-radius:8px;
 }
 &:hover,&:focus{
    box-shadow:rgba(0, 0, 0, 0.09) 0px 8px 26px 0px;
  
}
 }

    `;
const TagWrapper = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0.8rem 0 1rem 0;
  width: 100%;
  flex-wrap: wrap;
`;
const Tag = styled.div`
  border-radius: 20px;
  padding: 0.4rem 0.9rem;
`;
const Date = styled.span`
  font-weight: 100;
  font-size: 0.9rem;
  padding-bottom: 0.5rem;
`;
const Duration = styled.span`
  font-weight: 100;
  font-size: 0.9rem;
  padding-left: 1rem;
`;
const TextWrapper = styled.div`
  padding: 0 1rem 5rem 1rem;
`;
const ArticleMetaData = styled.div`
  bottom: 0;
  width: 100%;
  left: 0;
  right: 0;
  padding: 0 1rem 1rem 1rem;
  position: absolute;
`;
export {
  ArticleImg,
  ArticleMetaData,
  ArticleText,
  ArticleTitle,
  ArticleWrapper,
  Btn,
  BtnWrapper,
  Date,
  Duration,
  Section,
  Wrapper,
  Tag,
  TextWrapper,
  TagWrapper
};

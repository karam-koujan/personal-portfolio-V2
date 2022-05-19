import styled, { css, keyframes } from "styled-components";
interface componentI {
  isVisible?: boolean;
}
const slideX = keyframes`
  to{
    opacity:1;
    transform:translateX(0%)
   }
`;
const Section = styled.section`
  padding: 4rem 2rem;
`;
const ImgWrapper = styled.div`
  max-width: 300px;
  transform: translateX(1000%);
  width: 100%;
  ${({ isVisible }: componentI) =>
    isVisible
      ? css`
          animation-delay: 1.6s;
          animation-duration: 0.6s;
          animation-fill-mode: forwards;
          animation-name: ${slideX};
          animation-timing-function: ease;
        `
      : null}
  & img {
    border-radius: 3px;
  }
`;
const TechList = styled.ul`
  display: grid;
  grid-gap: 2rem 1rem;
  grid-template-columns: repeat(3, 1fr);
  margin: 3rem 0;
  max-width: 700px;
  padding: 1rem 0 1rem 2.5rem;
  position: relative;
  width: 100%;
  &::before {
    content: "";
    height: 60%;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 2px;
  }
`;
const TechItem = styled.li`
  align-self: center;
  font-weight: 300;
  list-style: none;
  position: relative;
  &::before {
    content: "";
    height: 5px;
    left: -7%;
    position: absolute;
    top: 30%;
    width: 5px;
  }
`;
const Text = styled.p`
  font-size: 1.1rem;
  line-height: 30px;
  margin: 0;
`;
const TextWrapper = styled.div`
  self-align: center;
  width: 50%;
  opacity: 0;
  transform: translateY(50%);
  ${({ isVisible }: componentI) =>
    isVisible
      ? `
 transition :opacity .2s 1s ease-out , transform .4s 1s ease-out;
   opacity:1; 
   transform:translateY(0);
  `
      : null}
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export { Section, ImgWrapper, TechList, TechItem, Text, TextWrapper, Wrapper };

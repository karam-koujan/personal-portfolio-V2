import styled, { css } from "styled-components";
import { fadeInUp } from "../../styles/animation";

const Project = styled.div`
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 5px 0px,
    rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 3px 1px -2px;
  cursor: pointer;
  padding: 0 0 0.5rem 0;
  transition: all 0.5 ease;
  &:hover,
  &:focus {
    box-shadow: rgba(0, 0, 0, 0.09) 0px 8px 26px 0px;
    & div {
      transform: scale(1.04);
      box-shadow: rgba(0, 0, 0, 0.2) 0px 17px 46px -5px;
      & img {
        border-radius: 3px;
      }
    }
  }
`;
const ProjectLink = styled.a`
  display: block;
  width: 100%;
`;
const ProjectImg = styled.div`
  background-color: ${({ placeholderColor }: { placeholderColor: string }) =>
    placeholderColor};
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  width: 100%;
`;
const ProjectTitle = styled.h3`
  font-size: 1rem;
  margin: 0;
  padding: 1rem;
  text-transform: capitalize;
`;
const Section = styled.section``;
const TechList = styled.ul`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0;
  padding: 1rem 0.5rem;
`;
const TechItem = styled.li`
  width: max-content;
  background-color: var(--blue);
  border-radius: 2px;
  color: white;
  font-weight: 100;
  list-style: none;
  margin: 0;
  padding: 0.2rem 0.7rem;
`;
const Text = styled.p`
  line-height: 22px;
  letter-spacing: 0.2px;
  margin: 1.5rem 1rem;
`;

const Wrapper = styled.div`
  display: grid;
  grid-gap: 2%;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  opacity: 0;
  transform: translateY(20%);
  ${({ isVisible }: { isVisible: boolean }) =>
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

export {
  Project,
  ProjectLink,
  ProjectImg,
  ProjectTitle,
  Section,
  TechList,
  TechItem,
  Text,
  Wrapper
};

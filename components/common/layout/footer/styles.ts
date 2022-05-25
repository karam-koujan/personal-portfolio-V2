import styled from "styled-components";
import { fadeInDown } from "../../../../styles/animation";
export const SocialMediaLinks = styled.div`
  opacity: 0;
  transform: translateY(-20%);
  animation-delay: 4.5s;
  animation-iteration-count: 1;
  animation-duration: 0.3s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  animation-name: ${fadeInDown};
`;

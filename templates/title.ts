import styled, { css } from "styled-components";
import { fadeInUp } from "../styles/animation";
interface propsI {
  isVisible?: boolean;
}

const Bullet = styled.span`
  border-radius: 50%;
  font-size: var(--size);
  margin-right: 0.5rem;
`;
const Title = styled.h2`
  font-size: clamp(2.1rem, 6vw, 3.4rem);
  text-transform: capitalize;
  transform: translateY(100%);
  opacity: 0;
  ${({ isVisible }: propsI) =>
    isVisible
      ? css`
          animation-fill-mode: forwards;
          animation-duration: 0.5s;
          animation-name: ${fadeInUp};
          animation-timing-function: ease-out;
        `
      : null}
`;
export { Bullet, Title };

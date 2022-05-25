import { keyframes } from "styled-components";

const blink = keyframes`
 to{
     background-color:transparent;
 }
`;

const bounceInTop = keyframes`
 0%{
   opacity:0;
   transform : translateY(100%)
 }
 100%{
   opacity:1;
   transform:translateY(0%);
 }
`;

const fadeIn = keyframes`
 from{
     opacity:0;
 }
 to{
     opacity:1;
 }
`;

const fadeInDown = keyframes`

100%{
    opacity:1;
    transform:translateY(0%);
}
`;
const fadeInUp = keyframes`
to{
     opacity:1;
     transform :translateY(0%);
    }
`;

const scale = keyframes`
 to{
     opacity:1;
     transform:scale(1);
 }
`;
const slideX = keyframes`
  to{
    opacity:1;
    transform:translateX(0%)
   }
`;
const typeWriter = keyframes`

 to{
     left:100%;
 }
`;

export {
  blink,
  bounceInTop,
  fadeIn,
  fadeInDown,
  fadeInUp,
  scale,
  slideX,
  typeWriter
};

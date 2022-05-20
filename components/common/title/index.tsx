import * as React from "react";
import { Title as Wrapper, Bullet } from "../../../templates/title";
interface propsI {
  children: React.ReactNode;
  isVisible?: boolean;
  [key: string]: any;
}

const Title = ({ children, isVisible, ...props }: propsI) => {
  return (
    <Wrapper
      isVisible={isVisible}
      className="text-color-primary font-bold mb-[1rem] dark:text-color-secondary"
    >
      {children}
      <Bullet
        style={{ "--size": "4.5rem" }}
        className="text-color-secondary dark:text-color-third"
      >
        .
      </Bullet>
    </Wrapper>
  );
};
export default Title;

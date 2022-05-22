import * as React from "react";
import { Title as Wrapper, Bullet } from "../../../templates/title";
interface propsI {
  children: React.ReactNode;
  isVisible?: boolean;
  className?: string;
  [key: string]: any;
}

const Title = ({ children, isVisible, className, ...props }: propsI) => {
  return (
    <Wrapper
      isVisible={isVisible}
      className={`text-color-primary font-bold mb-[1.5rem]  dark:text-color-secondary ${className}`}
    >
      {children}
      <Bullet
        style={{ "--size": "4.5rem" }}
        className="text-color-secondary dark:text-color-white"
      >
        .
      </Bullet>
    </Wrapper>
  );
};
export default Title;

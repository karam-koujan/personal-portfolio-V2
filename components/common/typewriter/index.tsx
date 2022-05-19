import { useState, useEffect } from "react";
import Styles from "./styles.module.css";

interface TypeWriterI {
  content: string;
  speed: number;
}
const TypeWriter = ({ content, speed }: TypeWriterI) => {
  const [displayedContent, setDisplayedContent] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    /*Create a new setInterval and store its id*/
    const animKey = setInterval(() => {
      setIndex((index) => {
        /*This setState function will set the index
        to index+1 if there is more content otherwise
        it will destory this animation*/

        if (index >= content.length - 1) {
          clearInterval(animKey);
          return index;
        }
        return index + 1;
      });
    }, speed);
  }, []);

  useEffect(() => {
    setDisplayedContent(
      (displayedContent) => displayedContent + content[index]
    );
  }, [index]);

  return <pre className={Styles["type-writer"]}>{displayedContent}</pre>;
};

export default TypeWriter;

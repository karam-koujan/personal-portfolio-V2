import Typed from "react-typed";
import Styles from "./styles.module.css";
const Introduction = () => {
  return (
    <section className="mx-auto w-full max-w-6xl pt-[4rem] pl-[8rem] md:pt-[1rem] sm:pl-[1rem]">
      <div>
        <h1 className="mb-[1rem]">
          <Typed
            strings={["Hey, I’m Karam"]}
            className={`${Styles.title} text-color-secondary `}
            typeSpeed={90}
          />
        </h1>
        <p className="text-color-primary dark:text-color-third">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
          maiores nam provident sed qui vel nesciunt aspernatur laboriosam
          magnam, at autem aperiam repudiandae iste ducimus fugiat veritatis hic
          fuga vero!
        </p>
      </div>
    </section>
  );
};

export default Introduction;

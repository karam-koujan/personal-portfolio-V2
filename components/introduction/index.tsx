import Link from "next/link";
import Typed from "react-typed";
import Styles from "./styles.module.css";
import Button from "../common/button";
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
        <div className={Styles.fadeIn}>
          <p className="text-color-primary dark:text-color-third">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
            maiores nam provident sed qui vel nesciunt aspernatur laboriosam
            magnam, at autem aperiam repudiandae iste ducimus fugiat veritatis
            hic fuga vero!
          </p>
          <div className="mt-[1.5rem] w-fit flex gap-7 sm:flex-col sm:m-auto sm:gap-3 sm:mt-[2rem]">
            <Link href="">
              <a>
                <Button>my resume</Button>
              </a>
            </Link>
            <Link href="">
              <a>
                <Button>get in touch</Button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;

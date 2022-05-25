import Link from "next/link";
import Styles from "./styles.module.css";
import Typewriter from "typewriter-effect";
import Button from "../common/button";
interface introductionI {
  name: string;
  introduction: string;
  email: string;
  resume: string;
}
interface propsI {
  introduction: introductionI;
}
const Introduction = ({
  introduction: { name, introduction, email, resume }
}: propsI) => {
  return (
    <section className="mx-auto w-full max-w-6xl pt-[5rem] pl-[8rem] md:pt-[4.5rem] sm:px-[1rem]">
      <div>
        <h1
          className={`mb-[1rem] sm:text-center ${Styles.title} text-color-secondary`}
        >
          <Typewriter
            onInit={(typewriter) => {
              typewriter

                .typeString(`Hi, I'm ${name}`)

                .start();
            }}
          />
        </h1>
        <div className={Styles.fadeIn}>
          <p className="text-color-primary dark:text-color-white sm:text-center">
            {introduction}
          </p>
          <div className="mt-[2rem] translate-x-[-2%] w-fit flex gap-7 sm:translate-x-0 sm:flex-col sm:items-center sm:m-auto sm:gap-3 sm:mt-[2rem]">
            <Link href={resume}>
              <a>
                <Button name="my resume">my resume</Button>
              </a>
            </Link>
            <Link href={`mailto:${email}`}>
              <a>
                <Button name="get in touch">get in touch</Button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;

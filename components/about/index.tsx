import Image from "next/image";
import profileImg from "../../public/assets/images/profileImg.jpg";
import { useOnScreen } from "../../hooks/";
import Title from "../common/title/";
import {
  Section,
  ImgWrapper,
  TechList,
  TechItem,
  Text,
  TextWrapper,
  Wrapper
} from "./styles";

interface aboutI {
  text: string;
  skills: any[];
}
interface propsI {
  about: aboutI;
}
const About = ({ about: { text, skills } }: propsI) => {
  const [isVisible, ref] = useOnScreen({
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.5
  });

  return (
    <Section
      id="about"
      className="px-[2rem] md:px-[1rem] pt-[5rem]  "
      ref={ref}
      tabIndex={0}
    >
      <div className="mx-auto w-full max-w-6xl">
        <Title isVisible={isVisible}>About Me</Title>
        <Wrapper className="md:flex-col md:items-center ">
          <TextWrapper isVisible={isVisible} className="w-[50%] md:w-full">
            <Text className="text-color-primary dark:text-color-white">
              {text}
            </Text>
            <TechList className="bg-color-third before:bg-color-secondary grid-cols-[repeat(3,1fr)]  md:grid-[1rem] sm:grid-cols-[repeat(2,1fr)]">
              {skills.map((skill, idx) => (
                <TechItem
                  key={idx}
                  className="text-color-primary dark:text-color-white before:bg-color-secondary"
                >
                  {skill}
                </TechItem>
              ))}
            </TechList>
          </TextWrapper>
          <ImgWrapper isVisible={isVisible}>
            <Image
              src={profileImg}
              layout="responsive"
              placeholder="blur"
              alt="karam's image"
            />
          </ImgWrapper>
        </Wrapper>
      </div>
    </Section>
  );
};
export default About;

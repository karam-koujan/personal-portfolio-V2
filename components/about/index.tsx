import Image from "next/image";
import profileImg from "../../public/assets/images/profileImg.jpg";
import { useOnScreen } from "../../hooks/";
//import {Bullet,Title} from "../../../templates/";
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
    threshold: 0.3
  });

  return (
    <Section id="about" ref={ref} tabIndex={0}>
      <h1>About Me</h1>
      <Wrapper>
        <TextWrapper isVisible={isVisible}>
          <Text>{text}</Text>
          <TechList>
            {skills.map((skill, idx) => (
              <TechItem key={idx}>{skill}</TechItem>
            ))}
          </TechList>
        </TextWrapper>
        <ImgWrapper isVisible={isVisible}>
          <Image
            src={profileImg}
            layout="responsive"
            placeholder="blur"
            alt="my image"
          />
        </ImgWrapper>
      </Wrapper>
    </Section>
  );
};
export default About;

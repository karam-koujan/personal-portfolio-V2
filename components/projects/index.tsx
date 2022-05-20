import Link from "next/link";
import Image from "next/image";
import { useOnScreen } from "../../hooks/";
import {
  Project,
  ProjectImg,
  ProjectLink,
  ProjectTitle,
  Section,
  TechItem,
  TechList,
  Text,
  Wrapper
} from "./styles";
import Title from "../common/title";
interface projectI {
  title: string;
  image: string;
  text: string;
  placeholder: string;
  link: string;
  techs: string[];
}
interface propsI {
  projects: projectI[];
}

const Projects = ({ projects }: propsI) => {
  const [isVisible, ref] = useOnScreen({
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.1
  });
  return (
    <Section
      id="projects"
      className="px-[2rem] md:px-[1rem] pt-[4.5rem]"
      ref={ref}
      tabIndex={0}
    >
      <div className="mx-auto w-full max-w-6xl">
        <Title isVisible={isVisible}>Experemental Projects</Title>
        <Wrapper isVisible={isVisible}>
          {projects.map(({ title, text, image, link, placeholder }, idx) => (
            <Project key={idx} tabIndex={0}>
              <Link href={link}>
                <a>
                  <ProjectTitle>{title}</ProjectTitle>
                  <ProjectImg placeholderColor={placeholder}>
                    <Image
                      layout="responsive"
                      className="object-cover	 object-center"
                      height={70}
                      width={100}
                      src={image}
                      alt={`${title} image`}
                    />
                  </ProjectImg>
                  <Text>{text}</Text>
                </a>
              </Link>
            </Project>
          ))}
        </Wrapper>
      </div>
    </Section>
  );
};
export default Projects;

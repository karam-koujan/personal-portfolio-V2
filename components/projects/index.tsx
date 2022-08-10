import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useOnScreen } from "../../hooks/";
import {
  Project as ProjectWrapper,
  ProjectImg,
  ProjectTitle,
  Section,
  Text,
  Wrapper
} from "./styles";
import Title from "../common/title";
interface projectI {
  title: string;
  image: string;
  repo: string;
  text: string;
  placeholder: string;
  link: string;
  techs: string[];
}
interface propsI {
  projects: projectI[];
}

const Projects = ({ projects }: propsI) => {
 
  const handleSelectProject = (data: projectI) => () =>
    setSelectedProject(data);
  const [isVisible, ref] = useOnScreen({
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.2
  });
  return (
    <Section
      id="projects"
      className="px-[2rem] sm:mb-[7rem] md:px-[1rem] pt-[4.5rem]"
      ref={ref}
      tabIndex={0}
    >
      <div className="mx-auto w-full max-w-6xl">
        <Title isVisible={isVisible}>Previous Projects</Title>
        <Wrapper isVisible={isVisible} className="lg:block md:gap-4">
          {projects.map((projectData, idx) => (
            <ProjectWrapper
              tabIndex={0}
            >
            <Link href={projectData.link}  key={idx} >
             <a target="_blank">
              <ProjectTitle className="text-color-primary dark:text-color-white">
                {projectData.title}
              </ProjectTitle>
              <ProjectImg placeholderColor={projectData.placeholder}>
                <Image
                  layout="responsive"
                  className="object-cover	 object-center"
                  height={70}
                  width={100}
                  src={projectData.image}
                  alt={`${projectData.title} image`}
                />
              </ProjectImg>
              <Text className="text-color-primary dark:text-color-white">
                {projectData.text}
              </Text>
            </a>
            </Link>
            </ProjectWrapper>
          ))}
        </Wrapper>
      </div>
    </Section>
  );
};
export default Projects;

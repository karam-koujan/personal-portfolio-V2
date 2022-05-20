import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useOnScreen } from "../../hooks/";
import Project from "./project.tsx";
import {
  Project as ProjectWrapper,
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
  const [selectedProject, setSelectedProject] = React.useState({});
  const handleRemoveSelectedProject = () => setSelectedProject({});
  const handleSelectProject = (data: projectI) => () =>
    setSelectedProject(data);
  const [isVisible, ref] = useOnScreen({
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.3
  });
  return (
    <Section
      id="projects"
      className="px-[2rem] md:px-[1rem] pt-[4.5rem]"
      ref={ref}
      tabIndex={0}
    >
      <div className="mx-auto w-full max-w-6xl">
        <Title isVisible={isVisible}>Experimental Projects</Title>
        <Wrapper isVisible={isVisible}>
          {projects.map((projectData, idx) => (
            <ProjectWrapper
              key={idx}
              tabIndex={0}
              onClick={handleSelectProject(projectData)}
            >
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
            </ProjectWrapper>
          ))}
        </Wrapper>
      </div>
      {Object.keys(selectedProject).length ? (
        <Project
          {...selectedProject}
          handleRemoveSelectedProject={handleRemoveSelectedProject}
        />
      ) : null}
    </Section>
  );
};
export default Projects;

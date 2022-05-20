import type { NextPage } from "next";
import { parseMdFileToObj } from "../lib/";
import Layout from "../components/common/layout";
import Introduction from "../components/introduction";
import About from "../components/about";
import Projects from "../components/projects";
interface projectI {
  title: string;
  image: string;
  text: string;
  placeholder: string;
  link: string;
  techs: string[];
  embedLink: string;
  repo: string;
}
interface propsI {
  nav: string[];
  about: any;
  projects: projectI[];
}
const Home: NextPage = ({ nav, about, projects }: propsI) => {
  return (
    <Layout nav={nav}>
      <Introduction />
      <About about={about} />
      <Projects projects={projects} />
    </Layout>
  );
};
export async function getStaticProps() {
  const commonPath = ["content"];
  const navData = await parseMdFileToObj([...commonPath, "nav", "nav.md"]);
  const aboutData = await parseMdFileToObj([
    ...commonPath,
    "about",
    "about.md"
  ]);
  const projectsData = await parseMdFileToObj([
    ...commonPath,
    "projects",
    "projects.md"
  ]);
  return {
    props: {
      nav: navData.data.nav,
      about: aboutData.data,
      projects: projectsData.data.projects
    }
  };
}
export default Home;

import type { NextPage } from "next";
import { parseMdFileToObj } from "../lib/";
import SEO from "../components/common/SEO";
import Layout from "../components/common/layout";
import Introduction from "../components/introduction";
import About from "../components/about";
import Projects from "../components/projects";
import Articles from "../components/articles";
import Contact from "../components/contact";
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
interface articlesI {
  title: string;
  image: string;
  introduction: string;
  tags: string[];
  placeholder: string;
  duration: string;
  date: string;
  link: string;
}
interface contactSourceI {
  link: string;
  text: string;
  email: string;
}
interface contactI {
  contactSource: contactSourceI;
  pragraph: string;
}
interface propsI {
  nav: string[];
  about: any;
  projects: projectI[];
  articles: articlesI[];
  blogLink: string;
  contact: contactI;
}
const Home: NextPage = ({
  nav,
  about,
  projects,
  articles,
  blogLink,
  contact
}: propsI) => {
  return (
    <>
      <SEO title="karam koujan | Front end Dev" />
      <Layout nav={nav}>
        <Introduction />
        <About about={about} />
        <Projects projects={projects} />
        <Articles articles={articles} blogLink={blogLink} />
        <Contact contact={contact} />
      </Layout>
    </>
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
  const articlesData = await parseMdFileToObj([
    ...commonPath,
    "articles",
    "articles.md"
  ]);
  const contactData = await parseMdFileToObj([
    ...commonPath,
    "contact",
    "contact.md"
  ]);
  return {
    props: {
      nav: navData.data.nav,
      about: aboutData.data,
      projects: projectsData.data.projects,
      articles: articlesData.data.articles,
      blogLink: articlesData.data.blogLink,
      contact: contactData.data
    }
  };
}
export default Home;

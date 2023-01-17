import type { NextPage } from "next";
import Head from "next/head";
import { parseMdFileToObj } from "../lib/";
import SEO from "../components/common/SEO";
import Layout from "../components/common/layout";
import Introduction from "../components/landing/introduction";
import About from "../components/about";
import Projects from "../components/landing/projects";
import Articles from "../components/landing/articles";
import Contact from "../components/landing/contact";
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
interface introductionI {
  name: string;
  introduction: string;
  resume: string;
  email: string;
}
interface propsI {
  nav: string[];
  about: any;
  projects: projectI[];
  articles: articlesI[];
  blogLink: string;
  contact: contactI;
  introduction: introductionI;
}
const Home: NextPage = ({
  nav,
  about,
  projects,
  articles,
  blogLink,
  contact,
  introduction
}: propsI) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SEO title="karam koujan | Front end Dev" />
      <Layout nav={nav}>
        <Introduction introduction={introduction} />
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
  const introductionData = await parseMdFileToObj([
    ...commonPath,
    "introduction",
    "introduction.md"
  ]);
  return {
    props: {
      nav: navData.data.nav,
      about: aboutData.data,
      projects: projectsData.data.projects,
      articles: articlesData.data.articles,
      blogLink: articlesData.data.blogLink,
      contact: contactData.data,
      introduction: introductionData.data
    }
  };
}
export default Home;

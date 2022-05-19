import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { parseMdFileToObj } from "../lib/";
import Layout from "../components/common/layout";
import Introduction from "../components/introduction";
import About from "../components/about";

interface HomeI {
  nav: string[];
  about: any;
}
const Home: NextPage = ({ nav, about }: HomeI) => {
  return (
    <Layout nav={nav}>
      <Introduction />
      <About about={about} />
    </Layout>
  );
};
export async function getStaticProps() {
  const navData = await parseMdFileToObj(["content", "nav", "nav.md"]);
  const aboutData = await parseMdFileToObj(["content", "about", "about.md"]);
  return {
    props: {
      nav: navData.data.nav,
      about: aboutData.data
    }
  };
}
export default Home;

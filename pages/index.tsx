import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { parseMdFileToObj } from "../lib/";
import Layout from "../components/common/layout";
import Introduction from "../components/introduction";
const Home: NextPage = ({ nav }) => {
  return (
    <Layout nav={nav}>
      <Introduction />
    </Layout>
  );
};
export async function getStaticProps() {
  const navData = await parseMdFileToObj(["content", "nav", "nav.md"]);
  return {
    props: {
      nav: navData.data.nav
    }
  };
}
export default Home;

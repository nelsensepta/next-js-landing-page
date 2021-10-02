import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Extend from "../components/Extend";
import FAQ from "../components/FAQ";
import Head from "next/head";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Book One Page</title>
      </Head>
      <Hero />
      <Features />
      <Extend />
      <FAQ />
      <Contact />
    </Layout>
  );
}

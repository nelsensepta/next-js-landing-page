import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Extend from "../components/Extend";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Features />
      <Extend />
      <FAQ />
      <Contact />
    </Layout>
  );
}

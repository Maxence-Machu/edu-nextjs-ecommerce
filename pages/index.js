import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../layout/layout";

export default function Home() {
  return (
    <Layout>
      <h1>Hello World</h1>

      <Welcome />
      {Welcome()}
      <Welcome />
    </Layout>
  );
}

function Welcome() {
  return <h2>Bonjour</h2>;
}

function CustomDiv() {
  return <div>Custom DIV</div>;
}

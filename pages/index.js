import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../layout/layout";
import ShopItem from "../components/ShopItem/ShopItem";

export default function Home() {
  // COMMENTAIRE JS INLINE

  /*
  COMMENTAIRE JS
  */

  return (
    <Layout>
      <h1>Index</h1>

      <section className="row">
        <ShopItem
          title="Article n°1"
          description="Lorem ipsum dolor sit amet"
        />
        <ShopItem title="Fraise Tagada" description="Une fraise rouge" />
        <ShopItem
          title="Article n°3"
          description="Lorem ipsum dolor sit amet"
        />
        <ShopItem title="Dragibus" description="Lot de 1 000" />
        <ShopItem
          title="Article n°5"
          description="Lorem ipsum dolor sit amet"
        />
      </section>

      {/* SHOP ITEM */}
    </Layout>
  );
}

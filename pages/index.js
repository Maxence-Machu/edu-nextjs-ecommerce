import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../layout/layout";
import ShopItem from "../components/ShopItem/ShopItem";
import UserContext from "../stores/UserContext";
import { useContext } from "react";

export default function Home() {
  // COMMENTAIRE JS INLINE

  const { user } = useContext(UserContext);

  /*
  COMMENTAIRE JS
  */

  return (
    <Layout>
      {user.name !== "" && <h1>Bonjour {user.name}</h1>}
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
    </Layout>
  );
}

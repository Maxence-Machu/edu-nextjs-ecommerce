import Layout from "../../layout/layout";

export default function BoutiqueItem({ slug }) {
  return (
    <Layout>
      <h1>Élément de la boutique</h1>

      {slug}
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  let { slug } = context.query;

  return {
    props: {
      slug,
    },
  };
};

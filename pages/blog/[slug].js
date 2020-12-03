import Layout from "../../layout/layout";
import axios from "axios";

export default function Article({ article, slug }) {
  return (
    <Layout>
      <h2>{article.Title}</h2>

      <p>{article.ArticleContent}</p>
    </Layout>
  );
}

/*
Requête à personnaliser avec vos propres données
*/
export const getServerSideProps = async (context) => {
  const { slug } = context.query;

  const res = await axios({
    method: "POST",
    url: "http://localhost:1337/graphql",
    data: {
      query: `
                {
                    articles(limit: 1, where: {ArtSlug: "${slug}"}) {
                    Title,
                    ArticleContent,
                    ArticleMetaComponent {id, SEOTitle, SEODesc, SEOImage {url}}
                    }
                }
            `,
    },
  });

  return {
    props: {
      article: res.data.data.articles[0] || {},
      slug: slug,
    },
  };
};

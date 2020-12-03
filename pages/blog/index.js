import Axios from "axios";
import Layout from "../../layout/layout";
import ShopItem from "../../components/ShopItem/ShopItem";

export default function Blog({ articles }) {
  return (
    <Layout>
      <h1>Bienvenue sur mon blog</h1>

      <div className="row">
        {articles.map((article) => {
          return (
            <ShopItem
              description={""}
              title={article.Title}
              link={`/blog/${article.ArticleMetaComponent.Slug}`}
            />
          );
        })}
      </div>
    </Layout>
  );
}

/*
Requête à personnaliser avec vos propres données
*/
export const getServerSideProps = async (context) => {
  const res = await Axios({
    method: "POST",
    url: "http://localhost:1337/graphql",
    data: {
      query: `
      {
        articles {
            Title,
            created_at,
            ArticleMetaComponent {
                SEODesc,
                SEOTitle,
                Slug,
                SEOImage {
                    url 
                }
            }
        }
      }
      `,
    },
  });

  return {
    props: {
      articles: res.data.data.articles || [],
    },
  };
};

import Axios from "axios";
import Layout from "../../layout/layout";
import ShopItem from "../../components/ShopItem/ShopItem";

export default function Blog() {
  let articles = [];
  return (
    <Layout>
      <h1>Bienvenue sur mon blog</h1>

      <div className="row">
        {articles.map((article) => {
          return (
            <ShopItem
              description={article.ArticleContent}
              title={article.Title}
            />
          );
        })}
      </div>
    </Layout>
  );
}

/*
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
            ArticleContent,
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
      articles: res.data.data.articles,
    },
  };
};
*/

export default function ShopItem(props) {
  return (
    <article className="card col-4 mt-4">
      <h3>{title}</h3>

      <p>{description}</p>

      <a href="#" title="Acheter le produit">
        Acheter
      </a>
    </article>
  );
}

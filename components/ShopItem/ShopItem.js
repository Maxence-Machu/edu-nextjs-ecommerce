import Image from "next/image";

export default function ShopItem(props) {
  return (
    <article className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <img
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          src="https://via.placeholder.com/500x255?text=Placeholder"
        />
        <div className="card-body">
          <h3>{props.title}</h3>
          <p className="card-text">{props.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Acheter
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

import Footer from "./footer";
import Nav from "./nav";

export default function Layout({ children }) {
  return (
    <div>
      <Nav />

      <section className="jumbotron text-center d-flex align-items-center">
        <div className="container">
          <h1>Hariba</h1>
          <p className="lead text-muted">Artisans depuis 2020</p>
        </div>
      </section>

      <main className="container">{children}</main>

      <Footer />
    </div>
  );
}

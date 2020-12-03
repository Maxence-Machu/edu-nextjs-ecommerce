import Link from "next/link";
import UserContext from "../stores/UserContext";
import { useContext } from "react";

export default function Nav() {
  const { user, signIn, signOut } = useContext(UserContext);
  
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <Link href="/">
        <a className="navbar-brand">Hariba</a>
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample02"
        aria-controls="navbarsExample02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-between"
        id="navbarsExample02"
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link href="/">
              <a className="nav-link">
                Accueil <span className="sr-only">(current)</span>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/boutique">
              <a className="nav-link">Boutique</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/blog">
              <a className="nav-link">Notre blog</a>
            </Link>
          </li>
        </ul>

        <ul className="navbar-nav">
          {user.name !== "" && (
            <li className="nav-item navbar-text mr-4">{user.name}</li>
          )}

          {user.name !== "" ? (
            <li className="nav-item">
              <button className={"btn btn-light"} onClick={signOut}>
                Se déconnecter
              </button>
            </li>
          ) : (
            <li className="nav-item">
              <button className={"btn btn-light"} onClick={signIn}>
                Se connecter
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

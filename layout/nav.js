import Link from "next/link";

export default function Nav() {
  return (
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <Link href="/">
        <a class="navbar-brand">Hariba</a>
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample02"
        aria-controls="navbarsExample02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample02">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link href="/">
              <a class="nav-link">
                Accueil <span class="sr-only">(current)</span>
              </a>
            </Link>
          </li>
          <li class="nav-item">
            <Link href="/boutique">
              <a class="nav-link">Boutique</a>
            </Link>
          </li>
          <li class="nav-item">
            <Link href="/blog">
              <a class="nav-link">Notre blog</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

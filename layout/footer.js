import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-muted">
      <div className="container">
        <p>Code de départ pour votre application web avec Next.js</p>
        <p>
          <Link href="https://docs.google.com/presentation/d/1WzbGghS8yPP2yPErgWWtR7ZMo-UeaI5Y26915LM9254/edit?usp=sharing">
            <a>Les slides du cours</a>
          </Link>
        </p>
      </div>
    </footer>
  );
}

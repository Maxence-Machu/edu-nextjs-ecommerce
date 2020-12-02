import styles from "./layout.module.css";

export default function Navigation(props) {
  return (
    <nav className={[styles.nav]}>
      <div className={styles.leftNav}>
        <span className={styles.logo}>Hariba</span>

        <ul className={styles.navlist}>
          <li>Accueil</li>
          <li>Boutique</li>
          <li>Nous contacter</li>
        </ul>
      </div>

      <div className={styles.rightNav}></div>
    </nav>
  );
}

import styles from "./layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <h1>Hariba</h1>

      {children}
    </div>
  );
}

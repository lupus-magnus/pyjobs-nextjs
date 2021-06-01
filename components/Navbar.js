import styles from "../styles/modules/Nav.module.css";

export default function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <h1>LOGO</h1>
        <div className={styles["navbar__menu"]}>
          <li>português</li>
          <li>Vagas</li>
          <li>Blog</li>
          <li>Logar</li>
          <li>Cadastre uma vaga</li>
        </div>
      </div>
    </>
  );
}

import styles from "../styles/modules/Nav.module.css";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles["navbar__logo--container"]}>
          <Image
            width={2.16 * 2.8 * 16}
            height={2.8 * 16}
            src={"/assets/images/logo.png"}
            alt="Foto de desenvolvedor de costas programando"
          />
        </div>
        <div className={styles["navbar__menu"]}>
          <li>
            <select id="language" name="language">
              <option value="pt">Português {"(pt-br)"}</option>
              <option value="en">English {"(en)"}</option>
            </select>
          </li>
          <li className={styles["--responsive"]}>Vagas</li>
          <li className={styles["--responsive"]}>Blog</li>
          <li>
            <div
              className={`${styles["--responsive"]} ${styles["menu__login"]}`}
            >
              Logar
            </div>
          </li>
          <li>
            <div
              className={`${styles["--responsive"]} ${styles["menu_cadastrar"]}`}
            >
              Cadastre uma vaga
            </div>
          </li>
          <li>
            <div className={`${styles["menu__burger--icon"]}`}>
              <div />
              <div />
              <div />
            </div>
          </li>
        </div>
      </div>
    </>
  );
}

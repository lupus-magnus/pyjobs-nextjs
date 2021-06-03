import styles from "../styles/modules/Nav.module.css";
import Image from "next/image";
import StyledSelect from "../components/StyledSelect";

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
            <StyledSelect
              fontSize="1.3rem"
              id="language_option"
              name="language"
            >
              <option className={styles["navbar__select--option"]} value="pt">
                🇧🇷 pt-br
              </option>
              <option className={styles["navbar__select--option"]} value="en">
                🇺🇸 en
              </option>
            </StyledSelect>
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

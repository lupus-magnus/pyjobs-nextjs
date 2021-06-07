import styles from "../styles/partials/Nav.module.css";
import Image from "next/image";
import StyledSelect from "../components/StyledSelect";
import React, { useState, useEffect } from "react";

export default function Navbar({ data }) {
  const [showResponsiveMenu, setShowResponsiveMenu] = useState(false);
  const [jobData, setJobData] = useState("");

  const responsiveMenuHandler = () => {
    setShowResponsiveMenu(!showResponsiveMenu);
    console.log("show menu?", showResponsiveMenu);
  };
  // fetchJobs();
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles["navbar__logo--container"]}>
          <Image
            width={2.16 * 2.8 * 16}
            height={2.8 * 16}
            src={"/assets/images/logo.png"}
            alt="Logo da empresa"
          />
        </div>
        <div className={`${styles["navbar__menu--desktop"]}`}>
          <li className={` ${styles["--responsive"]}`}>
            <StyledSelect
              fontSize="1.3rem"
              id="language_option"
              name="language"
              strong="true"
              width="100%"
            >
              <option className={styles["navbar__select--option"]} value="pt">
                🇧🇷 PT-BR
              </option>
              <option className={styles["navbar__select--option"]} value="en">
                🇺🇸 EN
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
        </div>

        <li>
          <div
            onClick={responsiveMenuHandler}
            className={`${styles["menu__burger--icon"]}`}
          >
            <div />
            <div />
            <div />
          </div>
        </li>
      </div>
      <div
        // style={showResponsiveMenu ? { display: "flex" } : { display: "none" }}
        className={`${
          showResponsiveMenu ? styles.onScreen : styles.offScreen
        }  ${styles["navbar__menu--mobile"]}`}
      >
        <li>
          <StyledSelect
            fontSize="1.3rem"
            id="language_option"
            name="language"
            strong="true"
            width="100%"
          >
            <option className={styles["navbar__select--option"]} value="pt">
              🇧🇷 PT-BR
            </option>
            <option className={styles["navbar__select--option"]} value="en">
              🇺🇸 EN
            </option>
          </StyledSelect>
        </li>
        <li>Vagas</li>
        <li>Blog</li>
        <li>
          <div className={` ${styles["menu__login"]}`}>Logar</div>
        </li>
        <li>
          <div className={` ${styles["menu_cadastrar"]}`}>
            Cadastre uma vaga
          </div>
        </li>
      </div>
    </>
  );
}

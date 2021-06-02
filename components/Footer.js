import styles from "../styles/modules/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={`container ${styles.footer}`}>
      <div className={`section__img ${styles["footer__img"]}`}>
        <Image
          width={276}
          height={358}
          src={"/assets/images/logo_puro.png"}
          alt="Foto de desenvolvedor de costas programando"
        />
      </div>
      <div className={`${styles["footer__group"]}`}>
        <a className={`${styles["footer__group--title"]}`}>home</a>
        <a>Login</a>
        <a>Nossos serviços</a>
        <a>Cadastre-se</a>
        <a>Política de privacidade</a>
      </div>
      <div className={`${styles["footer__group"]}`}>
        <a className={`${styles["footer__group--title"]}`}>vagas</a>
        <a>Ver Vagas</a>
        <a>Vagas Python - São Paulo</a>
        <a>Vagas Python - Rio de Janeiro</a>
        <a>Vagas Python - Espírito Santo</a>
      </div>
      <div className={`${styles["footer__group"]}`}>
        <a className={`${styles["footer__group--title"]}`}>cadastre-se</a>
        <a>Cadastre uma vaga</a>
        <a>Cadastre-se</a>
      </div>
    </div>
  );
}

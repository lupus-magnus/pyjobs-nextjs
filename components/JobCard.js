import styles from "../styles/modules/JobCard.module.css";

export default function JobCard() {
  return (
    <div className={`${styles["jobcard"]}`}>
      <div className={`container ${styles["jobcard__info"]}`}>
        <h3 className={`${styles["jobcard__info--title"]}`}>Titulo de Card</h3>
        <ul className={`container ${styles["job__info"]}`}>
          <li>
            <strong>Empresa:</strong> FIEC
          </li>
          <li>
            <strong>Faixa salarial:</strong> 6.000,01 - 10.000,00
          </li>
          <li>
            <strong>Local da vaga:</strong> Fortaleza - Ceará
          </li>
          <li>
            <strong>Nível:</strong> Pleno
          </li>
          <li>
            <strong>Aceita remoto:</strong> Sim
          </li>
        </ul>
        <div>
          <span className={`${styles["job__tags"]}`}>Tags</span>
          <span className={`${styles["job__tags"]}`}>Tags</span>
          <span className={`${styles["job__tags"]}`}>Tags</span>
          <span className={`${styles["job__tags"]}`}>Tags</span>
          <span className={`${styles["job__tags"]}`}>Tags</span>
          <span className={`${styles["job__tags"]}`}>Tags</span>

          <span className={`${styles["job__tags"]}`}>Tags</span>
        </div>
        <button
          className={`section__button ${styles["jobcard__info--button"]}`}
        >
          ver vaga
        </button>
      </div>
    </div>
  );
}

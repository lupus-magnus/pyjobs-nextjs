import styles from "../styles/partials/JobCard.module.css";

export default function JobCard(props) {
  console.log("Chegou no objeto card:", props.jobObj);
  const { id, title, company_name, workplace, remote } = props.jobObj;

  return (
    <div className={`${styles["jobcard"]}`}>
      <div className={`container ${styles["jobcard__info"]}`}>
        <h3 className={`${styles["jobcard__info--title"]}`}>{title}</h3>
        <ul className={`container ${styles["job__info"]}`}>
          <li>
            <strong>Empresa:</strong> {company_name}
          </li>
          <li>
            <strong>Faixa salarial:</strong> * A implementar *
          </li>
          <li>
            <strong>Local da vaga:</strong> {workplace}
          </li>
          <li>
            <strong>Nível:</strong> * A implementar *
          </li>
          <li>
            <strong>Aceita remoto:</strong> {remote ? "Sim" : "Não"}
          </li>
        </ul>
        <div>
          <span className={`${styles["job__badges"]}`}>badges</span>
          <span className={`${styles["job__badges"]}`}>badges</span>
          <span className={`${styles["job__badges"]}`}>badges</span>
          <span className={`${styles["job__badges"]}`}>badges</span>
          <span className={`${styles["job__badges"]}`}>badges</span>
          <span className={`${styles["job__badges"]}`}>badges</span>

          <span className={`${styles["job__badges"]}`}>badges</span>
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

import styles from "../styles/modules/StyledSelect.module.css";

export default function StyledSelect(props) {
  //Das props, apenas id e name são atributos obrigatórios. Pode-se passar também uma width desejada.
  const { id, name } = props;
  let width = props.width ? props.width : "80%";
  return (
    <div style={{ width: width }} className={styles["styledSelect--container"]}>
      <select
        className={styles["styledSelect"]}
        style={{
          fontSize: props.fontSize ? props.fontSize : "1rem",
          width: "99%",
        }}
        id={id}
        name={name}
      >
        {props.children}
      </select>
    </div>
  );
}

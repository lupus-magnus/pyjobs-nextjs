import styles from "../styles/partials/StyledSelect.module.css";

export default function StyledSelect(props) {
  //Das props, apenas id e name são atributos obrigatórios. Pode-se passar também uma width desejada.
  const { id, name } = props;
  let width = props.width ? props.width : "80%";
  let selectStyle = props.strong
    ? {
        fontSize: props.fontSize ? props.fontSize : "1rem",
        width: "99%",
        fontWeight: 700,
        textTransform: "uppercase",
      }
    : {
        fontSize: props.fontSize ? props.fontSize : "1rem",
        width: "99%",
        fontFamily: `Roboto, sans-serif`,
        fontWeight: 300,
      };
  return (
    <div style={{ width: width }} className={styles["input__container"]}>
      {props.label && (
        <label className={styles["styledSelect--label"]} htmlFor={name}>
          {" "}
          {props.label} :
        </label>
      )}
      <div className={styles["styledSelect--container"]}>
        <select
          className={styles["styledSelect"]}
          style={selectStyle}
          id={id}
          name={name}
        >
          {props.children}
        </select>
      </div>
    </div>
  );
}

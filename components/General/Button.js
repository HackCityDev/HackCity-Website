import styles from "./General.module.css";
export default function Button({ content, style, action, oppose }) {
  return (
    <button
      style={style}
      className={`${styles.Button} ${oppose ? styles.OpposeButton : ""}`}
      type="button"
      onClick={action}
    >
      {content}
    </button>
  );
}

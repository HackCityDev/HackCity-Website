import styles from "./General.module.css";
export default function Headers({ content, style }) {
  return (
    <h1 style={style} className={styles.Headers}>
      {content}
    </h1>
  );
}

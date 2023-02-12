import styles from "./General.module.css";
export default function Paragraphs({ content, style }) {
  return (
    <p style={style} className={styles.Paragraphs}>
      {content}
    </p>
  );
}

import styles from "./General.module.css";
export default function HighlightText({ content, style }) {
  return (
    <div style={style} className={styles.HighlightText}>
      {content}
    </div>
  );
}

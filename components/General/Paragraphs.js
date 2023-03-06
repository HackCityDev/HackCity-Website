import styles from "./General.module.css";
import { motion } from "framer-motion";

export default function Paragraphs({ content, style }) {
  return (
    <motion.p
      initial={{ opacity: 0, y:-20}}
      whileInView={{ opacity: 1, y:0}}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      style={style}
      className={styles.Paragraphs}>
      {content}
    </motion.p>
  );
}

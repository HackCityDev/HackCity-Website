import styles from "./General.module.css";
import { motion } from "framer-motion";

export default function Headers({ content, style }) {
  return (
    <motion.h1
      initial={{ opacity: 0, y:-20 }}
      whileInView={{ opacity: 1, y:0}}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      style={style}
      className={styles.Headers}>
      {content}
    </motion.h1>
  );
}

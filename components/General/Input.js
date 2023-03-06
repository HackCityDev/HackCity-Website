import styles from "./General.module.css";
import { motion } from "framer-motion";

export default function Input({ type, style, setter }) {
  return (
    <motion.input
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      style={style}
      className={styles.Input}
      onChange={(e) => setter(e.target.value)}
      type={type ? type : "text"}
    ></motion.input>
  );
}

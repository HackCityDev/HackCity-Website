import styles from "./General.module.css";
import { motion } from "framer-motion";

export default function HighlightText({ content, style }) {
  return (
    <motion.div 
    initial={{opacity:0, x: -50}}
    whileInView={{opacity:1, x:0}}
    transition={{ duration: 1}}
    viewport={{once:true}}
    style={style} className={styles.HighlightText}>
      {content}
    </motion.div>
  );
}

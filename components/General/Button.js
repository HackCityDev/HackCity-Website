import Link from "next/link";
import styles from "./General.module.css";
import { motion } from "framer-motion";
export default function Button({ content, style, action, oppose, link }) {
  return (
    <>
      {link ? (
        <Link href={link}>
          <a>
            <motion.button
              initial={{ opacity: 0, x: oppose ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              style={style}
              className={`${styles.Button} ${
                oppose ? styles.OpposeButton : ""
              }`}
              type="button">
              {content}
            </motion.button>
          </a>
        </Link>
      ) : (
        <motion.button
          initial={{ opacity: 0, x: oppose ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          style={style}
          className={`${styles.Button} ${oppose ? styles.OpposeButton : ""}`}
          type="button"
          onClick={action}>
          {content}
        </motion.button>
      )}
    </>
  );
}

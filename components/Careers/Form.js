import styles from "./styles/Subheader.module.css";
import Headers from "../General/Headers";
import Paragraphs from "../General/Paragraphs";
import Upload from "../../assets/Upload";
import Button from "../General/Button";
import Startups from "../HomePage/Startups";
import CountrySelector from "./CountrySelector";
import { AnimatePresence, motion } from "framer-motion";
export default function Form() {
  return (
    <section>
      <div className={styles.formContainer}>
        <Headers content="Your Details" style={{ lineHeight: 1 }} />
        <Paragraphs content="All fields are required" />

        <motion.div
          variants={formcont}
          initial="init"
          whileInView="final"
          className={styles.inputFieldsContainer}>
          <AnimatePresence>
            {" "}
            <motion.div variants={forminput} className={styles.FormInputfields}>
              <label>Full Name</label>
              <input type="Text" placeholder="John Doe" />
            </motion.div>
          </AnimatePresence>

          <AnimatePresence>
            <motion.div variants={forminput} className={styles.FormInputfields}>
              <label>Email</label>
              <input type="email" placeholder="johndoe@example.com" />
            </motion.div>
          </AnimatePresence>

          <AnimatePresence>
            {" "}
            <motion.div
              variants={forminput}
              className={`${styles.FormInputfields} ${styles.CountrySelector}`}>
              <label>Country</label>
              <CountrySelector />
            </motion.div>
          </AnimatePresence>

          <AnimatePresence>
            {" "}
            <motion.div variants={forminput} className={styles.FormInputfields}>
              <label>Years of Experience</label>
              <input type="text" placeholder="5years" />
            </motion.div>
          </AnimatePresence>
        </motion.div>
        <div className={styles.UploadForm}>
          <label htmlFor="resume">
            Upload Resume
            <div className={styles.Upload}>
              <Upload width="50px" height="50px" />
              <span>You can also drag and drop your file here </span>
            </div>
          </label>
          <input type="file" id="resume" style={{ display: "none" }} />
        </div>
        <Button
          style={{
            borderRadius: 5,
            width: "fit-content",
            margin: "auto",
          }}
          content="Submit your detials"
        />
      </div>
      <Startups />
    </section>
  );
}

const forminput = {
  init: {
    opacity: 0,
  },
  final: {
    x: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
};

const formcont = {
  init: {
    opacity: 0,
  },
  final: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

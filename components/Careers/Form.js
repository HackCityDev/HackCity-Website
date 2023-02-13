import styles from "./styles/Subheader.module.css";
import Headers from "../General/Headers";
import Paragraphs from "../General/Paragraphs";
import Upload from "../../assets/Upload";
import Button from "../General/Button";
import Startups from "../HomePage/Startups";
export default function Form() {
  return (
    <section>
      <div className={styles.formContainer}>
        <Headers content="Your Details" style={{ lineHeight: 1 }} />
        <Paragraphs content="All fields are required" />

        <div className={styles.inputFieldsContainer}>
          <div className={styles.FormInputfields}>
            <label>Full Name</label>
            <input type="Text" placeholder="John Doe" />
          </div>
          <div className={styles.FormInputfields}>
            <label>Email</label>
            <input type="email" placeholder="johndoe@example.com" />
          </div>
          <div className={styles.FormInputfields}>
            <label>Country</label>
            <input type="text" />
          </div>
          <div className={styles.FormInputfields}>
            <label>Years of Experience</label>
            <input type="text" placeholder="5years" />
          </div>
        </div>
        <div className={styles.UploadForm}>
          <label htmlFor="resume">
            Upload Resume
            <div className={styles.Upload}>
              <Upload />
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

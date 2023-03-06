import Button from "../General/Button";
import Input from "../General/Input";
import Paragraphs from "../General/Paragraphs";
import styles from "./Admin.module.css";

export default function Body() {
  return (
    <main className={styles.Body}>
      <div className={styles.Content}>
        <div>
          <Paragraphs content="Enter Title" />
          <Input></Input>
        </div>
        <div>
          <Paragraphs content="Enter Body" />
          <textarea></textarea>
        </div>
        <div>
          <Paragraphs content="Upload Image" />
          <Input type="file"></Input>
        </div>
      </div>
    </main>
  );
}

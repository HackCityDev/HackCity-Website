import Button from "../General/Button";
import Input from "../General/Input";
import Paragraphs from "../General/Paragraphs";
import styles from "./Admin.module.css";

export default function Lock({ setValue, func }) {
  return (
    <main className={styles.Lock}>
      <div className={styles.LockModal}>
        <div className={styles.Modal}>
          <Paragraphs content="Please enter secret pass" />
          <Input setter={setValue} type="password" />
          <Button content="Submit" action={func} />
        </div>
      </div>
    </main>
  );
}

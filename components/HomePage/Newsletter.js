import Button from "../General/Button";
import Headers from "../General/Headers";
import styles from "./Home.module.css";
export default function Newsletter() {
  return (
    <main className={styles.Newsletter}>
      <section>
        <aside>
          <Headers content="Subscribe to our newsletter" />
        </aside>

        <div>
          <input placeholder="enter your email" />
          <Button content="Subscribe" />
        </div>
      </section>
    </main>
  );
}

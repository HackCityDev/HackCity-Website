import styles from "./styles/Subheader.module.css";
import Wheel1 from "./Asset/MobBackgroundImg1";
import HalveWheel from "./Asset/MobBackgroundImg3";
import Halvemoon from "./Asset/MobBackgroundImg2";
import Headers from "../General/Headers";
import Paragraphs from "../General/Paragraphs";

export default function Subheader() {
  return (
    <div className={styles.Subheader}>
      <div className={styles.background1}>
        <Wheel1 />
      </div>
      <div className={styles.background2}>
        <Halvemoon />
      </div>
      <div className={styles.background3}>
        <HalveWheel />
      </div>
      <div className={styles.text}>
        <Headers content="Join the Team" />
        <Paragraphs
          content="Create your own personal profile"
          style={{ color: "#3a3a3a" }}
        />
      </div>
    </div>
  );
}

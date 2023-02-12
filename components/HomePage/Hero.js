import useMQ from "../../hooks/useMQ";
import Button from "../General/Button";
import Headers from "../General/Headers";
import HighlightText from "../General/HighlightText";
import Paragraphs from "../General/Paragraphs";
import HeroImage from "./Assets/Hero";
import styles from "./Home.module.css";
export default function Hero() {
  const isMobile = useMQ("(max-width: 900px)");
  return (
    <main className={styles.Hero}>
      <section className={styles.HeroContent}>
        <HighlightText content="HackCity Tech Inc." />
        <Headers content="Tech Innovation and Business Development Hub" />
        <Paragraphs content="Equipped with the resources to jumpstart your idea. Experienced software and business developers for all your needs, simple or complex." />
        <div className={styles.HeroButton}>
          <Button content="Hire Developers" />
          <Button content="Contact Us" oppose={true} />
        </div>
      </section>
      {isMobile ? null : (
        <section>
          <HeroImage />
        </section>
      )}
    </main>
  );
}

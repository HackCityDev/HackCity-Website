import useMQ from "../../hooks/useMQ";
import Button from "../General/Button";
import Headers from "../General/Headers";
import HighlightText from "../General/HighlightText";
import Paragraphs from "../General/Paragraphs";
import HeroImage from "./Assets/Hero";
import styles from "./Home.module.css";

//framer motion
import { motion } from "framer-motion";

export default function Hero() {
  const isMobile = useMQ("(max-width: 900px)");
  return (
    <main className={styles.Hero}>
      <section className={styles.HeroContent}>
        <HighlightText content="HackCity Tech Inc." />
        <Headers content="Tech Innovation and Business Development Hub" />
        <Paragraphs content="Equipped with the resources to jumpstart your idea. Experienced software and business developers for all your needs, simple or complex." />
        <div className={styles.HeroButton}>
          <Button content="Hire Developers" link={"/hire-us"} />
          <Button content="Contact Us" oppose={true} link={"/contact-us"} />
        </div>
      </section>
      {!isMobile ? (
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1}}
          transition={{ duration: 1 }}
          viewport={{ once: true }}>
          <HeroImage />
        </motion.section>
      ) : null}
    </main>
  );
}

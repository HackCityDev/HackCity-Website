import Image from "next/image";
import useMQ from "../../hooks/useMQ";
import Headers from "../General/Headers";
import HighlightText from "../General/HighlightText";
import Paragraphs from "../General/Paragraphs";
import DevImage from "./Assets/DevImage";
import DevImageSVG from "./Assets/DevImageSVG.svg";
import styles from "./Home.module.css";

import { motion } from "framer-motion";

export default function Dev() {
  const isMobile = useMQ("(max-width: 900px)");
  return (
    <main className={styles.Dev}>
      <motion.aside
        initial={{ x: -150, opacity: 0.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.1 }}
        viewport={{once:true}}
        className={styles.DevImage}>
        {isMobile ? (
          <DevImage />
        ) : (
          <Image
            objectFit="contain"
            layout="fill"
            src={DevImageSVG}
            alt="image"
          />
        )}
      </motion.aside>
      <section className={styles.DevContent}>
        <HighlightText content="Who we are" />
        <Headers content="Experienced Tech Solutions Provider" />
        <Paragraphs content="Equipped with the resources to jumpstart your idea. Experienced software and business developers for all your needs, simple or complex." />
      </section>
    </main>
  );
}

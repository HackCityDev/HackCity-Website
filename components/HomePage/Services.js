import Headers from "../General/Headers";
import styles from "./Home.module.css";
import web from "./Assets/Services/web.png";
import blockchain from "./Assets/Services/blockchain.png";
import bot from "./Assets/Services/bot.png";
import app from "./Assets/Services/app.png";
import pnp from "./Assets/Services/pnp.png";
import game from "./Assets/Services/game.png";
import arrow from "./Assets/Services/arrow.png";
import Image from "next/image";
import Paragraphs from "../General/Paragraphs";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
export default function Services() {
  return (
    <main className={styles.Services}>
      <section className={styles.ServicesContent}>
        <Headers content="Our Services" style={{ fontSize: "22px" }} />
        <motion.aside
          variants={cardscontainer}
          initial="init"
          whileInView="final"
          viewport={{ once: true }}>
          <AnimatePresence>
            {services.map((service) => (
              <motion.div variants={card} key={service.title}>
                <header>
                  <Image
                    width={30}
                    height={30}
                    src={service.image}
                    alt="image"
                  />
                  <Headers
                    content={service.title}
                    style={{ fontSize: "22px" }}
                  />
                  <Paragraphs content={service.content} />
                </header>
                <span className={styles.ServicesLearnmore}>
                  <Image width={16.67} height={16.67} src={arrow} alt="image" />
                  <Link href={service.link}>
                    <a>Learn More</a>
                  </Link>
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.aside>
      </section>
    </main>
  );
}
let services = [
  {
    title: "Web Application",
    image: web,
    content:
      "Design and development of websites and web applications of all kind. Our experienced developers handle it all.",
    link: "",
  },
  {
    title: "Mobile Application",
    image: app,
    content:
      "Hack City Tech focuses on user experience, making your potential customers engaged.",
    link: "",
  },
  {
    title: "Game Application",
    image: game,
    content:
      "Hack City Tech focuses on user experience, making your potential customers engaged.",
    link: "",
  },
  {
    title: "Blockchain Application",
    image: blockchain,
    content:
      "Hack City Tech focuses on user experience, making your potential customers engaged.",
    link: "",
  },
  {
    title: "Bot Application",
    image: bot,
    content:
      "Hack City Tech focuses on user experience, making your potential customers engaged.",
    link: "",
  },
  {
    title: "PnP Microservice",
    image: pnp,
    content:
      "Hack City Tech focuses on user experience, making your potential customers engaged.",
    link: "",
  },
];

const card = {
  init: {
    opacity: 0,
    y: -150,
    
  },
  final: {
    y: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
};

const cardscontainer = {
  init: {
    opacity: 0,
  },
  final: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

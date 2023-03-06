import Cog from "./Assets/Cog";
import Target from "./Assets/Target";
import UserFemale from "./Assets/UserFemale";
import styles from "./Home.module.css";
import { motion, AnimatePresence } from "framer-motion";
export default function FlexBoxes() {
  return (
    <main className={styles.FlexBoxes}>
      <motion.section
      variants={cardscontainer}
      initial="init"
      whileInView="final"
      transition={{duration:1}}
      viewport={{once:true}}
      className={styles.FlexBoxesContent}>
        <AnimatePresence>
          {box.map((content) => (
            <motion.aside variants={cards} key={content.title}>
              <div>
                {content.icon}
                <h3> {content.title}</h3>
              </div>
              <p>{content.content}</p>
            </motion.aside>
          ))}
        </AnimatePresence>
      </motion.section>
    </main>
  );
}

let box = [
  {
    title: "Tech. + Business",
    content:
      "We go beyond software development, we also offer business development services",
    icon: <Cog />,
  },
  {
    title: "Vetted + Experienced",
    content:
      "Team of well-vetted experienced developers for your tech and business needs",
    icon: <UserFemale />,
  },
  {
    title: "Effective + Efficient",
    content:
      "Adopts an effective and efficient development scheme, saving you time and money",
    icon: <Target />,
  },
];


//framer motion variants

const cards = {
  init: {
    x:-100, opacity:0
  },
  final: {
    x: 0, opacity:1,
    transition: { duration: 1 },
  },
};

const cardscontainer = {
  init: {
    opacity: 0, x:100
  },
  final: {
    opacity: 1, x:0,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

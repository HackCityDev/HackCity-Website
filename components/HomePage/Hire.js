import Image from "next/image";
import Button from "../General/Button";
import Headers from "../General/Headers";
import HighlightText from "../General/HighlightText";
import Paragraphs from "../General/Paragraphs";
import HireImage from "./Assets/Hire.svg";
import { IoIosArrowRoundForward } from "react-icons/io";
import styles from "./Home.module.css";
export default function Hire() {
  return (
    <main className={styles.Hire}>
      <section className={styles.HireImage}>
        <Image objectFit="contain" layout="fill" src={HireImage} />
      </section>
      <section className={styles.HireContent}>
        <HighlightText content="Why Hire Us" />
        <Headers content="Business Solutions that will Help You Grow" />
        <Paragraphs
          style={{ fontSize: "15px" }}
          content="Beyond providing tech. support and development, we also provide tech startups with marketing resources and the business operations support they need to get their project or company from an idea to a product/company."
        />
        <Paragraphs
          style={{ fontSize: "15px" }}
          content="
        With Hack City Tech., we not only provide such startups with the right tech team to build their products efficiently, we also provide marketing and business operations support/resources. In addition, we provide them with investment and potential business partnership leads from our business network."
        />
        <Button
          content={
            <span style={{ display: "flex", gap: "10px" }}>
              Learn more <IoIosArrowRoundForward />
            </span>
          }
        />
      </section>
    </main>
  );
}

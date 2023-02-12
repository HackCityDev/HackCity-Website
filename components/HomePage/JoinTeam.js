import Button from "../General/Button";
import Headers from "../General/Headers";
import HighlightText from "../General/HighlightText";
import Paragraphs from "../General/Paragraphs";
import styles from "./Home.module.css";
import { IoIosArrowRoundForward } from "react-icons/io";
export default function JoinTeam() {
  return (
    <main className={styles.JoinTeam}>
      <section>
        <HighlightText content="Join our Team" />
        <Headers content="Great Community for Experienced Developers" />
        <Paragraphs content="With Hack City Tech., we do not only provide startups with the right tech team to build their products efficiently, we also provide marketing and business operations support/resources." />
        <Button
          content={
            <span style={{ display: "flex", gap: "10px" }}>
              Hire us <IoIosArrowRoundForward />
            </span>
          }
        />
      </section>
    </main>
  );
}

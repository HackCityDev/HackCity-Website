import Image from "next/image";
import Headers from "../General/Headers";
import Asset1 from "./Assets/Startups/image313.png";
import Asset2 from "./Assets/Startups/image314.png";
import Asset3 from "./Assets/Startups/image316.png";
import Asset4 from "./Assets/Startups/image317.png";
import Asset5 from "./Assets/Startups/image318.png";
import Asset6 from "./Assets/Startups/image320.png";
import Asset7 from "./Assets/Startups/image323.png";
import styles from "./Home.module.css";
export default function Startups() {
  return (
    <main className={styles.Startups}>
      <section className={styles.StartupsContent}>
        <Headers
          style={{ fontSize: "22px" }}
          content="Successful Businesses & Startups"
        />
      </section>
      <section className={styles.StartupsAssets}>
        {assets.map((asset, i) => (
          <Image width={50} height={40} src={asset} key={i} />
        ))}
      </section>
    </main>
  );
}
let assets = [Asset1, Asset2, Asset3, Asset4, Asset5, Asset6, Asset7];

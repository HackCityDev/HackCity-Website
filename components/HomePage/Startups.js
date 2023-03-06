import Image from "next/image";
import Headers from "../General/Headers";
import Asset1 from "./Assets/Startups/educarts.png";
import Asset2 from "./Assets/Startups/piremit.png";
import Asset3 from "./Assets/Startups/syntrum.png";
import styles from "./Home.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useMQ from "../../hooks/useMQ";

export default function Startups() {
  const isMobile = useMQ("(max-width: 700px)");
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: isMobile ? 2 : 3,
    slidesToScroll: isMobile ? 1 : 2,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />,
    pauseOnHover: true,
  };
  return (
    <main className={styles.Startups}>
      <section className={styles.StartupsContent}>
        <Headers
          style={{ fontSize: "22px" }}
          content="Successful Businesses & Startups"
        />
      </section>
      <Slider {...settings} className={styles.StartupsAssets}>
        {assets.map((asset, i) => (
          <div key={i} className={styles.Image}>
            <Image objectFit="contain" layout="fill" src={asset} alt="image" />
          </div>
        ))}
      </Slider>
    </main>
  );
}
let assets = [Asset1, Asset2, Asset3];
function SampleArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "green" }}
      onClick={onClick}
    />
  );
}

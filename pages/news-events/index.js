import Image from "next/image";
import Link from "next/link";
import Headers from "../../components/General/Headers";
import Paragraphs from "../../components/General/Paragraphs";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import featuredImage from "../../assets/image345.png";
import image1 from "../../assets/image348.png";
import image2 from "../../assets/image349.png";
import image3 from "../../assets/image347.png";
import image4 from "../../assets/image346.png";
import styles from "../../styles/services.module.css";
import Button from "../../components/General/Button";
import Newsletter from "../../components/HomePage/Newsletter";
import { slugLink } from "../../utils/utils";
export default function NewsAndEvents() {
  return (
    <main className={styles.Services}>
      <section className={styles.ServicesHeader}>
        <aside className={styles.ServicesHeaderContent}>
          <Headers content="News & Events" />
          <Paragraphs content="Get first-hand information about our events" />
        </aside>
      </section>
      <section className={styles.NewsAndEvents}>
        <aside className={styles.NewsAndEventsFeatured}>
          <Headers content="Featured Event" style={{ fontSize: "26px" }} />
          <div className={styles.NewsAndEventsImages}>
            <Image src={featuredImage} layout="fill" objectFit="cover" />
          </div>
          <div className={styles.NewsAndEventsFeaturedContent}>
            <Button
              content="Hackathon"
              style={{ borderRadius: "20px", padding: "10px 30px" }}
            />
            <p>2 mins to read</p>
            <p>11th Jan. 2023</p>
          </div>
          <h1>{header}</h1>
          <Paragraphs
            content="sending an email using an email client or application you've configured to use SMTP2GO. We'll watch for it to make sure it's all working properly sending an email using an email client or application you've configured to use SMTP2GO. We'll watch for it to make sure it's all working properly"
            style={{ fontSize: 13, lineHeight: "20px" }}
          />
          <Paragraphs
            content="sending an email using an email client or application you've configured to use SMTP2GO. We'll watch for it to make sure it's all working properly sending an email using an email client or application you've configured to use SMTP2GO. We'll watch for it to make sure it's all working properly ..."
            style={{ fontSize: 13, lineHeight: "20px" }}
          />
          <Link href={`/news-events/${slugLink(header)}`}>
            <a>Read more</a>
          </Link>
        </aside>
        <aside className={styles.NewsAndEventsLatest}>
          <Headers content="Latest News" />
          <div className={styles.NewsAndEventsLatestContainer}>
            {latestNews.map((news, i) => (
              <div key={i} className={styles.NewsAndEventsLatestNews}>
                <div className={styles.NewsAndEventsLatestImage}>
                  <Image src={news.image} objectFit="cover" layout="fill" />
                </div>
                <div className={styles.NewsAndEventsLatestContent}>
                  <Button
                    content={news.button}
                    style={{
                      borderRadius: "20px",
                      padding: "7px 15px",
                      width: "120px",
                    }}
                  />
                  <h1>{news.header}</h1>
                  <div>
                    <p>2 mins to read</p>
                    <p>11th Jan. 2023</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.NewsAndEventsLatestPagination}>
            <button>
              <AiOutlineArrowLeft />
              <span>Previous</span>
            </button>
            {buttons.map((button) => (
              <button
                className={button === 1 ? styles.activeButton : ""}
                key={button}
              >
                {button}
              </button>
            ))}
            <button>
              <span>Next</span>
              <AiOutlineArrowRight />
            </button>
          </div>
        </aside>
      </section>
      <Newsletter />
    </main>
  );
}
export const latestNews = [
  {
    image: image1,
    button: "Education",
    header: "Smash the Next Interview",
  },
  {
    image: image2,
    button: "Finance",
    header: "Proper investment that yield results",
  },
  {
    image: image3,
    button: "Education",
    header: "Get the next big Opportunity in Tech",
  },
  {
    image: image4,
    button: "Finance",
    header: "Hangout with Hack City Techie",
  },
];
let buttons = [1, 2, 3, "...", 8, 9, 10];
let header = "Largest Gathering of Techies in Lagos, Nigeria";

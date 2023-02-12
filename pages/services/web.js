import WebAppImage from "../../assets/WebApp";
import Button from "../../components/General/Button";
import Headers from "../../components/General/Headers";
import HighlightText from "../../components/General/HighlightText";
import Paragraphs from "../../components/General/Paragraphs";
import Startups from "../../components/HomePage/Startups";
import styles from "../../styles/services.module.css";
export default function Webapp() {
  return (
    <main className={styles.Services}>
      <section className={styles.ServicesHeader}>
        <aside>
          <Headers content="Web Application" />
          <Paragraphs content="Services" />
        </aside>
      </section>
      <section className={styles.ServicesBody}>
        <aside className={styles.ServicesTop}>
          <div>
            <h1>
              Web Application Development & <span>UI Designing</span>
            </h1>
          </div>
          <Paragraphs
            style={{ fontSize: "clamp(14px, 16px, 18px)" }}
            content="Web application development entails creating the HTML, CSS and JavaScript coding that makes up the client side of an application or website. Our expert web developer and UI designers will create a modern, intuitive and engaging user experience(UX) and user interface(UI) for your application. Front-end developers support the client side of web development and code everything a user sees, while the Back-end developer build and maintain the mechanisms that process data and perform actions on websites. They use a variety of technologies and design tools to bring your ideas to life. Our web developer experts are experienced in creating and handling responsive applications."
          />
          <Paragraphs
            style={{ fontSize: "clamp(14px, 16px, 18px)" }}
            content="Our designers use latest and best UX tools, from wireframing and prototyping."
          />
        </aside>
        <aside className={styles.ServicesImage}>
          <WebAppImage />
        </aside>
      </section>
      <article className={styles.ServicesBottom}>
        <h1>Reach out to us</h1>
        <Button content="Hire Developer" oppose={true} />
      </article>
      <Startups />
    </main>
  );
}

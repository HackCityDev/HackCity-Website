import { slugWord } from "../../utils/utils";
import Image from "next/image";
import Link from "next/link";
import Headers from "../../components/General/Headers";
import Paragraphs from "../../components/General/Paragraphs";
import { AiOutlineArrowLeft } from "react-icons/ai";
import featuredImage from "../../assets/image345.png";
import styles from "../../styles/services.module.css";
import Button from "../../components/General/Button";
import Newsletter from "../../components/HomePage/Newsletter";
import { latestNews } from ".";
import Form from "../../components/Modal/Form";
import { useState } from "react";
export default function NewsAndEventsDynamic({ id }) {
  const [modal, setModal] = useState(false);
  return (
    <main className={styles.Services}>
      {modal && <Form close={() => setModal(false)} />}
      <section className={styles.ServicesHeader}>
        <aside className={styles.ServicesHeaderContent}>
          <Headers content={id} />
        </aside>
      </section>
      <section className={styles.NewsAndEventsDynamic}>
        <Link passHref href="/news-events">
          <a className={styles.NewsAndEventsDynamicBack}>
            <AiOutlineArrowLeft /> Back to News And Events
          </a>
        </Link>
        <aside className={styles.NewsAndEventsDynamicContent}>
          <section className={styles.NewsAndEventsDynamicMain}>
            <div className={styles.Image}>
              <Image src={featuredImage} objectFit="contain" layout="fill" />
            </div>
            <Headers content={id} />
            <div className={styles.NewsAndEventsDynamicFeaturedContent}>
              <Button
                content="Hackathon"
                style={{ borderRadius: "20px", padding: "10px 30px" }}
              />
              <p>2 mins to read</p>
              <p>11th Jan. 2023</p>
            </div>
            <Paragraphs content="sending an email using an email client or application you've configured to use SMTP2GO. We'll watch for it to make sure it's all working properly sending an email using an email client or application you've configured to use SMTP2GO. We'll watch for it to make sure it's all working properly" />
            <Paragraphs content="sending an email using an email client or application you've configured to use SMTP2GO. We'll watch for it to make sure it's all working properly sending an email using an email client or application you've configured to use SMTP2GO. We'll watch for it to make sure it's all working properly The Lagos State Head of Service, Mr. Hakeem Muri-Okunola, announced the appointment in a statement made available by the Special Adviser to the Governor on Education, Mr Tokunbo Wahab, on Wednesday, according to a Nigerian Tribune report." />
            <Paragraphs
              content="Muri-Okunlola said Lafiaji-Okuneyes appointment as substantive VC of the institution backdated to March 2022 and would run for only five years single tenure.
              The Special Adviser to the Governor on Education, Wahab, explained that Lafiaji-Okuneyes elevation was in compliance with Section 8, Subsection (1) (C) and (D) of the Lagos State University of Education (LASUED) Law of 2021.
              He congratulated the new VC and urged her to consider her appointment as a call to higher responsibility."
            />
            <Button
              content="Click to apply"
              style={{
                background: "#EB5757",
                borderRadius: "7px",
              }}
              action={() => setModal(true)}
            />
          </section>
          <section className={styles.NewsAndEventsDynamicNews}>
            <Headers content="Recent News" />
            {latestNews.map((news, i) => {
              if (i === 1) return null;
              return (
                <div key={i} className={styles.Content}>
                  <h1>{news.header}</h1>
                  <div>
                    <p>2 mins to read</p>
                    <p>11th Jan. 2023</p>
                  </div>
                  <Button
                    content={news.button}
                    style={{
                      borderRadius: "20px",
                      padding: "7px 15px",
                      width: "120px",
                    }}
                  />
                </div>
              );
            })}
          </section>
        </aside>
      </section>
      <Newsletter />
    </main>
  );
}
export async function getServerSideProps({ params }) {
  let id = slugWord(params.id);
  return {
    props: {
      id,
    },
  };
}

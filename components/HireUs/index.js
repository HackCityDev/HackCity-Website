import useMQ from "../../hooks/useMQ";
import Paragraphs from "../General/Paragraphs";
import Headers from "../General/Headers";
import Button from "../General/Button";
import Startups from "../HomePage/Startups";
import Asset1 from "./Assets/1.svg";
import Asset2 from "./Assets/2.svg";
import Asset3 from "./Assets/3.svg";
import Asset4 from "./Assets/4.svg";
import Asset5 from "./Assets/5.svg";
import Asset6 from "./Assets/6.svg";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { GiCircle, GiPlainCircle } from "react-icons/gi";
import styles from "./Hire.module.css";
import { useState } from "react";
import Image from "next/image";
import Success from "./Assets/Success";
import Notification from "../Notifications/Notification";
import useTimeout from "../../hooks/useTimeout";
export default function HireUs() {
  const isMobile = useMQ("(max-width: 900px)");
  const [selection, setSelection] = useState([
    "",
    "",
    "",
    "",
    {
      "Full Name": "",
      "Work Email": "",
      "Company Name": "",
      Position: "",
    },
  ]);
  const [content, setContent] = useState(["", "", "", "", ""]);
  const [view, setView] = useState(0);
  const [notify, setNotify] = useState(false);
  let currentStyle = {
    visibility: view > 0 ? "visible" : "hidden",
  };
  let newStyle = {
    visibility: view < 10 ? "visible" : "hidden",
  };
  function setUserSelection(select, i) {
    if (i !== 4) {
      const updatedSelection = [...selection];
      updatedSelection[i] = select;
      setSelection(updatedSelection);
    } else {
      const newSelection = [...selection];
      const updatedObject = {
        ...newSelection[4],
        [select.target.name]: select.target.value,
      };
      newSelection[4] = updatedObject;
      setSelection(newSelection);
    }
  }
  function setUserContent(e, i) {
    const updatedContent = [...content];
    updatedContent[i] = e?.target?.value ? e.target.value : e;
    setContent(updatedContent);
  }
  useTimeout(() => setNotify(false), 5000, [setNotify, view, notify]);
  return (
    <main className={styles.Index}>
      {notify && <Notification close={setNotify} action={"Make a selection"} />}
      <section>
        {isMobile ? (
          <aside className={styles.IndexHeaders}>
            <HiOutlineArrowNarrowLeft
              onClick={view > 0 ? () => setView(view - 2) : () => setView(view)}
            />
            <Headers content="Hire Us" />
            <Paragraphs content={`Step ${page[view / 2]}`} />
          </aside>
        ) : (
          <aside className={styles.IndexImage}>
            {view / 2 !== 5 && (
              <HiOutlineArrowNarrowLeft
                onClick={
                  view > 0 ? () => setView(view - 2) : () => setView(view)
                }
              />
            )}
            <Image objectFit="cover" layout="fill" src={assets[view / 2]} />
          </aside>
        )}
        <aside className={styles.IndexContainer}>
          <Headers
            content="We boast of highly skilled and experienced tech personnel. We handle every
             projects with experience"
            style={{ fontSize: "clamp(14px, 16px, 20px)", lineHeight: "25px" }}
          />
          <div className={styles.IndexProgress}>
            <Paragraphs
              content={`${view * 10}% Completed`}
              style={{ color: "#656464" }}
            />
            <progress value={view * 10} max={100}></progress>
          </div>
          <div className={styles.IndexQuestionaire}>
            {view / 2 !== 5 && (
              <div className={styles.IndexQuestionaireHeader}>
                <GiPlainCircle
                  style={{
                    color: "#0F2A51",
                  }}
                />
                <Paragraphs
                  content={questionHeaders[view / 2]}
                  style={{ fontSize: "16px" }}
                />
              </div>
            )}
            <div className={styles.IndexQuestionaireBox}>
              {view / 2 !== 4 ? (
                questions[view / 2].length > 0 ? (
                  questions[view / 2].map((question, i) => (
                    <div
                      key={i}
                      className={styles.IndexQuestionaireContent}
                      onClick={() => setUserSelection(question, view / 2)}
                    >
                      {selection[view / 2] === question ? (
                        <GiPlainCircle />
                      ) : (
                        <GiCircle style={{ color: "#fff" }} />
                      )}
                      <span>{question}</span>
                    </div>
                  ))
                ) : (
                  <div className={styles.SuccessPage}>
                    <aside>
                      <Success />
                    </aside>
                    <Paragraphs
                      content="Thank you for reaching out to us with the important details of your project.  One of Management team will reach out to you within 24hours"
                      style={{
                        color: "#656464",
                        textAlign: "center",
                        fontSize: 20,
                      }}
                    />
                  </div>
                )
              ) : (
                questions[4].map((question, i) => (
                  <label key={i}>
                    <span>{question}</span>
                    <input
                      onChange={(e) => setUserSelection(e, 4)}
                      placeholder={questionExamples[i]}
                      name={question}
                      className={styles.IndexQuestionaireInput}
                    />
                  </label>
                ))
              )}
            </div>
          </div>
          {questionFooters[view / 2] ? (
            <div className={styles.IndexQuestionaire}>
              <div className={styles.IndexQuestionaireFooter}>
                <GiPlainCircle
                  style={{
                    color: "#0F2A51",
                  }}
                />
                <Paragraphs
                  content={questionFooters[view / 2]}
                  style={{ fontSize: "16px" }}
                />
              </div>
              {view / 2 !== 2 ? (
                <div className={styles.IndexQuestionaireTextarea}>
                  <textarea
                    onChange={(e) => setUserContent(e, view / 2)}
                    value={content[view / 2]}
                  ></textarea>
                </div>
              ) : (
                <div className={styles.IndexQuestionaireBox}>
                  {footersQuestions.map((question, i) => (
                    <div
                      key={i}
                      className={styles.IndexQuestionaireContent}
                      onClick={() => setUserContent(question, view / 2)}
                    >
                      {content[view / 2] === question ? (
                        <GiPlainCircle />
                      ) : (
                        <GiCircle style={{ color: "#fff" }} />
                      )}
                      <span>{question}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : null}
          {view / 2 !== 5 ? (
            <div className={styles.HireButton}>
              <Button
                content="Previous"
                style={currentStyle}
                action={() => setView(view - 2)}
                oppose={true}
              />
              <Button
                content={view / 2 !== 4 ? "Next" : "Submit"}
                action={
                  selection[view / 2]
                    ? () => setView(view + 2)
                    : () => setNotify(true)
                }
                style={newStyle}
              />
            </div>
          ) : (
            <div className={styles.Submit}>
              <Button content="Home page" link="/" />
            </div>
          )}
        </aside>
      </section>
      <Startups />
    </main>
  );
}
let questionHeaders = [
  <span key={0}>
    What can <b>Hack City Tech</b> do for you?
  </span>,
  "What is the Application/Product Domain?",
  "Which best describes your requirement/engagement timeline?",
  "What is the price estimate for the project?",
  "Please fill your credentials",
];
let assets = [Asset1, Asset2, Asset3, Asset4, Asset5, Asset6];
let questions = [
  [
    "SaaS (Software as a Service) Development",
    "Web Application Development",
    "Mobile App Development",
    "API Development",
    "MVP Development",
    "UI/UX Design",
    "Blockchain Application",
    "Smart Contract",
    "Training",
    "Consultation",
  ],
  [
    "Healthcare and Pharma",
    "Fintech/Finance",
    "Technology Company",
    "Automotive",
    "Logistics & Transport",
    "Education",
    "Insurance",
    "Blockchain",
  ],
  [
    "Short term (Up to 3 months)",
    "Medium Term ( 3 to 6 Months)",
    "Long Term (More than 6 months)",
  ],
  ["$1,000 - $3,000+", "$4,000 - $9,000+", "$10,000 and above", "Not decided"],
  ["Full Name", "Work Email", "Company Name", "Position"],
  [],
];
let page = ["One", "Two", "Three", "Four", "Five"];
let questionFooters = [
  <span key={0}>
    What can <b>Hack City Tech</b> do for you?
  </span>,
  "Others",
  "When are you likely to start this project ?",
  "",
  "Other Information",
];
let footersQuestions = [
  "Immediately",
  " Within 2 weeks",
  " Within a month",
  "Not decided",
];
let questionExamples = [
  "eg. John Doe",
  "eg. johndoe@example.com",
  "eg. HackCity Tech Inc.",
  "eg. Program Director",
];

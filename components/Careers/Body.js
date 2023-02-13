import { useState } from "react";
import styles from "./styles/Subheader.module.css";
import { Array } from "./Asset/Index";
import Image from "next/image";
import Headers from "../General/Headers";
import Paragraphs from "../General/Paragraphs";

export default function Body() {
  const [checkboxValues, setCheckboxValues] = useState([]);
  const [show, setShow] = useState(true);
  const [mainArray, setMainArray] = useState(Array.slice(0, 20));
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setCheckboxValues([...checkboxValues, name]);
    } else {
      setCheckboxValues(checkboxValues.filter((value) => value !== name));
    }
  };
  const showMore = () => {
    setMainArray(Array);
    setShow(false);
  };
  const showLess = () => {
    setMainArray(Array.slice(0, 20));
    setShow(true);
  };
  return (
    <div className={styles.Body}>
      <Headers content="Based on your skills" style={{ fontSize: 20 }} />
      <Paragraphs
        style={{ fontSize: 15 }}
        content="You can Select multiple skills"
      />
      <div className={styles.skillsContainer}>
        {mainArray.map((skill, I) => (
          <div key={I} className={styles.skills}>
            <div
              className={`${styles.Icon} ${
                skill.name === "Node" ? styles.node : ""
              }`}
            >
              <Image
                src={skill.Icon}
                objectFit="contain"
                layout="fill"
                alt="icon"
              />
            </div>
            <Headers
              content={skill.name !== "Node" && skill.name}
              style={{ fontSize: 20, lineHeight: "18px" }}
            />
            <input
              type="checkbox"
              id="check-23"
              className={styles.checkbox}
              name={skill.name}
              onChange={handleCheckboxChange}
            />
          </div>
        ))}
        {show ? (
          <div className={styles.show} onClick={showMore}>
            View more skills
          </div>
        ) : (
          <div className={styles.show} onClick={showLess}>
            View less skills
          </div>
        )}
      </div>
    </div>
  );
}

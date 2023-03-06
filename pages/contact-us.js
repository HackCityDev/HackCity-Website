import { useState } from "react";
import Email from "../assets/Email";
import Location from "../assets/Location";
import Telephone from "../assets/Telephone";
import Button from "../components/General/Button";
import Headers from "../components/General/Headers";
import Paragraphs from "../components/General/Paragraphs";
import Startups from "../components/HomePage/Startups";
import styles from "../styles/services.module.css";
import { motion, AnimatePresence } from "framer-motion";
export default function Mobile() {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  console.log(data);
  return (
    <main className={styles.Services}>
      <section className={styles.ServicesHeader}>
        <aside className={styles.ServicesHeaderContent}>
          <Headers content="Contact Us" />
        </aside>
      </section>
      <section className={styles.ContactUs}>
        <aside className={styles.ServicesLeft}>
          <h1>Convinced yet? Lets make something great together</h1>
          {values.map((value, i) => (
            <div key={i}>
              {value.icon}
              <Paragraphs content={value.name} style={{ color: "white" }} />
            </div>
          ))}
        </aside>
        <aside className={styles.ServicesRight}>
          <Headers content="How may we help you?" />
          <div>
            <p>All fields are required</p>
            <hr />
          </div>
          <motion.form variants={formcont} initial="init" whileInView="final">
            <AnimatePresence>
              {inputValues.map((inputValue) => (
                <motion.span variants={forminput} key={inputValue.id}>
                  <label htmlFor={inputValue.id}>{inputValue.label}</label>
                  <input
                    id={inputValue.id}
                    type="text"
                    name={inputValue.id}
                    placeholder={inputValue.placeholder}
                    onChange={(e) =>
                      setData((data) => ({
                        ...data,
                        [e.target.name]: e.target.value,
                      }))
                    }
                  />
                </motion.span>
              ))}
            </AnimatePresence>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{once:true}}>
              <label htmlFor="message">Enter Message</label>
              <textarea
                id="message"
                placeholder="enter your message"></textarea>
            </motion.span>
            <Button content="Send Message" style={{ width: "100%" }} />
          </motion.form>
        </aside>
      </section>
      <Startups />
    </main>
  );
}

let values = [
  {
    icon: <Location />,
    name: (
      <>
        <span>Moonshine St. 14/05 Light City,</span>
        <span>Lagos, Nigeria</span>
      </>
    ),
  },
  {
    icon: <Telephone />,
    name: (
      <>
        <span>+234 803 345 1209</span>
        <span>+233 193 345 1</span>
      </>
    ),
  },
  {
    icon: <Email />,
    name: (
      <>
        {" "}
        <span>info@hackcity.tech</span>
        <span>support@hackcity.tech</span>
      </>
    ),
  },
];
let inputValues = [
  { id: "name", placeholder: "John Doe", label: "Name" },
  { id: "email", placeholder: "sample@user.com", label: "Email" },
  { id: "subject", placeholder: "How to join the team", label: "Subject" },
];
const forminput = {
  init: {
    opacity: 0,
  },
  final: {
    x: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
};

const formcont = {
  init: {
    opacity: 0,
  },
  final: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

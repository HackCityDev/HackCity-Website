import React, { useEffect } from "react";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineMail,
} from "react-icons/ai";
import { SiInstagram } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import Link from "next/link";
import Logo from "../../assets/LogoWhite";
import styles from "./Layout.module.css";
import { Links } from "./Navbar";

const FooterComponent = () => {
  useEffect(() => {
    const scrollAnimate = setInterval(() => {
      window.scrollTo(0, window.scrollY - 10);
      if (window.scrollY == 0) clearInterval(scrollAnimate);
    }, 1);
  }, []);

  return (
    <footer className={styles.Footer} id="nav">
      <section className={styles.FooterContainer}>
        <aside className={styles.FooterHeader}>
          <div className={styles.FooterLogo}>
            <Logo />
          </div>
          <p className={styles.FooterTagline}>
            A one-stop tech company specializing in the transformation of ideas
            into products and businesses; as well as the training of curious
            students to become highly qualified developers
          </p>
          <div className={styles.FooterSocials}>
            {socials.map((social) => (
              <Link href={social.link} key={social.link}>
                <a>{social.icon}</a>
              </Link>
            ))}
          </div>
        </aside>
        <section>
          <aside className={styles.FooterSolutions}>
            <h4>Solutions</h4>
            <div className={styles.FooterSolutionsLinks}>
              {Links[0].dropdown.map((link) => (
                <Link href={link.link} key={link.link}>
                  <a>{link.name}</a>
                </Link>
              ))}
            </div>
          </aside>
          <aside className={styles.FooterLegals}>
            <h4>Legals</h4>
            <div className={styles.FooterLegalsLinks}>
              {legals.map((legal) => (
                <Link href={legal.link} key={legal.link}>
                  <a>{legal.name}</a>
                </Link>
              ))}
            </div>
          </aside>
          <aside className={styles.FooterContact}>
            <h4>Contact Us</h4>
            <div className={styles.FooterContactLinks}>
              {contacts.map((contact) => (
                <Link href={contact.name} key={contact.name}>
                  <a>
                    {contact.icon}
                    {contact.name}
                  </a>
                </Link>
              ))}
            </div>
          </aside>
        </section>
      </section>
      <section className={styles.FooterBottom}>
        <p>
          &copy; {new Date().getFullYear()} Hackcity, Inc. All Rights Reserved.
        </p>
      </section>
    </footer>
  );
};

export default FooterComponent;

let socials = [
  {
    link: "https://www.linkedin.com/company/hackcity-tech",
    icon: <AiOutlineLinkedin />,
  },
  {
    link: "https://www.facebook.com/groups/hackcity.tech",
    icon: <FaFacebook />,
  },
  { link: "https://www.instagram.com/p/CnOyHETMLYH", icon: <SiInstagram /> },
  { link: "https://twitter.com/hackcity_tech", icon: <AiOutlineTwitter /> },
  { link: "https://github.com/hackcitydev", icon: <AiOutlineGithub /> },
];
let legals = [
  { name: "Privacy Policy", link: "" },
  { name: "Terms & Conditions", link: "" },
  { name: "Licensing Agreement", link: "" },
  { name: "Partnership Terms", link: "" },
];
let contacts = [
  { name: "info@hackcity.tech", icon: <AiOutlineMail /> },
  { name: "+234906333385", icon: <BsTelephone /> },
  {
    name: (
      <span>
        12000 Fairhill Rd <br></br>Cleveland, OH <br></br>44120-1035
      </span>
    ),
    icon: <HiOutlineLocationMarker />,
  },
];

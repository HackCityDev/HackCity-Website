import React, { useState, useRef, useEffect } from "react";
import styles from "./Layout.module.css";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Logo from "../../assets/Logo";
import useMQ from "../../hooks/useMQ";
import Hamburger from "../../assets/Hamburger";
import Sidebar from "./Sidebar";
import Link from "next/link";

function Navbar() {
  const isMobile = useMQ("(max-width: 700px)");
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  console.log(showDropdown);

  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      try {
        if (!menuRef.current?.contains(e.target)) {
          setShowDropdown(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <nav className={styles.Navbar}>
      <div className={styles.navContainer}>
        <Link href="/">
          <a className={styles.logoContainer}>
            <div className={styles.logo}>
              <span href="#" className={styles.logoSpan}>
                <Logo />
              </span>
              {!isMobile && <span>HackCity</span>}
            </div>
          </a>
        </Link>
        {!isMobile && (
          <div className={styles.internalLinks}>
            {Links.map((link) => (
              <div className={styles.link} key={link.name}>
                {link.dropdown ? (
                  <aside>
                    {showDropdown ? (
                      <div onClick={() => setShowDropdown(false)}>
                        <div>{link.name}</div>
                        <span>
                          <FiChevronUp />
                        </span>
                      </div>
                    ) : (
                      <div onClick={() => setShowDropdown(true)}>
                        {" "}
                        <div>{link.name}</div>
                        <span>
                          <FiChevronDown />
                        </span>
                      </div>
                    )}
                    {showDropdown && (
                      <ul ref={menuRef}>
                        {link.dropdown.map((item) => (
                          <li onClick={() => setIsOpen(false)} key={item.name}>
                            <Link href={item.link}>
                              <a>{item.name}</a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </aside>
                ) : (
                  <aside onClick={() => setIsOpen(false)}>
                    <Link href={link.link}>
                      <a>{link.name}</a>
                    </Link>
                  </aside>
                )}
              </div>
            ))}
          </div>
        )}
        {isMobile ? (
          <span onClick={() => setIsOpen(true)} className={styles.hamburger}>
            <Hamburger />
          </span>
        ) : (
          <aside className={styles.hireUsButton}>
            <div className={styles.hireUs} onClick={() => setIsOpen(false)}>
              <Link href={"/hire-us"}>
                <a>
                  <span>Hire Developers</span>
                </a>
              </Link>
            </div>
          </aside>
        )}
        {isOpen && <Sidebar setIsOpen={setIsOpen} />}
      </div>
    </nav>
  );
}

export default Navbar;

export const Links = [
  {
    name: "Services",
    link: "",
    dropdown: [
      { link: "/services/mobile", name: "Mobile App Development" },
      { link: "/services/web", name: "Web App Development" },
      { link: "/services/blockchain", name: "Blockchain Development" },
      { link: "/services/gamedev", name: "Game Development" },
      { link: "/services/bot", name: "Bot App" },
      { link: "/services/pnp", name: "PnP Microservices" },
    ],
  },
  { name: "Career", link: "/join-us" },
  { name: "Contact Us", link: "/contact-us" },
];

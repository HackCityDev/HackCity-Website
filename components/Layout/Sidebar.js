import { useState, useRef, useEffect } from "react";
import { Links } from "./Navbar";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Close from "../../assets/Close";
import Logo from "../../assets/Logo";
import styles from "./Layout.module.css";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
export default function Sidebar({ setIsOpen }) {
  const [expand, setExpand] = useState(false);
  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      try {
        if (!menuRef.current?.contains(e.target)) {
          setIsOpen(false);
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
    <motion.div
      initial={{ x: 100, opacity: 0.5 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 1 }}
      transition={{ duration: 1 }}
      className={styles.Sidebar}
      ref={menuRef}>
      <div className={styles.sidebarContainer}>
        <div className={styles.logoAndClose}>
          <div className={styles.logo}>
            <Logo />
            <aside className={styles.logoName}>
              <span>Hack City</span>
              <span>Tech Inc.</span>
            </aside>
          </div>
          <div className={styles.close} onClick={() => setIsOpen(false)}>
            <span>
              <Close />
            </span>
          </div>
        </div>
        <div className={styles.hr}>
          <hr />
        </div>
        <div className={styles.internalLinks}>
          {Links.map((link) => (
            <div className={styles.link} key={link.name}>
              {link.dropdown ? (
                <aside onClick={() => setExpand(!expand)}>
                  <div>
                    <div>{link.name}</div>
                    <span>{expand ? <FiChevronUp /> : <FiChevronDown />}</span>
                  </div>
                  {expand && (
                    <AnimatePresence>
                      <motion.ul
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 1 }}>
                        {link.dropdown.map((item) => (
                          <motion.li
                            onClick={() => setIsOpen(false)}
                            key={item.name}>
                            <Link href={item.link}>
                              <a>{item.name}</a>
                            </Link>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </AnimatePresence>
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
        <aside className={styles.hireUsButton}>
          <div className={styles.hireUs} onClick={() => setIsOpen(false)}>
            <Link href={"/hire-us"}>
              <a>
                <span>Hire Developers</span>
              </a>
            </Link>
          </div>
        </aside>
      </div>
    </motion.div>
  );
}

import { useState, useRef, useEffect } from "react";
import { Links } from "./Navbar";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Close from "../../assets/Close";
import Logo from "../../assets/Logo";
import styles from "./Layout.module.css";
import Link from "next/link";
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
    <div className={styles.Sidebar} ref={menuRef}>
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
                    <ul>
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
      </div>
    </div>
  );
}

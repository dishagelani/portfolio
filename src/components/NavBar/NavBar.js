import React from "react";
import { Link } from "react-scroll";
import styles from "./Navbar.module.css";




const Navbar = () => {
  return (
    <div className={styles.navbar} data-aos="fade-down">
    <ul className={styles.list}>
      <li>
        <Link to="landing" spy={true} smooth={true} offset={0} duration={500}>
          HOME
        </Link>
      </li>
      <li>
        <Link to="project" spy={true} smooth={true} offset={-30} duration={500}>
          PROJECTS
        </Link>
      </li>
      <li>
        <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
          CONTACT
        </Link>
      </li>
      <li>
        <a
          href="https://drive.google.com/file/d/1FkiNrvegiFSvxb9NqzfXqCY3HGTsalAk/view?usp=sharing"
          target="__blank"
        >
          RESUME
        </a>
      </li>
    </ul>
    </div>
  );
};



export default Navbar;

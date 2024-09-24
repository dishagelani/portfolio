import styles from "./Social.module.css";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Social = () => {
  return (
    <div className={styles.socials}>
      <ul data-aos="fade-up" className={styles.list}>
        <li>
          <a
            href="https://github.com/dishagelani"
            aria-label="Github"
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              className={styles.font}
              icon={faGithub}
              color="#DD0031"
            />
          </a>
        </li>
        <li>
          <a
            href="http://linkedin.com/in/disha-gelani-66b241172"
            aria-label="LinkedIn"
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              className={styles.font}
              icon={faLinkedin}
              color="#DD0031"
            />
          </a>
        </li>
       
      </ul>
    </div>
  );
};

export default Social;

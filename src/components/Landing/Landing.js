import styles from "./Landing.module.css";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import {
  faSass,
  faPython,
  faHtml5,
  faAws,
  faReact,
  faNode,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Landing = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div id="landing" className={styles.landing}>
      <div data-aos="fade-left" className={styles.left}>
        <div className={styles.cube}>
          <div className={styles.box + " " + styles.box1}>
            <FontAwesomeIcon icon={faNode} />
          </div>

          <div className={styles.box + " " + styles.box2}>
            <FontAwesomeIcon icon={faHtml5} />
          </div>

          <div className={styles.box + " " + styles.box3}>
            <FontAwesomeIcon icon={faSass} />            </div>

          <div className={styles.box + " " + styles.box4}>
            <FontAwesomeIcon icon={faReact} />
          </div>

          <div className={styles.box + " " + styles.box5}>
            <FontAwesomeIcon icon={faAws} />
          </div>

          <div className={styles.box + " " + styles.box6}>
            <FontAwesomeIcon icon={faPython} />
          </div>
        </div>
      </div>

      <div data-aos="fade-right" className={styles.right}>

        <h2
          data-aos="fade-in"
          data-aos-duration="2000"
          className={styles.sub}
        >
          Hi ! I'm <span
            className={styles.title}
          >
            Disha Gelani.
          </span>
        </h2>
        <p
          data-aos="fade-in"
          data-aos-duration="2000"
          className={styles.description}
        >
          I'm dedicated and result-oriented <span style={{ fontSize: '1.5em', fontWeight: '600', color: '#fbc34a' }}>Full Stack Developer</span> with a flair for crafting high-performance web applications and innovative solutions. Expert in Python, React.js, Node.js, and modern JavaScript frameworks, I thrive on turning complex client requirements into seamless, dynamic digital experiences.
        </p>
        <p
          data-aos="fade-in"
          data-aos-duration="2000"
          className={styles.description}
        >
          I’m not just a developer—I’m a problem-solver, always seeking opportunities to innovate and deliver exceptional experiences. Whether it’s mastering new technologies, or leading teams, I bring creativity and passion to everything I do. Not afraid to tackle new challenges, I take pride in delivering top-notch digital solutions.
        </p>
        <p
          data-aos="fade-in"
          data-aos-duration="2000"
          className={styles.description}
        >
          I am passionate about continuing to grow as a developer, constantly learning, and contributing to impactful projects that push boundaries.
        </p>
        <div className={styles.socials}>
          <div data-aos="fade-in" className={`${styles['social-icons']}`}>
            <div>
              <a
                href="https://github.com/dishagelani"
                aria-label="Github"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  className={styles.font}
                  icon={faGithub}
                  color="#DD0031"
                />
              </a>
            </div>
            <div>
              <a
                href="http://linkedin.com/in/disha-gelani-66b241172"
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  className={styles.font}
                  icon={faLinkedin}
                  color="#DD0031"
                />
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );

};

export default Landing;

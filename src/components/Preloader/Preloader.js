import { useState, useEffect } from "react";
import { gsap, Expo } from "gsap";
import styles from "./Preloader.module.css";

const Preloader = ({ setLoading }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const count = setInterval(() => {
      setCounter((prevCounter) =>
        prevCounter < 100
          ? prevCounter + 1
          : (clearInterval(count), setCounter(100), reveal())
      );
    }, 25);
  }, []);

  async function reveal() {
    const t1 = gsap.timeline();

    // Using the `styles` object to properly reference the CSS module class names
    await t1
      .to(`.${styles.follow}`, {
        width: "100%",
        ease: Expo.easeInOut,
        duration: 1.2,
        delay: 0.5,
      })
      .to(`.${styles["progress-bar"]}`, { opacity: 0, duration: 0.3 })  // Hide progress bar
      .to(`.${styles.follow}`, {
        height: "100%",
        ease: Expo.easeInOut,
        duration: 0.7,
      })
      .to(`.${styles.content}`, { width: "100%", ease: Expo.easeInOut, duration: 0.7 });

    if (!t1.isActive()) {
      setLoading(false);
    }
  }

  return (
    <div className={styles["app-container"]}>
      <div className={styles.loading}>
        <div className={styles.follow}></div>
        <div
          className={styles["progress-bar"]}  // You no longer need to conditionally add hide here
          id="progress-bar"
          style={{ width: counter + "%" }}
        ></div>
      </div>

      <div className={styles.content}></div>
    </div>
  );
};

export default Preloader;

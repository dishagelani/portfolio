import styles from "./Contact.module.css";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { config } from "../../config";
import ThankYou from "../UI/ThankYou";
import { AnimatePresence } from "framer-motion";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        config.SERVICE_ID,
        config.TEMPLATE_ID,
        formRef.current,
        config.USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
 
  return (
    <div id="contact" className={styles.contact}>
      <div className={styles.right}>
        <p data-aos="fade-up-right" className={styles.description}>
          <b>Interested in my work? </b> Feel free to reach out, as I'm always excited to contribute to amazing projects while growing together! </p>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            data-aos="fade-up-right"
            type="text"
            placeholder="Name"
            name="from_name"
          />
          <input
            data-aos="fade-up-right"
            type="text"
            placeholder="Subject"
            name="subject"
          />
          <input
            data-aos="fade-up-right"
            type="text"
            placeholder="Email"
            name="reply_to"
          />
          <textarea
            data-aos="fade-up-right"
            rows="5"
            placeholder="Message"
            name="message"
          />
          <button data-aos="fade-up-right">Submit</button>
        </form>
      </div>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {done && (
          <ThankYou
            onConfirm={() => {
              setDone(false);
            }}
          />
        )}
      </AnimatePresence>

     
    </div>
  );
};

export default Contact;

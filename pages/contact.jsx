import React from "react";
import styles from "../styles/Contact.module.css";

const contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>GET IN TOUCH</h1>
      <form className={styles.form} action="POST">
        <input type="text" placeholder="Username" className={styles.inputS} />
        <input type="text" placeholder="Phone" className={styles.inputS} />
        <input type="text" placeholder="Email" className={styles.inputL} />
        <input type="text" placeholder="Subject" className={styles.inputL} />
        <textarea
          name=""
          className={styles.textArea}
          placeholder="Message"
          id=""
          cols="5"
          rows="5"
        ></textarea>
        <button className={styles.button}>Submit</button>
      </form>
    </div>
  );
};

export default contact;

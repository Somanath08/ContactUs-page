import React from "react";
import styles from "./ContactFrom.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
function ContactFrom() {
  const onSubmit = (event) => {
    event.preventDefault();
    console.log("Name: ", event.target[0].value);
    console.log("Email: ", event.target[1].value);
    console.log("TextMsg: ", event.target[2].value);
  };
  return (
    <>
      <section className={`${styles.container}`}>
        <div className={styles.contact_from}>
          <div className={styles.top_btn}>
            <Button
              text="VIA SUPPORT CHAT"
              icon={<MdMessage fontSize="24px" />}
            ></Button>
            <Button
              text="VIA CALL"
              icon={<FaPhoneAlt fontSize="24px" />}
            ></Button>
          </div>
          <Button
            isOutline={true}
            text="VIA EMAIL FORM"
            icon={<IoIosMail fontSize="24px" />}
          ></Button>

          <form onSubmit={onSubmit}>
            <div className={styles.form_controller}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" />
            </div>

            <div className={styles.form_controller}>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" />
            </div>

            <div className={styles.form_controller}>
              <label htmlFor="text">Text</label>
              <textarea name="text" rows={6} />
            </div>
            <div style={{ display: "flex", justifyContent: "end" }}>
              <Button text="SUBMIT"></Button>
            </div>
          </form>
        </div>

        <div className={styles.contact_image}>
          <img src="../images/Service.png" alt="" />
        </div>
      </section>
    </>
  );
}

export default ContactFrom;

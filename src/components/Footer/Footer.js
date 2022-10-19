import React from "react";
import styles from "../Footer/Footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <ul className={styles.links}>
        <li>Instagram Link</li>
        <li>Facebook Link</li>
        <li>Email Link</li>
      </ul>
    </div>
  );
}

export default Footer;

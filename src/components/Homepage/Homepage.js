import React from "react";
import styles from "../Homepage/Homepage.module.css";

function Homepage() {
  return (
    <div className={styles.container}>
      <div className={styles.headline}>
        <h1 className={styles.header}>VEGAN BAKERY</h1>
        <p className={styles.text}>
          Owned by Queer POC, this cafe provides a place where all are welcome.
          Here you can work remotely, study with classmates, or hang out with
          friends.
          <br />
          <br />
          Located at 123 First Street, Vallejo, CA 94590
          <br />
          <br />
          Open 4am - 9pm daily
        </p>
      </div>
      <div className={styles.gallery}>
        <h2 className={styles.header}>GALLERY</h2>
        <p className={styles.text}>Images Here</p>
      </div>
    </div>
  );
}

export default Homepage;

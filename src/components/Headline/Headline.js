import React from "react";
import styles from "../Headline/Headline.module.css";

function Headline() {
  return (
    <div className={styles.container}>
      <div className={styles.headline}>
        <h1 className={styles.header}>VEGAN CAFE</h1>
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
    </div>
  );
}

export default Headline;

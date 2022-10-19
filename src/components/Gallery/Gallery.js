import React from "react";
import styles from "../Gallery/Gallery.module.css";

function Gallery() {
  return (
    <div className={styles.gallery}>
      <h2 className={styles.header}>GALLERY</h2>
      <p className={styles.text}>Images Here</p>
    </div>
  );
}

export default Gallery;

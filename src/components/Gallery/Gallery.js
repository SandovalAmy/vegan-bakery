import React from "react";
import styles from "../Gallery/Gallery.module.css";

function Gallery() {
  return (
    <div className={styles.gallery}>
      <h2 className={styles.title}>GALLERY</h2>
      <p className={styles.body}>Images Here</p>

      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.content}>
            <img
              className={styles.image}
              src="./images/girl-with-red-hat-UnSvjoojVO4-unsplash.jpg"
              alt="Cookies"
            ></img>
            <h2 className={styles.title}>Cookies</h2>
            <p className={styles.body}>
              Vegan cookies. Gluten-free cookies. Even oil-free cookies. Your
              choice.
            </p>
            <button className={styles.button}>Order Online</button>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.content}>
            <img
              className={styles.image}
              src="./images/girl-with-red-hat-UnSvjoojVO4-unsplash.jpg"
              alt="Cookies"
            ></img>
            <h2 className={styles.title}>Cookies</h2>
            <p className={styles.body}>
              Vegan cookies. Gluten-free cookies. Even oil-free cookies. Your
              choice.
            </p>
            <button className={styles.button}>Order Online</button>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.content}>
            <img
              className={styles.image}
              src="./images/girl-with-red-hat-UnSvjoojVO4-unsplash.jpg"
              alt="Cookies"
            ></img>
            <h2 className={styles.title}>Cookies</h2>
            <p className={styles.body}>
              Vegan cookies. Gluten-free cookies. Even oil-free cookies. Your
              choice.
            </p>
            <button className={styles.button}>Order Online</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;

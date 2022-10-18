import React from "react";
import styles from "../Navigation/Navigation.module.css";

function Navigation() {
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>NAV LOGO</div>
      <ul className={styles.links}>
        <li>About Us</li>
        <li>Our Products</li>
        <li>Where to Find Us</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
}

export default Navigation;

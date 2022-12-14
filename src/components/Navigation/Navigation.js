import React from "react";
import styles from "../Navigation/Navigation.module.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <Link to="/">NAV LOGO</Link>
      </div>
      <ul className={styles.links}>
        <li>
          <Link to="/About"> About Us </Link>
        </li>
        <li>
          <Link to="/Products">Our Products</Link>
        </li>
        <li>
          <Link to="/Location">Where to Find Us</Link>
        </li>
        <li>
          <Link to="/Contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

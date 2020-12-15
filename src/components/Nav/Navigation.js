import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Navigation.module.css";

// bootstrap
import { Container, Row, Col } from "react-bootstrap";

const Navigation = (props) => {
  return (
    <header className={styles.mainHeader}>
      <Container className={styles.cont}>
        <NavLink to="/" className={styles.logo} exact>
          F A G
        </NavLink>

        <NavLink
          className={styles.navItem}
          activeClassName={styles.active}
          to="/generate-faces-using-facial-features"
        >
          Generate Faces
        </NavLink>

        <NavLink
          className={styles.navItem}
          activeClassName={styles.active}
          to="/compare-faces"
        >
          Compare Faces
        </NavLink>

        <NavLink
          className={styles.navItem}
          activeClassName={styles.active}
          to="/extract-facial-features"
        >
          Extract Facial Features
        </NavLink>
      </Container>
    </header>
  );
};

export default Navigation;

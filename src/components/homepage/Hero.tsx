import clsx from "clsx";
import React from "react";
import Translate from "@docusaurus/Translate";

import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <header className={clsx("hero hero--primary", styles.banner)}>
      <div className="container">
        <h1 className={clsx("hero__title", styles.title)}>
          <Translate id="hero.greetings">Hi. I'm</Translate>
          <span className={styles.highlighted}> Jeusto</span>!
        </h1>
        <p className={clsx("hero__subtitle", styles.subtitle)}>
          <Translate id="hero.subtitle1">
            Full stack freelance developer based in France.
          </Translate>
          <br />
          <Translate id="hero.subtitle2">
            Currently a computer science student at the University of
            Strasbourg.
          </Translate>
        </p>
      </div>
    </header>
  );
};

import clsx from "clsx";
import React from "react";
import Translate from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import styles from "./Hero.module.css";

export const Hero = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx("hero hero--primary", styles.banner)}>
      <div className="container">
        <h1 className={clsx("hero__title", styles.title)}>
          <Translate id="hero.greetings">Hi, I'm</Translate>
          <span className={styles.highlighted}>
            {" "}
            {String(siteConfig.customFields.name)}
          </span>
          !
        </h1>
        <p className={clsx("hero__subtitle", styles.subtitle)}>
          <Translate id="hero.subtitle1">
            A passionate software engineer building tomorrow's solutions.
          </Translate>
        </p>
      </div>
    </header>
  );
};

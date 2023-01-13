import clsx from "clsx";
import React from "react";
import Image from "@theme/IdealImage";
import Translate from "@docusaurus/Translate";
import i18n from "@generated/i18n";

import LinkIcon from "./assets/icon-link.svg";
import GithubIcon from "./assets/icon-github.svg";
import styles from "./Project.module.css";
import type { Project } from "./ProjectList";

export const MainProjectCard = ({
  title,
  description,
  descriptionFr,
  image,
  repoLink,
  demoLink,
  tags,
}: Project) => {
  return (
    <div className={styles.projectCard}>
      <div className={clsx("card", styles.projectCard__inner)}>
        <Image img={require(`./assets/projects/${image}`)} />
        <div className="card__body">
          <h2>{title}</h2>
          <p>{i18n.currentLocale === "fr" ? descriptionFr : description}</p>
        </div>
        <div className={clsx("card__footer", styles.projectCard__footer)}>
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              className={clsx(
                "button button--primary button--outline",
                styles.project__button
              )}
            >
              <span className="button__icon">
                <LinkIcon />
              </span>
              <Translate id="demo-button.text">Website</Translate>
            </a>
          )}
          {repoLink && (
            <a
              href={repoLink}
              target="_blank"
              className={clsx(
                "button button--secondary button--outline",
                styles.project__button
              )}
            >
              <span className="button__icon">
                <GithubIcon />
              </span>
              <Translate id="repository-button.text">Repository</Translate>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

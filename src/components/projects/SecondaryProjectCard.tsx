import clsx from "clsx";
import React from "react";
import Image from "@theme/IdealImage";
import Translate from "@docusaurus/Translate";

import LinkIcon from "./assets/icon-link.svg";
import GithubIcon from "./assets/icon-github.svg";
import styles from "./Project.module.css";
import type { Project } from "./ProjectList";

export const SecondaryProjectCard = ({
  title,
  description,
  icon,
  repoLink,
  demoLink,
  tags,
}: Project) => {
  return (
    <div className={styles.projectCard}>
      <div className={clsx("card", styles.projectCard__inner)}>
        <div className="card__body">
          <div className={clsx("", styles.projectCard__bodySecondary)}>
            <Image
              width={50}
              height={50}
              img={require(`./assets/projects/${icon}`)}
              style={{
                width: "50px",
                height: "50px",
              }}
            />
            <h2
              style={{
                margin: "0 0 0 1rem",
              }}
            >
              {title}
            </h2>
          </div>
          <p>{description}</p>
        </div>
        <div className={clsx("card__footer", styles.projectCard__footer)}>
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              className="button button--primary button--outline"
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
              className="button button--secondary button--outline"
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

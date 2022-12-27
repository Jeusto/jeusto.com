import clsx from "clsx";
import React from "react";
import Image from "@theme/IdealImage";
import Translate from "@docusaurus/Translate";

import LinkIcon from "./assets/icon-link.svg";
import GithubIcon from "./assets/icon-github.svg";
import styles from "./Project.module.css";

export const Project = ({
  title,
  description,
  descriptionFr,
  image,
  repoLink,
  demoLink,
  tags,
  isSecondary,
}) => {
  return (
    <div className={clsx("col col--6", styles.cardContainer)}>
      <div className={clsx("card", styles.card)}>
        <div className={clsx("card__image", styles.image)}>
          <Image img={image} alt={"project image"} title={title} />
        </div>
        <div className="card__body">
          <h2>{title}</h2>
          <p>
            {document.documentElement.lang === "fr"
              ? descriptionFr
              : description}
          </p>
        </div>
        <div className="card__footer">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              className="button button--primary button--outline"
              style={{
                marginRight: "1rem",
              }}
            >
              <span className="button__icon">
                <LinkIcon />
              </span>
              Website
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
              <Translate id="repository-button.text" className="text">
                Repository
              </Translate>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

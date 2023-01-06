import clsx from "clsx";
import React from "react";
import Image from "@theme/IdealImage";
import Translate from "@docusaurus/Translate";

import LinkIcon from "./assets/icon-link.svg";
import GithubIcon from "./assets/icon-github.svg";
import styles from "./Project.module.css";

export const SecondaryProjectCard = ({
  title,
  description,
  icon,
  repoLink,
  demoLink,
  tags,
}) => {
  return (
    <div className={clsx("col col--6", styles.cardContainer)}>
      <div className={clsx("card", styles.card)}>
        <div className="card__body">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
              margin: "0 0 1rem 0",
            }}
          >
            <Image width={"50rem"} img={require(`./assets/projects/${icon}`)} />
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
              <Translate id="demo-button.text" className="text">
                Website
              </Translate>
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

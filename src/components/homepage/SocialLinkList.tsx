import clsx from "clsx";
import React from "react";
import Translate from "@docusaurus/Translate";
import { IconContext } from "react-icons";

import styles from "./SocialLinks.module.css";

type SocialLink = {
  name: string;
  url: string;
  icon: React.ReactNode;
};

type SocialLinkListProps = {
  links: SocialLink[];
};

const SocialLink = ({ name, url, icon }: SocialLink) => {
  return (
    <div className={clsx("col", styles.col)} key={name}>
      <a
        href={url}
        target="_blank"
        className={clsx("button button--outline button--primary", styles.btn)}
      >
        <IconContext.Provider value={{ size: "1.5rem" }}>
          <span className={styles.btnIcon}>{icon}</span>
        </IconContext.Provider>
        <span className={styles.btnText}>{name}</span>
      </a>
    </div>
  );
};

export const SocialLinkList = ({ links }: SocialLinkListProps) => {
  return (
    <div className={styles.socialContainer}>
      <h2>
        <Translate id="links.heading">A few links</Translate>
      </h2>
      <div className={clsx("row", styles.socialLinks)}>
        {links.map((link) => (
          <SocialLink {...link} key={link.name} />
        ))}
      </div>
    </div>
  );
};

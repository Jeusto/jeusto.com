import React from "react";
import clsx from "clsx";
import Image from "@theme/IdealImage";
import Translate from "@docusaurus/Translate";

import styles from "./AboutMe.module.css";

type AboutMeProps = {
  avatar: any;
  descriptionLines: string[];
};

export const AboutMe = ({ avatar, descriptionLines }: AboutMeProps) => {
  return (
    <div className="margin-top--lg">
      <h2>
        <Translate id="aboutme.heading">About me</Translate>
      </h2>
      <div className="row">
        <div className="col col--7">
          {descriptionLines &&
            descriptionLines.map((d, i) => <p key={i}>{d}</p>)}
        </div>
        <div className={clsx("col col--4", styles.avatarContainer)}>
          <div className={styles.avatar}>
            <Image img={avatar} alt="Arhun Saday picture" />
          </div>
        </div>
      </div>
    </div>
  );
};

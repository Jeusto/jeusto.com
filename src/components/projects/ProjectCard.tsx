import clsx from "clsx";
import React, { ReactElement } from "react";
import Image from "@theme/IdealImage";
import Translate from "@docusaurus/Translate";
import i18n from "@generated/i18n";

import { Badge } from "./Badge";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import styles from "./Project.module.css";
import type { Project } from "./ProjectList";

type ProjectCardButtonProps = {
  link: string;
  linkType: "website" | "repository";
  icon: ReactElement;
  text: string;
};

type ProjectCardMainProps = Pick<
  Project,
  "isSecondary" | "image" | "title" | "description" | "descriptionFr" | "tags"
>;

export const ProjectCard = ({
  title,
  description,
  descriptionFr,
  image,
  icon,
  repoLink,
  demoLink,
  isSecondary,
  tags,
}: Project) => {
  return (
    <div className={styles.projectCard}>
      <div className={clsx("card", styles.innerCard)}>
        <ProjectCardMain
          isSecondary={isSecondary}
          image={isSecondary ? icon : image}
          title={title}
          description={description}
          descriptionFr={descriptionFr}
          tags={tags}
        />
        <div className={clsx("card__footer", styles.footer)}>
          {demoLink && (
            <ProjectCardButton
              link={demoLink}
              linkType="website"
              icon={<FiExternalLink size="20" />}
              text="Website"
            />
          )}
          {repoLink && (
            <ProjectCardButton
              link={repoLink}
              linkType="repository"
              icon={<FiGithub size="20" />}
              text="Repository"
            />
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectCardTags = ({ tags }: { tags: string[] }) => {
  return (
    <div className={styles.tags}>
      {tags.map((tag) => (
        <Badge key={tag} text={tag} />
      ))}
    </div>
  );
};

const ProjectCardMain = ({
  isSecondary,
  image,
  title,
  description,
  descriptionFr,
  tags,
}: ProjectCardMainProps) => {
  return isSecondary ? (
    <div className="card__body">
      <div className={styles.secondaryBody}>
        <Image
          width={50}
          height={50}
          img={require(`./assets/projects/${image}`)}
          className={styles.secondaryImage}
        />
        <h2 className={styles.secondaryTitle}>{title}</h2>
      </div>
      <ProjectCardTags tags={tags} />
      <p>{description}</p>
    </div>
  ) : (
    <>
      <Image class={styles.image} img={require(`./assets/projects/${image}`)} />
      <div className="card__body">
        <h2>{title}</h2>
        <ProjectCardTags tags={tags} />
        <p>{i18n.currentLocale === "fr" ? descriptionFr : description}</p>
      </div>
    </>
  );
};

const ProjectCardButton = ({
  link,
  icon,
  text,
  linkType,
}: ProjectCardButtonProps) => {
  return (
    <a
      href={link}
      target="_blank"
      className={clsx(
        "button button--outline",
        linkType === "website" ? "button--primary" : "button--secondary",
        styles.button
      )}
    >
      <span className="button__icon">{icon}</span>
      <Translate
        id={
          linkType === "website" ? "demo-button.text" : "repository-button.text"
        }
      >
        {text}
      </Translate>
    </a>
  );
};

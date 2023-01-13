import React from "react";
import { translate } from "@docusaurus/Translate";

import { ProjectCard } from "./ProjectCard";

export type Project = {
  title: string;
  description: string;
  descriptionFr?: string;
  image: string;
  icon: string;
  repoLink?: string;
  demoLink?: string;
  tags: string[];
  isSecondary?: boolean;
};

export type ProjectListProps = {
  projects: Project[];
  maxCount?: number;
  showSecondary?: boolean;
  useH1Heading?: boolean;
  title: string;
  description: string;
};

const secondaryTitle = translate({
  message: "Other noteworthy projects",
  id: "projects-page.secondary-heading",
});

export const ProjectList = ({
  projects,
  maxCount,
  showSecondary,
  useH1Heading,
  title,
  description,
}: ProjectListProps) => {
  if (maxCount) {
    projects = projects.slice(0, maxCount);
  }
  let primaryProjects = projects.filter((project) => !project.isSecondary);
  let secondaryProjects = projects.filter((project) => project.isSecondary);

  return (
    <>
      {useH1Heading ? <h1>{title}</h1> : <h2>{title}</h2>}
      <p>{description}</p>
      <div className="row">
        {primaryProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
      {showSecondary && (
        <>
          <h1>{secondaryTitle}</h1>
          <div className="row">
            {secondaryProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

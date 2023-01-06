import React from "react";
import { translate } from "@docusaurus/Translate";

import { MainProjectCard } from "./MainProjectCard";
import { SecondaryProjectCard } from "./SecondaryProjectCard";

const secondaryTitle = translate({
  message: "Other noteworthy projects",
  id: "projects-page.secondary-heading",
});

export const ProjectsList = ({
  projects,
  maxCount,
  showSecondary,
  useH1Heading,
  title,
  description,
}) => {
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
          <MainProjectCard key={project.title} {...project} />
        ))}
      </div>

      {showSecondary && (
        <>
          <h1>{secondaryTitle}</h1>
          <div className="row">
            {secondaryProjects.map((project) => (
              <SecondaryProjectCard key={project.title} {...project} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

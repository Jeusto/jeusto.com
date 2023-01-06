import React from "react";
import Layout from "@theme/Layout";
import { translate } from "@docusaurus/Translate";

import { ProjectsList } from "../components/projects/ProjectsList";
import projects from "../data/projects.json";

const title = translate({
  message: "Personal projects",
  id: "projects-page.heading",
});

const projectsDescription = translate({
  id: "projects.description",
  message:
    "This is a list of projects that I have completed or am currently working on. Some of these projects were completed as part of my university coursework but most of them are personal projects that I have undertaken for my own learning or enjoyment.",
});

export default function Projects() {
  return (
    <Layout title="Projects">
      <main className="container margin-vert--lg">
        <ProjectsList
          projects={projects}
          maxCount={100}
          showSecondary={true}
          useH1Heading={true}
          title={title}
          description={projectsDescription}
        />
      </main>
    </Layout>
  );
}

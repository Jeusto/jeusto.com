import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { translate } from "@docusaurus/Translate";
import Link from "@docusaurus/Link";
import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

import { AboutMe } from "../components/homepage/AboutMe";
import { SocialLinkList } from "../components/homepage/SocialLinkList";
import { Hero } from "../components/homepage/Hero";
import { ProjectList } from "../components/projects/ProjectList";

import projects from "../data/projects.json";
import avatar from "./assets/index/avatar.png";

const links = [
  { name: "GitHub", url: "https://github.com/Jeusto", icon: <BsGithub /> },
  { name: "Twitter", url: "https://twitter.com/Jeustoo", icon: <BsTwitter /> },
  { name: "Email", url: "mailto:arhunsad@gmail.com", icon: <SiGmail /> },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/asaday/",
    icon: <BsLinkedin />,
  },
];

const descriptionLines = [
  translate({
    id: "home.description.line1",
    message:
      "I've been close to a computer since an early age and been passionate about it ever since. I'm currently studying computer science at the University of Strasbourg in France. In addition to my studies I am also a freelance full stack developer.",
  }),
  translate({
    id: "home.description.line2",
    message:
      "I do programming in various languages and technologies including Typescript, React.js, Python and much more. I'm passionate about software development, problem solving and I especially love creating all sorts of delightful products, interfaces, and interactions.",
  }),
  translate({
    id: "home.description.line3",
    message:
      "If you're interested, you can take a look at some of my projects or read my blog. If you have a question, or want to collaborate, feel free to email me or contact me through one of the links below.",
  }),
];

const projectsTitle = translate({
  message: "A selection of personal projects",
  id: "home.projects.heading",
});

const projectsDescription = translate({
  message:
    "This is a list of projects that I have completed or am currently working on. Some of these projects were completed as part of my university coursework but most of them are personal projects that I have undertaken for my own learning or enjoyment. You can find the full list of projects on the 'Projects' page of this website.",
});

const projectsButtonText = translate({
  message: "View all projects",
  id: "home.projects.view-all",
});

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title="Home" description={siteConfig.tagline}>
      <Hero />
      <main
        style={{
          paddingBottom: "2rem",
        }}
      >
        <div className="container padding-vert">
          <AboutMe avatar={avatar} descriptionLines={descriptionLines} />
          <SocialLinkList links={links} />
          <ProjectList
            projects={projects}
            maxCount={6}
            showSecondary={false}
            useH1Heading={false}
            title={projectsTitle}
            description={projectsDescription}
          />
          <div className="col text--right">
            <b>
              <Link to="/projects">{projectsButtonText}</Link>{" "}
            </b>
          </div>
        </div>
      </main>
    </Layout>
  );
}

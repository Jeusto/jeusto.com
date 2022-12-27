import React from "react";
import Layout from "@theme/Layout";

import { Project } from "../components/projects/Project";

const assetsDir = "./assets/projects";

const title = translate({
  message: "Projects",
  id: "projects-page.heading",
});

const description = translate({
  message: "Here's some projects I've built.",
  id: "projects-page.description",
});

const projects = [
  {
    image: require(`${assetsDir}/warmup.png`),
    icon: "https://i.imgur.com/q3PDo4X.jpeg",
    title: "Warm Up",
    description:
      "An extension for the code editor Vscode to practice and improve your typing speed right inside your editor. Downloaded and regularly used by 4000+ developers.",
    repoLink: "https://github.com/Jeusto/vscode-typing-test",
    demoLink: "https://warmup.jeusto.com/",
    tags: ["Typescript", "Vscode extension"],
    isSecondary: false,
    descriptionFr:
      "Une extension pour l'éditeur de code Vscode qui permet de s'entraîner à améliorer sa vitesse de frappe directement dans l'éditeur. Téléchargé et utilisé régulièrement par 4000+ développeurs.",
  },
  {
    _id: {
      $oid: "612df42170a95a95c4f4caf8",
    },
    image: require(`${assetsDir}/1ptone.png`),
    icon: "https://i.imgur.com/xwcKtrs.png",
    title: "1pt.one",
    description:
      "A minimalistic website to shorten website URLs and keep track of the number of visits. There's also a documented and free to use API. More than 5000 visits per month for all the shortened URLs.",
    repoLink: "https://github.com/Jeusto/1pt.one",
    demoLink: "http://1pt.one/",
    tags: ["Python", "MongoDB", "Flask"],
    isSecondary: false,
    descriptionFr:
      "Un site minimaliste pour raccourcir des URLs de sites web et suivre le nombre de visites. Il y a également une API documentée et gratuit d'utilisation. Plus de 5000 visites par mois pour l'ensemble des liens raccourcis.",
  },
  {
    _id: {
      $oid: "61f82e8a5fe3f23e44fc2631",
    },
    image: require(`${assetsDir}/candle.jpg`),
    icon: "https://i.imgur.com/ozAdO8X.jpg",
    title: "Candle",
    description:
      'A crossplatform desktop application to download and read free books offered by "Project Gutenberg". You can also annotate, take notes, get the definition of a word, etc.',
    repoLink: "https://github.com/Jeusto/book-reader-java-project",
    demoLink: "",
    tags: ["Java", "Java swing"],
    isSecondary: false,
    descriptionFr:
      'Une application de bureau multi-plateformes qui permet de télécharger et lire des livres gratuits offert par "Project Gutenberg". Vous pouvez également annoter, prendre des notes, obtenir la définition d\'un mot, etc.',
  },
  {
    _id: {
      $oid: "60e4ab43d8ae072cecb1d2e3",
    },
    image: require(`${assetsDir}/triviaten.jpeg`),
    icon: "https://i.imgur.com/TV77Nup.jpeg",
    title: "Trivia ten",
    description:
      "A multiplayer quiz web application with rooms to play with your friends. Real-time games, with a choice of more than 20 categories of questions and over 4000 questions.",
    repoLink: "https://github.com/Jeusto/trivia-ten",
    demoLink: "http://triviaten.jeusto.com/",
    tags: ["Javascript", "Socket.io", "Express"],
    isSecondary: false,
    descriptionFr:
      "Une application web de quiz multijoueur avec des salons pour jouer avec ses amis. Parties en temps réel, avec un choix parmi plus de 20 catégories de questions et plus de 4000 questions.",
  },
  {
    _id: {
      $oid: "6147c6a5892888443a7e57cc",
    },
    image: require(`${assetsDir}/twittersopinion.jpeg`),
    icon: "https://i.imgur.com/Z2qIjKS.jpeg",
    title: "Twitter's opinion",
    description:
      "A tool to visualize the average sentiment of Twitter users about a specific subject using a natural language processing library.",
    repoLink: "https://github.com/Jeusto/twitter-opinion-frontend",
    demoLink: "https://twitteropinion.jeusto.com",
    tags: ["Python", "Next.js", "Flask", "Chakra UI"],
    isSecondary: false,
    descriptionFr:
      "Un outil pour visualiser le sentiment global des utilisateurs de Twitter à propos d’un sujet particulier grâce à une librairie d'intelligence artificelle.",
  },
  {
    _id: {
      $oid: "60e4abddd8ae072cecb1d2e6",
    },
    image: require(`${assetsDir}/dailywallpapers.jpeg`),
    icon: "https://i.imgur.com/9MoAHMt.jpeg",
    title: "Daily wallpapers",
    description:
      "A simple website to navigate through all the top wallpapers posted on Reddit every day.",
    repoLink: "https://github.com/Jeusto/daily-wallpapers",
    demoLink: "https://dailywallpapers.jeusto.com/",
    tags: ["React", "Styled components"],
    isSecondary: false,
    descriptionFr:
      "Un simple site web pour trier, parcourir et télécharger les meilleurs fonds d'écran postés sur le réseau social Reddit chaque jour.",
  },
];

export default function Projects() {
  return (
    <Layout title={title} description={description}>
      <main className="container margin-vert--lg">
        <h1>{title}</h1>
        <p>{description}</p>

        <div className="row">
          {projects.map((project) => (
            <Project key={project.title} {...project} />
          ))}
        </div>
      </main>
    </Layout>
  );
}

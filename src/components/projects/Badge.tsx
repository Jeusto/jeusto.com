import clsx from "clsx";
import React from "react";
import { IconContext } from "react-icons";
import {
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiFlask,
  SiPhp,
  SiPython,
  SiJava,
  SiSass,
  SiSqlite,
  SiReact,
  SiVercel,
  SiC,
  SiVisualstudiocode,
} from "react-icons/si";

import styles from "./Badge.module.css";

const knownTags = [
  { name: "NextJS", colorScheme: "gray", icon: <SiVercel /> },
  { name: "React", colorScheme: "teal", icon: <SiReact /> },
  { name: "Sass", colorScheme: "pink", icon: <SiSass /> },
  { name: "Php", colorScheme: "purple", icon: <SiPhp /> },
  { name: "Sqlite", colorScheme: "gray", icon: <SiSqlite /> },
  { name: "Typescript", colorScheme: "blue", icon: <SiTypescript /> },
  { name: "Javascript", colorScheme: "yellow", icon: <SiJavascript /> },
  { name: "Python", colorScheme: "yellow", icon: <SiPython /> },
  { name: "Java", colorScheme: "red", icon: <SiJava /> },
  { name: "MongoDB", colorScheme: "green", icon: <SiMongodb /> },
  { name: "Flask", colorScheme: "gray", icon: <SiFlask /> },
  { name: "C", colorScheme: "gray", icon: <SiC /> },
  {
    name: "Vscode extension",
    colorScheme: "gray",
    icon: <SiVisualstudiocode />,
  },
];

export const Badge = ({ text }: { text: string }) => {
  const tag = knownTags.find((tag) => tag.name === text);

  return (
    <span
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className={clsx(styles.badge, tag && styles[tag.name.toLowerCase()])}
    >
      {tag?.icon ? (
        <IconContext.Provider value={{ size: "0.9rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "0.5rem",
            }}
          >
            {tag?.icon}
          </div>
        </IconContext.Provider>
      ) : (
        ""
      )}
      {text}
    </span>
  );
};

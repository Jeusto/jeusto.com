import clsx from "clsx";
import React from "react";
import { IconContext } from "react-icons";
import { FaJava } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiFlask,
  SiPhp,
  SiPython,
  SiSass,
  SiSqlite,
  SiReact,
  SiVercel,
  SiC,
  SiVisualstudiocode,
  SiRust,
} from "react-icons/si";

import styles from "./Badge.module.css";

const knownTags = [
  { name: "NextJS", icon: <SiVercel /> },
  { name: "React", icon: <SiReact /> },
  { name: "Sass", icon: <SiSass /> },
  { name: "Php", icon: <SiPhp /> },
  { name: "Sqlite", icon: <SiSqlite /> },
  { name: "Typescript", icon: <SiTypescript /> },
  { name: "Javascript", icon: <SiJavascript /> },
  { name: "Python", icon: <SiPython /> },
  { name: "Java", icon: <FaJava /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Flask", icon: <SiFlask /> },
  { name: "C", icon: <SiC /> },
  { name: "Rust", icon: <SiRust /> },
  {
    name: "Vscode extension",

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

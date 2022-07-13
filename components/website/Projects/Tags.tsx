import { Tag, TagLeftIcon, TagLabel } from "@chakra-ui/react";
import {
  SiPhp,
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiFlask,
} from "react-icons/si";
import { FaReact, FaPython, FaSass, FaDatabase, FaJava } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { HiOutlineCode } from "react-icons/hi";

type TagsProps = {
  tags: string[];
};

export default function Tags({ tags }: TagsProps) {
  const tags_list = [
    {
      name: "Typescript",
      colorScheme: "blue",
      icon: SiTypescript,
    },
    {
      name: "Javascript",
      colorScheme: "yellow",
      icon: SiJavascript,
    },
    {
      name: "Next.js",
      colorScheme: "gray",
      icon: IoLogoVercel,
    },
    { name: "React", colorScheme: "teal", icon: FaReact },
    { name: "Python", colorScheme: "yellow", icon: FaPython },
    { name: "Sass", colorScheme: "pink", icon: FaSass },
    { name: "Php", colorScheme: "purple", icon: SiPhp },
    { name: "Java", colorScheme: "red", icon: FaJava },
    { name: "MongoDB", colorScheme: "green", icon: SiMongodb },
    { name: "Sqlite", colorScheme: "gray", icon: FaDatabase },
    { name: "Flask", colorScheme: "gray", icon: SiFlask },
  ];

  const getTag = (tag_name: string) => {
    let t = tags_list.find((t) => t.name === tag_name);

    if (t) {
      return t;
    }

    return (t = {
      name: tag_name,
      colorScheme: "gray",
      icon: HiOutlineCode,
    });
  };

  return (
    <>
      {tags.map((el) => {
        let t = getTag(el);
        return (
          <Tag
            fontFamily={["JetBrains Mono", "mono"]}
            key={el}
            borderRadius="md"
            colorScheme={t.colorScheme}
            boxShadow="xs"
          >
            <TagLeftIcon as={t.icon} />
            <TagLabel>{el}</TagLabel>
          </Tag>
        );
      })}
    </>
  );
}

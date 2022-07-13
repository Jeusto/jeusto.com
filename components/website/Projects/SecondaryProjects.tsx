import { Box, Heading, Flex, SimpleGrid, VStack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import MainProjectCard from "./MainProjectCard";
import SecondaryProjectCard from "./SecondaryProjectCard";
import SlideWhenVisible from "../../../hooks/SlideWhenVisible";
import useTranslation from "next-translate/useTranslation";
import { FiArrowRight } from "react-icons/fi";
import NextLink from "next/link";
import { useColorModeValue } from "@chakra-ui/react";

type ProjectsProps = {
  projects: object;
};

export default function SecondaryProjects({ projects }: ProjectsProps) {
  const { t, lang } = useTranslation("common");

  return (
    <Box id="projects">
      <VStack spacing="5" w="full" alignItems="stretch">
        {Object.values(projects)
          .filter((project) => project.isSecondary === true)
          .sort(function (a, b) {
            return a.order - b.order;
          })
          .map((project) => (
            <SecondaryProjectCard
              key={project.order}
              image={project.icon}
              title={project.title}
              description={
                lang === "fr" ? project.descriptionFr : project.description
              }
              repoLink={project.repoLink}
              demoLink={project.demoLink}
              tags={project.tags}
            ></SecondaryProjectCard>
          ))}
      </VStack>
    </Box>
  );
}

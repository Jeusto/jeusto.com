import { Box, Heading, Flex, SimpleGrid, VStack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import MainProjectCard from "./MainProjectCard";
import SecondaryProjectCard from "./SecondaryProjectCard";
import SlideWhenVisible from "../../hooks/SlideWhenVisible";
import useTranslation from "next-translate/useTranslation";
import { FiArrowRight } from "react-icons/fi";

type ProjectsProps = {
  projects: object;
};

export default function Projects({ projects }: ProjectsProps) {
  const { t, lang } = useTranslation("common");

  return (
    <Box id="projects" mt="16">
      <SlideWhenVisible threshold="0.11">
        <Heading className="gradient_heading" mb="5" as="h2" size="xl">
          {"Some things I've built"}
        </Heading>
      </SlideWhenVisible>
      <SimpleGrid
        className="projects_grid"
        columns={{ base: 1, lg: 2 }}
        spacing="8"
      >
        {Object.values(projects)
          .filter((project) => project.isSecondary === false)
          .sort(function (a, b) {
            return a.order - b.order;
          })
          .map((project) => (
            <MainProjectCard
              key={project.order}
              image={project.image}
              title={project.title}
              description={
                lang === "fr" ? project.descriptionFr : project.description
              }
              repoLink={project.repoLink}
              demoLink={project.demoLink}
              tags={project.tags}
            ></MainProjectCard>
          ))}
      </SimpleGrid>
      <SlideWhenVisible threshold="0.11">
        <Heading className="gradient_heading" mt="16" mb="5" as="h2" size="xl">
          {"Other noteworthy projects"}
        </Heading>
      </SlideWhenVisible>
      <VStack mb="10" spacing="5" w="full" alignItems="stretch">
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
        <SlideWhenVisible threshold="0.11">
          <Flex flexDir={"row-reverse"}>
            <Button variant="ghost" rightIcon={<FiArrowRight />}>
              View all projects
            </Button>
          </Flex>
        </SlideWhenVisible>
      </VStack>
    </Box>
  );
}

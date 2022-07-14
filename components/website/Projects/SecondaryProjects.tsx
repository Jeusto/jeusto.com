import { Box, VStack } from "@chakra-ui/layout";
import SecondaryProjectCard from "@/components/website/Projects/SecondaryProjectCard";
import useTranslation from "next-translate/useTranslation";
import { Project } from "@/utils/types";

export default function SecondaryProjects({
  projects,
}: {
  projects: Project[];
}) {
  const { lang } = useTranslation("common");

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

import MainProjects from "../components/website/Projects/MainProjects";
import SecondaryProjects from "../components/website/Projects/SecondaryProjects";
import { Flex } from "@chakra-ui/react";
import fsPromises from "fs/promises";
import path from "path";
import SectionTitle from "@/components/website/SectionTitle";
import useTranslation from "next-translate/useTranslation";

export default function AllProjects({ projects }) {
  const { t } = useTranslation("common");
  return (
    <>
      <Flex
        transition="background-color 200ms linear"
        direction="column"
        m="auto"
        pr="10"
        pl="10"
        maxW="1000px"
        mb="20"
        mt="-16"
      >
        <SectionTitle title={t("home_mainProjectsHeading")} />
        <MainProjects projects={projects} />
        <SectionTitle title={t("home_secondaryProjectsHeading")} />
        <SecondaryProjects projects={projects} />
      </Flex>
    </>
  );
}

export async function getStaticProps() {
  let filePath = path.resolve(process.cwd(), "data/projects.json");
  let projects = await fsPromises.readFile(filePath, "utf8");
  projects = JSON.parse(projects);

  return {
    props: {
      projects,
    },
  };
}

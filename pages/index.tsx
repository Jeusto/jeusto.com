import Hero from "../components/Hero/Hero";
import BlogSection from "../components/BlogSection/BlogSection";
import Projects from "../components/Projects/Projects";
import { Flex } from "@chakra-ui/react";
import fsPromises from "fs/promises";
import path from "path";

type IndexProps = {
  projects: object;
};

export default function Index({ projects }: IndexProps) {
  return (
    <>
      <Flex
        transition="background-color 200ms linear"
        alignItems="left"
        direction="column"
        m="auto"
        pr="10"
        pl="10"
        maxW="1000px"
      >
        <Hero />
        <BlogSection />
        <Projects projects={projects}></Projects>
      </Flex>
    </>
  );
}

export async function getStaticProps() {
  const filePath = path.resolve(process.cwd(), "data/projects.json");
  const projects = await fsPromises.readFile(filePath, "utf8");

  return {
    props: {
      projects: JSON.parse(projects),
    },
  };
}

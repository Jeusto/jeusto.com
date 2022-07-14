import Hero from "@/components/website/Hero/Hero";
import PostsList from "@/components/website/Posts/PostsList";
import MainProjects from "@/components/website/Projects/MainProjects";
import SecondaryProjects from "@/components/website/Projects/SecondaryProjects";
import ViewAllButton from "@/components/website/ViewAllButton";
import SectionTitle from "@/components/website/SectionTitle";
import { Flex } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import { getAllPosts, getAllProjects } from "@/utils/getData";
import { Project, Post } from "@/utils/types";

interface IndexProps {
  projects: Project[];
  posts: Post[];
}

export default function Index({ projects, posts }: IndexProps) {
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
      >
        <Hero />
        <SectionTitle title={t("home_blogHeading")} />{" "}
        <PostsList posts={posts} maxCount={2} />
        <ViewAllButton text={t("button_viewAllPosts")} url="/blog" />
        <SectionTitle title={t("home_mainProjectsHeading")} />
        <MainProjects projects={projects} />
        <SectionTitle title={t("home_secondaryProjectsHeading")} />
        <SecondaryProjects projects={projects} />
        <ViewAllButton text={t("button_viewAllProjects")} url="/projects" />
      </Flex>
    </>
  );
}

export async function getStaticProps() {
  const projects = await getAllProjects();
  const posts = await getAllPosts();

  return {
    props: {
      projects,
      posts,
    },
  };
}

import Hero from "../components/website/Hero/Hero";
import PostsList from "../components/website/BlogSection/PostsList";
import MainProjects from "../components/website/Projects/MainProjects";
import SecondaryProjects from "../components/website/Projects/SecondaryProjects";
import ViewAllButton from "@/components/website/ViewAllButton";
import SectionTitle from "@/components/website/SectionTitle";
import { Flex } from "@chakra-ui/react";
import fsPromises from "fs/promises";
import path from "path";
import { bundleMDX } from "mdx-bundler";
import fs from "fs";
import useTranslation from "next-translate/useTranslation";

type IndexProps = {
  projects: object;
  posts: object;
};

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
        <SectionTitle title={t("home_blogHeading")} />
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
  // Projects
  let filePath = path.resolve(process.cwd(), "data/projects.json");
  let projects = await fsPromises.readFile(filePath, "utf8");
  projects = JSON.parse(projects);

  // Posts
  const currentDirectory = process.cwd();
  const posts = fs.readdirSync(`${currentDirectory}/posts`);
  const postsMetadata: any[] = [];

  for (let post of posts) {
    const postPath = `${currentDirectory}/posts/${post}/${post}.mdx`;
    const markdown = await bundleMDX({ file: postPath });
    const { frontmatter } = markdown;

    const timestamp = new Date(frontmatter.published).valueOf();
    frontmatter.published = timestamp;

    postsMetadata.push(frontmatter);
  }

  const sortedPosts = postsMetadata.sort(
    (firstEl, secondEl) => secondEl.published - firstEl.published
  );

  return {
    props: {
      projects: projects,
      posts: sortedPosts,
    },
  };
}

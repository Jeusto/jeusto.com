import { bundleMDX } from "mdx-bundler";
import fs from "fs";
import readingTime from "reading-time";
import { Post, Project } from "@/utils/types";

const currentDirectory = process.cwd();

export async function getAllPosts(): Promise<Post[]> {
  const posts = fs.readdirSync(`${currentDirectory}/posts`);
  const postsMetadata: any[] = [];

  for (let post of posts) {
    const postPath = `${currentDirectory}/posts/${post}/${post}.mdx`;
    const markdown = await bundleMDX({ file: postPath });
    const { code, frontmatter } = markdown;

    frontmatter.published = new Date(frontmatter.published).valueOf();
    frontmatter.readingTime = readingTime(code).text;

    postsMetadata.push(frontmatter);
  }

  const sortedPosts = postsMetadata.sort(
    (firstEl, secondEl) => secondEl.published - firstEl.published
  );

  return sortedPosts;
}

export async function getAllProjects(): Promise<Project[]> {
  let projects = fs.readFileSync(
    `${currentDirectory}/data/projects.json`,
    "utf8"
  );
  projects = JSON.parse(projects);

  let sortedProjects = Object.keys(projects).map((key) => projects[key]);
  sortedProjects = sortedProjects.sort(
    (firstEl, secondEl) => secondEl.order - firstEl.order
  );

  return sortedProjects;
}

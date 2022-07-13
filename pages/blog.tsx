import {
  VStack,
  Flex,
  Box,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import SlideWhenVisible from "../hooks/SlideWhenVisible";
import PostsList from "@/components/website/BlogSection/PostsList";

import { bundleMDX } from "mdx-bundler";
import fs from "fs";

export default function Blog({ posts }) {
  return (
    <Flex
      transition="background-color 200ms linear"
      alignItems="left"
      direction="column"
      m="auto"
      pr="10"
      pl="10"
      maxW="1000px"
      mb="20"
    >
      <SlideWhenVisible threshold="0.11">
        <Heading
          color={useColorModeValue("teal.500", "teal.200")}
          as="h1"
          size="2xl"
        >
          Blog
        </Heading>
      </SlideWhenVisible>
      <SlideWhenVisible threshold="0.11">
        <Box w="90%">
          <Text mt="1rem">
            I oc­ca­sion­ally pen down my thoughts about tech­nol­ogy,
            pro­duc­tiv­ity, and de­sign.
          </Text>
        </Box>
      </SlideWhenVisible>
      <Box mt="10">
        <VStack spacing="5" w="full" alignItems="stretch">
          <PostsList posts={posts} maxCount={999} />
        </VStack>
      </Box>
    </Flex>
  );
}

export async function getStaticProps() {
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
      posts: sortedPosts,
    },
  };
}

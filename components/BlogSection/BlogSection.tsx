import { Box, Heading, Flex, SimpleGrid, VStack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import BlogPostCard from "./BlogPostCard";
import SlideWhenVisible from "../../hooks/SlideWhenVisible";
import useTranslation from "next-translate/useTranslation";
import { FiArrowRight } from "react-icons/fi";

export default function Projects() {
  const { t, lang } = useTranslation("common");

  return (
    <Box>
      <SlideWhenVisible threshold="0.11">
        <Heading className="gradient_heading" mt="16" mb="5" as="h2" size="xl">
          Latest blog posts
        </Heading>
      </SlideWhenVisible>
      <VStack spacing="5" w="full" alignItems="stretch">
        <SimpleGrid
          className="projects_grid"
          columns={{ base: 1, lg: 2 }}
          spacing="8"
        >
          <BlogPostCard></BlogPostCard>
          <BlogPostCard></BlogPostCard>
        </SimpleGrid>
        <SlideWhenVisible threshold="0.11">
          <Flex flexDir={"row-reverse"}>
            <Button variant="ghost" rightIcon={<FiArrowRight />}>
              View all posts
            </Button>
          </Flex>
        </SlideWhenVisible>
      </VStack>
    </Box>
  );
}

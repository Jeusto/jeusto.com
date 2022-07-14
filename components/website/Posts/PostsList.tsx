import { SimpleGrid, Box, VStack } from "@chakra-ui/layout";
import PostCard from "@/components/website/Posts/PostCard";
import { Post } from "@/utils/types";

export default function PostsList({
  posts,
  maxCount,
}: {
  posts: Post[];
  maxCount: number;
}) {
  return (
    <Box>
      <VStack spacing="5" w="full" alignItems="stretch">
        <SimpleGrid columns={{ base: 1, lg: 1 }} spacing="8">
          {posts.slice(0, maxCount).map((post: any) => (
            <PostCard key={post.slug} frontmatter={post} />
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
}

import { SimpleGrid, Box, VStack } from "@chakra-ui/layout";
import PostCard from "./PostCard";
import useTranslation from "next-translate/useTranslation";

export default function PostsList({ posts, maxCount }: any) {
  const { t, lang } = useTranslation("common");

  return (
    <Box>
      <VStack spacing="5" w="full" alignItems="stretch">
        <SimpleGrid columns={{ base: 1, lg: 1 }} spacing="8">
          {posts.slice(0, maxCount).map((post: any) => (
            <PostCard key={post.slug} metadata={post} />
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
}

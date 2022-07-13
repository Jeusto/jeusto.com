import Seo from "@/components/Seo";
import { Post } from "@/types/post";
import {
  Wrap,
  Flex,
  VStack,
  HStack,
  Image,
  Text,
  Heading,
  AspectRatio,
  Box,
} from "@chakra-ui/react";
import { FiClock, FiTag } from "react-icons/fi";
import SlideWhenVisible from "@/hooks/SlideWhenVisible";
import { createRef } from "react";
import ReadingProgress from "@/components/blog/ReadingProgress";
import { useColorModeValue } from "@chakra-ui/react";

interface BlogProps {
  children: React.ReactNode;
  metadata?: Post;
}

export default function BlogLayout({ children, metadata }: BlogProps) {
  const target = createRef() as React.MutableRefObject<HTMLInputElement>;
  const colorModeValue = useColorModeValue("teal.500", "teal.200");

  return (
    <>
      <>
        <Seo {...metadata} />
        {metadata && (
          <article ref={target}>
            <Flex
              transition="background-color 200ms linear"
              alignItems="left"
              direction="column"
              m="auto"
              pr="10"
              pl="10"
              maxW="1000px"
            >
              <SlideWhenVisible threshold="0.11">
                <VStack
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing="1.5"
                >
                  <Flex
                    w="100%"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Heading color={colorModeValue} as="h1" size="2xl">
                      {metadata.title}
                    </Heading>
                  </Flex>
                  <Wrap>
                    <HStack spacing="5">
                      <HStack>
                        <FiClock />
                        <Text>15 min read</Text>
                      </HStack>
                      <HStack>
                        <FiTag />
                        <Text>{metadata.category}</Text>
                      </HStack>
                    </HStack>
                  </Wrap>
                </VStack>
                <AspectRatio my="5" ratio={1920 / 1080}>
                  <Image
                    boxShadow="xs"
                    borderRadius="md"
                    src={`/images/posts/${metadata.slug}/thumbnail.png`}
                    alt=""
                  ></Image>
                </AspectRatio>
              </SlideWhenVisible>
              <Box as="main" className="post">
                {children}
              </Box>
            </Flex>
          </article>
        )}
      </>
      <ReadingProgress target={target} />
    </>
  );
}

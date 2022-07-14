import {
  VStack,
  Wrap,
  Flex,
  HStack,
  Box,
  Text,
  IconButton,
  Heading,
  Link,
  AspectRatio,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import SlideWhenVisible from "@/hooks/SlideWhenVisible";
import Tags from "@/components/website/Projects/Tags";
import Image from "next/image";

type CardProps = {
  image: string;
  title: string;
  description: string;
  repoLink: string;
  demoLink: string;
  tags: string[];
};

export default function MainProjectCard({
  image,
  title,
  description,
  repoLink,
  demoLink,
  tags,
}: CardProps) {
  return (
    <SlideWhenVisible threshold="0.11">
      <Flex
        bg={useColorModeValue("gray.50", "gray.850")}
        borderRadius="lg"
        overflow="hidden"
        flexDirection="column"
        height="100%"
        width="full"
        transition={"all 150ms ease-in-out"}
        p="5"
        borderWidth="1px"
        borderColor={useColorModeValue("gray.200", "gray.800")}
        _hover={{
          transform: "translateY(-5px)",
          boxShadow: "lg",
        }}
      >
        {image && (
          <AspectRatio ratio={1920 / 1080}>
            <Box boxShadow="xs" borderRadius="md">
              <Image
                layout="fill"
                objectFit={"cover"}
                src={`/images/projects/${image}`}
                alt={"Image for project called: " + title}
              ></Image>
            </Box>
          </AspectRatio>
        )}
        <VStack
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing="1.5"
          pt="3"
        >
          <Flex w="100%" justifyContent="space-between" alignItems="center">
            <Heading as="h3" size="lg">
              {title}
            </Heading>
            <HStack spacing="2">
              {demoLink && (
                <Link href={demoLink} isExternal tabIndex={-1}>
                  <IconButton
                    variant="ghost"
                    borderRadius="md"
                    aria-label="Project demo"
                    icon={<FiExternalLink size={"1.4em"} />}
                  />
                </Link>
              )}
              <Link href={repoLink} isExternal tabIndex={-1}>
                <IconButton
                  variant="ghost"
                  borderRadius="md"
                  aria-label="Project repo"
                  icon={<FiGithub size={"1.4em"} />}
                />
              </Link>
            </HStack>
          </Flex>
          <Wrap>
            <Tags tags={tags} />
          </Wrap>
          <Text>{description}</Text>
        </VStack>
      </Flex>
    </SlideWhenVisible>
  );
}

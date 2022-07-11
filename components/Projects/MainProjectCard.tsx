import {
  VStack,
  Wrap,
  Flex,
  HStack,
  Image,
  Text,
  IconButton,
  Heading,
  Link,
  AspectRatio,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import SlideWhenVisible from "../../hooks/SlideWhenVisible";
import Tags from "./Tags";

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
        bg={useColorModeValue("gray.50", "gray.800")}
        borderRadius="lg"
        overflow="hidden"
        flexDirection="column"
        height="100%"
        width="full"
        boxShadow="xs"
        transition={"all 150ms ease-in-out"}
        p="5"
        _hover={{
          transform: "translateY(-5px)",
          boxShadow: "lg",
        }}
      >
        {image && (
          <AspectRatio ratio={1920 / 1080}>
            <Image
              src={image}
              boxShadow="xs"
              borderRadius="md"
              alt={"Image for project called: " + title}
            ></Image>
          </AspectRatio>
        )}
        <VStack
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing="1.5"
          pt="5"
        >
          <Flex w="100%" justifyContent="space-between" alignItems="center">
            <Heading as="h3" size="lg">
              {title}
            </Heading>
            <HStack spacing="2">
              {demoLink && (
                <Link href={demoLink} isExternal>
                  <IconButton
                    variant="ghost2"
                    borderRadius="md"
                    aria-label="Project demo"
                    icon={<FiExternalLink size={"1.4rem"} />}
                  />
                </Link>
              )}
              <Link href={repoLink} isExternal>
                <IconButton
                  variant="ghost2"
                  borderRadius="md"
                  aria-label="Project repo"
                  icon={<FiGithub size={"1.4rem"} />}
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

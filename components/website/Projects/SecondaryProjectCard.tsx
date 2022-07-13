import {
  Box,
  AspectRatio,
  Wrap,
  VStack,
  HStack,
  Text,
  IconButton,
  Heading,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import SlideWhenVisible from "../../../hooks/SlideWhenVisible";
import Tags from "./Tags";
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
      <VStack
        className="project_card"
        flexDirection="column"
        alignItems="flex-start"
        bg={useColorModeValue("gray.50", "gray.850")}
        borderRadius="lg"
        p="3"
        borderWidth="1px"
        borderColor={useColorModeValue("gray.200", "gray.800")}
        transition={"all 150ms ease-in-out"}
        _hover={{
          transform: "translateY(-5px)",
          boxShadow: "lg",
        }}
      >
        <HStack spacing="3">
          {image && (
            <Box alignSelf={"flex-start"}>
              <Image
                width="75px"
                height="75px"
                objectFit={"cover"}
                src={`/images/projects/${image}`}
                alt={"Image for project called: " + title}
              ></Image>
            </Box>
          )}
          <VStack
            flexDir="column"
            alignItems={"flex-start"}
            justifyContent="flex-start"
          >
            <HStack spacing="2">
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
                      icon={<FiExternalLink size={"1.4rem"} />}
                    />
                  </Link>
                )}
                <Link href={repoLink} isExternal tabIndex={-1}>
                  <IconButton
                    variant="ghost"
                    borderRadius="md"
                    aria-label="Project repo"
                    icon={<FiGithub size={"1.4rem"} />}
                  />
                </Link>
              </HStack>
            </HStack>
            <Wrap pb="2">
              <Tags tags={tags} />
            </Wrap>
          </VStack>
        </HStack>
        <Text mt="1">{description}</Text>
      </VStack>
    </SlideWhenVisible>
  );
}

import {
  Wrap,
  Flex,
  VStack,
  HStack,
  Text,
  Heading,
  Button,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FiClock, FiTag } from "react-icons/fi";
import SlideWhenVisible from "@/hooks/SlideWhenVisible";
import useTranslation from "next-translate/useTranslation";

export default function PostCard({ frontmatter }: any) {
  const { t } = useTranslation("common");

  return (
    <SlideWhenVisible threshold="0.11">
      <Flex
        bg={useColorModeValue("gray.50", "gray.850")}
        borderRadius="lg"
        overflow="hidden"
        flexDirection="row"
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
        <VStack
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing="1.5"
          w="100%"
        >
          <Flex w="100%" justifyContent="space-between" alignItems="center">
            <Heading as="h3" size="lg">
              {frontmatter.title}
            </Heading>
          </Flex>
          <Wrap>
            <HStack>
              <FiClock />
              <Text>{frontmatter.readingTime}</Text>
            </HStack>
            <HStack>
              <FiTag />
              <Text>{frontmatter.category}</Text>
            </HStack>
          </Wrap>
          <NextLink href={`/blog/${frontmatter.slug}`} locale={false} passHref>
            <Link
              alignSelf={"flex-end"}
              href={`/blog/${frontmatter.slug}`}
              tabIndex={-1}
            >
              <Button variant="cardSolid">{t("button_readMore")}</Button>
            </Link>
          </NextLink>
        </VStack>
      </Flex>
    </SlideWhenVisible>
  );
}

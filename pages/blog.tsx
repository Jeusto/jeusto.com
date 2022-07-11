import { Box, Heading, Text } from "@chakra-ui/layout";
import SlideWhenVisible from "../hooks/SlideWhenVisible";
import useTranslation from "next-translate/useTranslation";
import { SlideFade } from "@chakra-ui/react";

export default function Blog() {
  const { t } = useTranslation("common");

  return (
    <SlideFade>
      <Box id="featured">
        <Heading as="h2" size="xl">
          Recent blog posts
        </Heading>
        <Text mt="1rem" fontSize="display3">
          {t("featured_text")}
        </Text>
      </Box>
    </SlideFade>
  );
}

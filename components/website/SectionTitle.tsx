import { Heading } from "@chakra-ui/layout";
import SlideWhenVisible from "@/hooks/SlideWhenVisible";
import { useColorModeValue } from "@chakra-ui/react";

export default function SectionTitle({ title }: { title: string }) {
  return (
    <SlideWhenVisible threshold="0.11">
      <Heading
        color={useColorModeValue("teal.500", "teal.200")}
        mt="16"
        mb="5"
        as="h2"
        size="xl"
      >
        {title}
      </Heading>
    </SlideWhenVisible>
  );
}

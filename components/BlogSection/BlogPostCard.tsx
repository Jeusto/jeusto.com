import {
  Wrap,
  Flex,
  VStack,
  HStack,
  Image,
  Text,
  Heading,
  Button,
  AspectRatio,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiClock, FiTag } from "react-icons/fi";
import SlideWhenVisible from "../../hooks/SlideWhenVisible";

export default function MainProjectCard({}) {
  let image =
    "https://i.picsum.photos/id/869/1920/1080.jpg?hmac=1UWCkJAEV3_lc_GRqEcUXsRqTEng_1stESqAcXDA9ns";

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
            <Image boxShadow="xs" borderRadius="md" src={image} alt=""></Image>
          </AspectRatio>
        )}
        <VStack
          mt="5"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing="1.5"
        >
          <Flex w="100%" justifyContent="space-between" alignItems="center">
            <Heading as="h3" size="lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
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
                <Text>react, webdev, html</Text>
              </HStack>
            </HStack>
          </Wrap>
          <Button alignSelf={"flex-end"}>Read more</Button>
        </VStack>
      </Flex>
    </SlideWhenVisible>
  );
}

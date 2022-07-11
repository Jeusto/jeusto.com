import { Heading, Center, Button, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import SlideWhenVisible from "../hooks/SlideWhenVisible";

export default function Custom404() {
  return (
    <Center height="95vh">
      <SlideWhenVisible threshold="0.11">
        <VStack>
          <Heading
            className="gradient_heading"
            w="100%"
            margin="auto"
            textAlign="center"
            as="h1"
          >
            404. Page not found.
          </Heading>
          <NextLink href="/" passHref>
            <Button>Go home</Button>
          </NextLink>
        </VStack>
      </SlideWhenVisible>
    </Center>
  );
}

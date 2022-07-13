import CodeBlock from "./CodeBlock";
import {
  Kbd,
  Heading,
  Text,
  Box,
  Alert,
  chakra,
  Divider,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Image,
  Center,
  Code,
  AspectRatio,
} from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";

const CustomImage = ({ src, alt, ...props }) => {
  return (
    <Center my="5">
      <Image boxShadow="xs" borderRadius="md" src={src} alt={alt} {...props} />;
    </Center>
  );
};

function colorMode(colorMode) {
  return colorMode === "dark" ? "teal.500" : "teal.200";
}

const mdxComponents = {
  h1: (props: any) => <Heading as="h1" size="xl" my={4} {...props} />,
  h2: (props: any) => <Heading as="h2" size="lg" my={4} {...props} />,
  h3: (props: any) => <Heading as="h3" size="md" my={4} {...props} />,
  h4: (props: any) => <Heading as="h4" size="sm" my={4} {...props} />,
  h5: (props: any) => <Heading as="h5" size="xs" my={4} {...props} />,
  h6: (props: any) => <Heading as="h6" size="xs" my={4} {...props} />,
  p: (props) => <Text as="p" {...props} />,
  strong: (props: any) => <Box as="strong" fontWeight="semibold" {...props} />,
  em: (props: any) => <Box as="em" fontStyle="italic" {...props} />,
  // mark: (props: any) => <Box as="kbd" fontFamily="monospace" {...props} />,
  // br: (props) => <Box height="500px" {...props} />,
  li: (props: any) => <ListItem {...props} />,
  ul: (props: any) => <UnorderedList {...props} />,
  ol: (props: any) => <OrderedList {...props} />,
  img: (props: any) => <CustomImage {...props} />,
  code: (props: any) => <Code {...props} />,
  pre: CodeBlock,
  blockquote: (props) => (
    <Alert
      mt="4"
      role="none"
      status="info"
      colorScheme="teal"
      variant="left-accent"
      as="blockquote"
      rounded="4px"
      my="1.5rem"
      {...props}
    />
  ),
};

export default mdxComponents;

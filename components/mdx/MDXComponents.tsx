import CodeBlock from "./CodeBlock";
import {
  Heading,
  Text,
  Box,
  ListItem,
  OrderedList,
  UnorderedList,
  Code,
  Link,
  useColorModeValue,
  Center,
  Image,
} from "@chakra-ui/react";
import { Table, THead, TData } from "@/components/mdx/Table";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
};

const InlineCode = (props) => (
  <Code
    bg={useColorModeValue("gray.200", "gray.800")}
    color={useColorModeValue("teal.600", "teal.200")}
    rounded="md"
    borderWidth="1px"
    maxH="80vh"
    overflow="auto"
    display="initial"
    borderColor={useColorModeValue("gray.200", "gray.800")}
    {...props}
  />
);

const Blockquote = (props) => {
  return (
    <Box
      as="blockquote"
      borderWidth="1px"
      borderColor={useColorModeValue("gray.200", "gray.800")}
      borderLeft="4px solid"
      borderLeftColor={useColorModeValue("teal.500", "teal.200")}
      bg={useColorModeValue("gray.50", "gray.850")}
      borderRadius="md"
      p="4"
      my="4"
      {...props}
    />
  );
};

const Embed = (props) => (
  <Box my={4} rounded="md" shadow="sm" overflow="hidden">
    <iframe {...props}></iframe>
  </Box>
);

const CustomImage = ({ src, alt, ...props }) => {
  return (
    <Center my="5">
      <Image borderRadius="md" src={src} alt={alt} {...props} />
    </Center>
  );
};

const mdxComponents = {
  h1: (props: any) => <Heading as="h1" size="xl" my={4} {...props} />,
  h2: (props: any) => <Heading as="h2" size="lg" my={4} {...props} />,
  h3: (props: any) => <Heading as="h3" size="md" my={4} {...props} />,
  h4: (props: any) => <Heading as="h4" size="sm" my={4} {...props} />,

  p: (props) => <Text as="p" {...props} />,
  a: (props: any) => <Link variant="blog" {...props} />,

  strong: (props: any) => <Box as="strong" fontWeight="semibold" {...props} />,
  em: (props: any) => <Box as="em" fontStyle="italic" {...props} />,

  table: Table,
  th: THead,
  td: TData,

  // mark: (props: any) => <Box as="kbd" fontFamily="monospace" {...props} />,
  // br: (props) => <Box height="500px" {...props} />,
  li: (props: any) => <ListItem {...props} />,
  ul: (props: any) => <UnorderedList {...props} />,
  ol: (props: any) => <OrderedList {...props} />,
  img: (props: any) => <CustomImage {...props} />,
  blockquote: (props: any) => <Blockquote {...props} />,
  Counter,

  pre: CodeBlock,
  code: InlineCode,
  Embed,
};

export default mdxComponents;

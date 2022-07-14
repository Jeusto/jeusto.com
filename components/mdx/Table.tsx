import { chakra, useColorModeValue } from "@chakra-ui/react";

export const Table = (props) => (
  <chakra.div
    borderWidth="1px"
    borderColor={useColorModeValue("gray.200", "gray.800")}
    borderRadius="md"
    overflowX="auto"
  >
    <chakra.table textAlign="left" width="full" {...props} />
  </chakra.div>
);

export const THead = (props) => (
  <chakra.th
    bg={useColorModeValue("gray.200", "gray.800")}
    fontWeight="semibold"
    p={2}
    fontSize="sm"
    {...props}
  />
);

export const TData = (props) => (
  <chakra.td
    p={2}
    borderTopWidth="1px"
    bg={useColorModeValue("gray.50", "gray.850")}
    borderColor={useColorModeValue("gray.200", "gray.800")}
    fontSize="sm"
    whiteSpace="normal"
    {...props}
  />
);

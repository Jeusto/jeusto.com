import { Box, useColorModeValue } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

export default function ReadingProgress({ target }) {
  const [readingProgress, setReadingProgress] = useState(0);

  const scrollListener = () => {
    if (!target.current) {
      return;
    }

    const element = target.current;
    const totalHeight =
      element.clientHeight - element.offsetTop - window.innerHeight;
    const windowScrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (windowScrollTop === 0) {
      return setReadingProgress(0);
    }

    if (windowScrollTop > totalHeight) {
      return setReadingProgress(100);
    }

    setReadingProgress((windowScrollTop / totalHeight) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  });

  return (
    <Box
      position="fixed"
      bg="teal.400"
      left={0}
      right={0}
      top={{ base: "auto", md: "16" }}
      bottom={{ base: "16", md: "auto" }}
      h="5px"
      transition="all 0.10s"
      transition-timing-function="spring(1 100 10 10)"
      mt="-5px"
      w={`${readingProgress}%`}
      zIndex={100}
      transform={{ base: "translateY(2px)", md: "translateY(2px)" }}
    ></Box>
  );
}

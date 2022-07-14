import { Flex, Button, Link } from "@chakra-ui/react";
import SlideWhenVisible from "@/hooks/SlideWhenVisible";
import { FiArrowRight } from "react-icons/fi";
import NextLink from "next/link";

interface ViewAllButtonProps {
  text: string;
  url: string;
}

export default function ViewAllButton({ text, url }: ViewAllButtonProps) {
  return (
    <SlideWhenVisible threshold="0.11">
      <NextLink href={url}>
        <Link href={url} tabIndex={-1}>
          <Flex mt="5" flexDir={"row-reverse"}>
            <Button variant="ghost" rightIcon={<FiArrowRight />}>
              {text}
            </Button>
          </Flex>
        </Link>
      </NextLink>
    </SlideWhenVisible>
  );
}

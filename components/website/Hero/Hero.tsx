import {
  Box,
  Heading,
  Text,
  Button,
  Link,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiYoutube, FiGithub, FiMail, FiLinkedin } from "react-icons/fi";
import SlideWhenVisible from "../../../hooks/SlideWhenVisible";
import useTranslation from "next-translate/useTranslation";

export default function Landing() {
  const { t } = useTranslation("common");

  return (
    <Box>
      <SlideWhenVisible threshold="0.11">
        <Heading
          color={useColorModeValue("teal.500", "teal.200")}
          as="h1"
          size="2xl"
        >
          {t("hero_name")}
        </Heading>
      </SlideWhenVisible>
      <SlideWhenVisible threshold="0.11">
        <Box mt="5">
          <Text>{t("hero_description")}</Text>
          <Text mt="1">{t("hero_description2")}</Text>
        </Box>
      </SlideWhenVisible>
      <SlideWhenVisible threshold="0.11">
        <HStack mt="3" ml="-5" flexWrap="wrap">
          <Link
            tabIndex={-1}
            m="1.5"
            href={"mailto:arhunsad@gmail.com"}
            isExternal
          >
            <Button variant="ghost" leftIcon={<FiMail size={"1.4rem"} />}>
              Email
            </Button>
          </Link>
          <Link
            tabIndex={-1}
            m="1.5"
            href={"https://github.com/Jeusto/"}
            isExternal
          >
            <Button variant="ghost" leftIcon={<FiGithub size={"1.4rem"} />}>
              Github
            </Button>
          </Link>
          <Link tabIndex={-1} m="1.5" href={t("hero_linkedinLink")} isExternal>
            <Button variant="ghost" leftIcon={<FiLinkedin size={"1.4rem"} />}>
              LinkedIn
            </Button>
          </Link>
          <Link
            tabIndex={-1}
            m="1.5"
            href="https://www.youtube.com/c/Jeusto"
            isExternal
          >
            <Button variant="ghost" leftIcon={<FiYoutube size={"1.4rem"} />}>
              Youtube
            </Button>
          </Link>
        </HStack>
      </SlideWhenVisible>
    </Box>
  );
}

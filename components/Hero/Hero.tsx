import {
  Box,
  Heading,
  Text,
  Button,
  Link,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiGithub, FiMail, FiLinkedin } from "react-icons/fi";
import SlideWhenVisible from "../../hooks/SlideWhenVisible";
import useTranslation from "next-translate/useTranslation";

export default function Landing() {
  const { t } = useTranslation("common");

  return (
    <Box>
      <SlideWhenVisible threshold="0.11">
        <Heading
          className={useColorModeValue(
            "gradient_heading",
            "gradient_heading_dark"
          )}
          as="h1"
          size="2xl"
        >
          {t("hero_name")}
          <br />
          {t("hero_role")}
        </Heading>
      </SlideWhenVisible>
      <SlideWhenVisible threshold="0.11">
        <Box w="90%">
          <Text mt="1rem">{t("about_text1")}</Text>
        </Box>
      </SlideWhenVisible>
      <SlideWhenVisible threshold="0.11">
        <HStack ml="-1.5" flexWrap="wrap">
          <Link m="1.5" href={"mailto:arhunsad@gmail.com"} isExternal>
            <Button variant="ghost" leftIcon={<FiMail size={"1.4rem"} />}>
              Email
            </Button>
          </Link>
          <Link m="1.5" href={"https://github.com/Jeusto/"} isExternal>
            <Button variant="ghost" leftIcon={<FiGithub size={"1.4rem"} />}>
              Github
            </Button>
          </Link>
          <Link m="1.5" href={t("hero_linkedinLink")} isExternal>
            <Button variant="ghost" leftIcon={<FiLinkedin size={"1.4rem"} />}>
              Linkedin
            </Button>
          </Link>
        </HStack>
      </SlideWhenVisible>
    </Box>
  );
}

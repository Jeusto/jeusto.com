import { Box, Tooltip } from "@chakra-ui/react";
import NextImage from "next/image";
import NextLink from "next/link";
import useTranslation from "next-translate/useTranslation";
import ukFlag from "/public/uk-flag.svg";
import frFlag from "/public/fr-flag.svg";

export default function CustomLink({ onClick }) {
  const { t, lang } = useTranslation("common");

  return (
    <Tooltip
      fontSize="md"
      label={
        lang === "en"
          ? "Switch the website to french"
          : "Passer le site en anglais"
      }
    >
      <NextLink href="/" locale={lang === "en" ? "fr" : "en"} passHref>
        <Box onClick={onClick} pt="1.5" cursor="pointer">
          <NextImage
            width="26"
            height="26"
            src={lang === "en" ? ukFlag : frFlag}
          ></NextImage>
        </Box>
      </NextLink>
    </Tooltip>
  );
}

import { Box, Tooltip } from "@chakra-ui/react";
import NextImage from "next/image";
import useTranslation from "next-translate/useTranslation";
import ukFlag from "/public/uk-flag.svg";
import frFlag from "/public/fr-flag.svg";

export default function CustomLink() {
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
      <Box pt="1.5" cursor="pointer">
        <NextImage
          layout="fixed"
          width="28"
          height="28"
          src={lang === "en" ? ukFlag : frFlag}
        ></NextImage>
      </Box>
    </Tooltip>
  );
}

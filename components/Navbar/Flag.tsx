import { Box, Tooltip } from "@chakra-ui/react";
import NextImage from "next/image";
import useTranslation from "next-translate/useTranslation";
import usFlag from "/public/us.svg";
import frFlag from "/public/fr.svg";

export default function CustomLink() {
  const { t, lang } = useTranslation("common");

  return (
    <Tooltip
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
          src={lang === "en" ? usFlag : frFlag}
        ></NextImage>
      </Box>
    </Tooltip>
  );
}

import { Box, Tooltip } from "@chakra-ui/react";
import NextImage from "next/image";
import NextLink from "next/link";
import useTranslation from "next-translate/useTranslation";
import ukFlag from "@/public/uk-flag.svg";
import frFlag from "@/public/fr-flag.svg";

export default function CustomLink({ onClick }) {
  const { lang } = useTranslation("common");

  return (
    <NextLink href="/" locale={lang === "en" ? "fr" : "en"} passHref>
      <Box cursor="pointer">
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
              alt="Flag image to switch the website language"
            ></NextImage>
          </Box>
        </Tooltip>
      </Box>
    </NextLink>
  );
}

import {
  Button,
  IconButton,
  Box,
  HStack,
  VStack,
  Link,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Icon,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import NextImage from "next/image";
import NextLink from "next/link";
import whiteLogo from "/public/white-logo.svg";
import darkLogo from "/public/dark-logo.svg";
import useMediaQuery from "../../hooks/useMediaQuery";
import useTranslation from "next-translate/useTranslation";
import Flag from "./Flag";
import { FiMoon, FiSun, FiVolume2 } from "react-icons/fi";

export default function Navbar() {
  const isLargerThan768 = useMediaQuery(768);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t, lang } = useTranslation("common");
  const { colorMode, toggleColorMode } = useColorMode();

  const MobileNavbar = () => (
    <>
      <Drawer isOpen={isOpen} placement="right" size="xs" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="background">
          <DrawerCloseButton variant="ghost" />
          <DrawerHeader mb="2rem"></DrawerHeader>
          <DrawerBody>
            <VStack spacing="0.75rem">
              <Link
                onClick={onClose}
                className="link link--about"
                href="#about"
              >
                <Button variant="underline" fontSize="6xl">
                  {t("navbar_about")}
                </Button>
              </Link>
              <Link
                onClick={onClose}
                className="link link--featured"
                href="/featured"
              >
                <Button variant="underline" fontSize="6xl">
                  {t("navbar_featured")}
                </Button>
              </Link>
              <Link
                onClick={onClose}
                className="link link--projects"
                href="/projects"
              >
                <Button variant="underline" fontSize="6xl">
                  {t("navbar_projects")}
                </Button>
              </Link>
              <NextLink href="/" locale={lang === "en" ? "fr" : "en"} passHref>
                <Box onClick={onClose} pt="0.3rem" cursor="pointer">
                  <Flag />
                </Box>
              </NextLink>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );

  return (
    <Box
      pos="fixed"
      w="100%"
      bg={useColorModeValue("gray.50", "gray.800")}
      zIndex={99999}
      boxShadow="sm"
      mb="10"
    >
      <VStack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        m="auto"
        maxW="1000px"
        px="10"
      >
        {!isLargerThan768 && (
          <>
            <NextLink href="/" locale={lang === "fr" ? "fr" : "en"} passHref>
              <Box pt="1.5" cursor="pointer">
                <NextImage
                  src={colorMode === "light" ? darkLogo : whiteLogo}
                  layout="fixed"
                  width="45"
                  height="45"
                  alt="jeusto logo"
                ></NextImage>
              </Box>
            </NextLink>
            <Icon
              as={AiOutlineMenu}
              cursor="pointer"
              w={7}
              h={7}
              onClick={onOpen}
            />
            <MobileNavbar />
          </>
        )}
        {isLargerThan768 && (
          <>
            <NextLink href="/" locale={lang === "fr" ? "fr" : "en"} passHref>
              <Box pt="1.5" cursor="pointer">
                <NextImage
                  layout="fixed"
                  width="45"
                  height="45"
                  alt="Jeusto logo"
                  src={colorMode === "light" ? darkLogo : whiteLogo}
                ></NextImage>
              </Box>
            </NextLink>
            <HStack>
              <NextLink href="/blog">
                <Button variant="ghost2">Blog</Button>
              </NextLink>
              <NextLink href="/projects">
                <Button variant="ghost2">{t("navbar_projects")}</Button>
              </NextLink>
              <NextLink href="/links">
                <Button variant="ghost2">Links</Button>
              </NextLink>
            </HStack>
            <HStack>
              <IconButton
                aria-label="Toggle audio"
                borderRadius="lg"
                variant="ghost2"
                icon={<FiVolume2 />}
              />
              <IconButton
                aria-label="Toggle dark mode"
                onClick={toggleColorMode}
                borderRadius="lg"
                variant="ghost2"
                icon={colorMode === "light" ? <FiMoon /> : <FiSun />}
              />
              <NextLink href="/" locale={lang === "en" ? "fr" : "en"} passHref>
                <Box cursor="pointer">
                  <Flag />
                </Box>
              </NextLink>
            </HStack>
          </>
        )}
      </VStack>
    </Box>
  );
}

import {
  IconButton,
  Box,
  HStack,
  VStack,
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
import NextImage from "next/image";
import NextLink from "next/link";
import whiteLogo from "/public/white-logo.svg";
import darkLogo from "/public/dark-logo.svg";
import useMediaQuery from "../../../hooks/useMediaQuery";
import useTranslation from "next-translate/useTranslation";
import Flag from "./Flag";
import { FiMoon, FiSun, FiMenu } from "react-icons/fi";
import NavLink from "./NavLink";
import useSound from "use-sound";

export default function Navbar() {
  const isLargerThan768 = useMediaQuery(768);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t, lang } = useTranslation("common");
  const { colorMode, toggleColorMode } = useColorMode();
  const [play] = useSound("/sounds/click.mp3", {
    volume: 0.1,
    sprite: {
      on: [0, 300],
      off: [500, 300],
    },
  });

  const MobileNavbar = () => (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent
          bg={useColorModeValue("gray.50", "gray.850")}
          zIndex={999}
        >
          <DrawerCloseButton />

          <DrawerBody mt="10">
            <VStack style={{ margin: 0 }}>
              <NavLink onClick={onClose} href="/" name={t("navbar_home")} />
              <NavLink onClick={onClose} href="/blog" name={t("navbar_blog")} />
              <NavLink
                onClick={onClose}
                href="/projects"
                name={t("navbar_projects")}
              />
              <IconButton
                aria-label="Toggle dark mode"
                onClick={() => {
                  colorMode === "dark"
                    ? play({ id: "on" })
                    : play({ id: "off" });
                  toggleColorMode();
                  onClose();
                }}
                borderRadius="lg"
                variant="ghost"
                icon={colorMode === "light" ? <FiMoon /> : <FiSun />}
              />
              <Flag onClick={onClose} />
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
      bg={useColorModeValue("gray.50", "gray.850")}
      zIndex={99}
      boxShadow="sm"
      mb="10"
      borderBottomWidth="1px"
      borderColor={useColorModeValue("gray.200", "gray.800")}
    >
      <VStack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        m="auto"
        maxW="1000px"
        px="10"
        py="2"
      >
        <Box
          style={{ cursor: "pointer", display: "grid", placeItems: "center" }}
        >
          <NextLink href="/" locale={lang === "fr" ? "fr" : "en"} passHref>
            <NextImage
              layout="fixed"
              width="45"
              height="45"
              alt="Jeusto logo"
              src={colorMode === "light" ? darkLogo : whiteLogo}
            ></NextImage>
          </NextLink>
        </Box>
        {!isLargerThan768 && (
          <>
            <Icon
              as={FiMenu}
              cursor="pointer"
              w={7}
              h={7}
              onClick={() => {
                isOpen ? onClose() : onOpen();
              }}
            />
            <MobileNavbar />
          </>
        )}
        {isLargerThan768 && (
          <>
            <HStack style={{ margin: 0 }}>
              <NavLink onClick={onClose} href="/" name={t("navbar_home")} />
              <NavLink onClick={onClose} href="/blog" name={t("navbar_blog")} />
              <NavLink
                onClick={onClose}
                href="/projects"
                name={t("navbar_projects")}
              />
            </HStack>
            <HStack style={{ margin: 0 }}>
              <IconButton
                aria-label="Toggle dark mode"
                onClick={() => {
                  colorMode === "dark"
                    ? play({ id: "on" })
                    : play({ id: "off" });
                  toggleColorMode();
                }}
                borderRadius="lg"
                variant="ghost"
                icon={colorMode === "light" ? <FiMoon /> : <FiSun />}
              />
              <Flag onClick={onClose} />
            </HStack>
          </>
        )}
      </VStack>
    </Box>
  );
}

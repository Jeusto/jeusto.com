import {
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Heading,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { FiMessageCircle } from "react-icons/fi";

export default function Contact() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        colorScheme="blue"
        width="4rem"
        height="4rem"
        fontSize="2rem"
        borderRadius="999rem"
        aria-label="Contact me"
        position="fixed"
        bottom="1.5rem"
        right="1.5rem"
        icon={<FiMessageCircle />}
        onClick={onOpen}
      />
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        isCentered
        size="2xl"
        blockScrollOnMount={false}
      >
        <ModalOverlay />
        <ModalContent bg="background">
          <ModalHeader>
            <Heading className="gradient_text1" fontSize="display2">
              Contact me
            </Heading>
          </ModalHeader>
          <ModalCloseButton variant="ghost" />
          <ModalBody>
            <VStack>
              <FormControl id="name">
                <FormLabel fontSize="display4">Name</FormLabel>
                <Input fontSize="display4" type="name" />
              </FormControl>
              <FormControl id="email">
                <FormLabel fontSize="display4">Email address</FormLabel>
                <Input fontSize="display4" type="email" />
              </FormControl>
              <FormControl id="subject">
                <FormLabel fontSize="display4">Subject</FormLabel>
                <Input fontSize="display4" type="text" />
              </FormControl>
              <FormControl id="message">
                <FormLabel fontSize="display4">Message</FormLabel>
                <Textarea fontSize="display4" placeholder="" size="sm" />
              </FormControl>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button fontSize="display4" type="submit" variant="ghost">
              Send
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

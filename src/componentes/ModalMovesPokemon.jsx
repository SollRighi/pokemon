import { QuestionOutlineIcon } from "@chakra-ui/icons";
import {
  Button,
  Grid,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

export default function ModalMovesPokemon({ movimentos }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        width="150px"
        display="flex"
        flexDirection="column"
        gap="10px"
        padding="30px"
      >
        <p>Main Movements</p>
        <QuestionOutlineIcon />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Main Movements:</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <SimpleGrid columns={3} spacing={5}>
              {movimentos
                .slice(0, 24)
                .sort((a, b) => a.move.name.localeCompare(b.move.name))
                .map((movimento) => (
                  <Text textTransform={"capitalize"}>
                    {movimento.move.name}
                  </Text>
                ))}
            </SimpleGrid>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            {/* <Button variant="ghost">Secondary Action</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

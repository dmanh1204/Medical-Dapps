import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Grid, HStack, Text, VStack } from "@chakra-ui/layout";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { Image } from "@chakra-ui/react";
import { connectors } from "connectors";
import { useWallet } from "connectors/hooks";
import { useActiveWeb3React } from "hooks/useActiveWeb3React";
import React from "react";
import { Link } from "react-router-dom";
import NFTDetail from "pages/NFTDetail";
export const Layout = ({ children }) => {
  const { account } = useActiveWeb3React();
  const { connect } = useWallet();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg="gray.200">
      <Modal size="sm" isOpen={isOpen && !account} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Connect Wallet</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Grid templateColumns="repeat(2, 1fr)" gap="12">
              {connectors.map((c, idx) => (
                <VStack
                  key={idx}
                  cursor="pointer"
                  p="4"
                  borderRadius="md"
                  _hover={{
                    bg: "gray.300",
                  }}
                  onClick={() => connect(c.connector)}
                >
                  <Box h="12">{c.icon}</Box>
                  <Text as="b" textAlign="center">
                    {c.name}
                  </Text>
                </VStack>
              ))}
            </Grid>
          </ModalBody>
        </ModalContent>
      </Modal>

      <HStack
        h="91"
        w="100"
        px="8"
        py="4"
        align="center"
        flex="1"
        justify="space-around"
        spacing="4"
        background={"white"}
        boxShadow="2xl"
      >
        <Link to="/">
          <Image
            borderRadius={"full"}
            boxSize="80px"
            objectFit="cover"
            src="https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/275124623_357391922961271_5362003074745920968_n.jpg?stp=dst-jpg_p526x296&_nc_cat=109&ccb=1-5&_nc_sid=5cd70e&_nc_ohc=ixJDeVCng_UAX8yxT_o&tn=SrcJ8qC_4SPYqBKP&_nc_ht=scontent.fhan5-9.fna&oh=00_AT8lcsrqGtVyQDj9lIQZo20WHu16wa8OvwrbSBEwAq4X0Q&oe=622A4760"
            alt="Image"
          />
        </Link>
        <Text as="abbr" fontSize={"30px"} color={"#382e87"}>
          {"Lorem ipsum dolor, sit amet".toUpperCase()}
        </Text>
        {account ? (
          <Link to={`/${account}`}>
            <Button colorScheme="purple">{account}</Button>
          </Link>
        ) : (
          // <Button   colorScheme="purple">{account}</Button>
          <Button colorScheme="purple" onClick={onOpen}>
            Connect wallet
          </Button>
        )}
      </HStack>
      <Box
        minH="calc(100vh - 6em)"
        px="8"
        py="4"
        pos="relative"
        display={"flex"}
        justifyContent={"center"}
      >
        {children}
      </Box>
      <Box w="100%" h="365px" bgColor={"purple"}></Box>
    </Box>
  );
};

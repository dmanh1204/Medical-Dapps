import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  Stack,
  VStack,
  Text,
  Center,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { formatEther } from "ethers/lib/utils";
import { useActiveWeb3React } from "hooks/useActiveWeb3React";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  buyOrderNFT,
  cancelOrderNFT,
  getNftById,
  orderNFT,
} from "utils/callContract";

const NFTDetail = () => {
  const { nftId } = useParams();
  const { account, library } = useActiveWeb3React();

  const [nftInfo, setNftInfo] = useState();
  const [submitting, setSubmitting] = useState(false);
  const [price, setPrice] = useState("");

  useEffect(() => {
    (() => {
      if (!library) return;
      getNftById(library, nftId)
        .then((res) => res && setNftInfo(res))
        .catch(console.log);
    })();
  }, [library, nftId]);

  const handleOrderNFT = async () => {
    if (!library || !account) return alert("please connect wallet");
    if (!price || isNaN(price)) return alert("enter sell price");
    try {
      setSubmitting(true);
      await orderNFT(library, account, nftId, price);
      alert("order success");
      setSubmitting(false);
    } catch (error) {
      console.error(error);
      if (error.data?.message) {
        alert(error.data.message);
      }
      setSubmitting(false);
    }
  };

  const handleCancelOrderNFT = async () => {
    if (!library || !account) return alert("please connect wallet");
    try {
      setSubmitting(true);
      await cancelOrderNFT(library, account, nftId);
      alert("cancel order success");
      setSubmitting(false);
    } catch (error) {
      console.error(error);
      if (error.data?.message) {
        alert(error.data.message);
      }
      setSubmitting(false);
    }
  };

  const handleBuyOrderNFT = async (price) => {
    if (!library || !account) return alert("please connect wallet");
    if (!price) return;
    try {
      setSubmitting(true);
      await buyOrderNFT(library, account, nftId, price);
      alert("buy success");
      setSubmitting(false);
    } catch (error) {
      console.error(error);
      if (error.data?.message) {
        alert(error.data.message);
      }
      setSubmitting(false);
    }
  };

  return (
    <Grid
      bgColor={"white"}
      borderRadius={"10px"}
      templateColumns={"repeat(3,3fr)"}
      w="1190px"
      gap={2}
    >
      <Box w={"410px"} h={"265px"} border="1px" borderRadius={"10px"}>
        <Image
          src={nftInfo?.url}
          alt=""
          w={"410px"}
          h={"265px"}
          objectFit="fill"
          p={6}
        />
      </Box>
      <GridItem colSpan={2}>
        <Box fontSize={"38px"} fontWeight={400} color={"black"}>
          <Text>Lorem ipsum dolor</Text>
        </Box>
        <Box
          border="1px"
          borderRadius={"10px"}
          borderColor={"gray.500"}
          h="51px"
          w="256px"
          display={"flex"}
          justifyContent={"center"}
          color={"black"}
          fontSize={"24px"}
          fontWeight={700}
          p={8}
          mb={"10px"}
        >
          <Center>
            <Text>30.000.000 VND</Text>
          </Center>
        </Box>
        <HStack borderBottom={"1px solid gray"} pb={4}>
          <Button leftIcon={<EmailIcon />} colorScheme="teal" variant="solid">
            Email
          </Button>
          <Button leftIcon={<EmailIcon />} colorScheme="teal" variant="solid">
            Email
          </Button>
          <Button leftIcon={<EmailIcon />} colorScheme="teal" variant="solid">
            Email
          </Button>
        </HStack>
        <Box color={"black"}>
          <Table variant="simple" borderColor={"gray.200"}>
            <Thead border="1px solid black">
              <Tr bgColor={"lightblue"}>
                <Th color={"white"}>Thông tin chính</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody border="1px solid black">
              <Tr>
                <Td border="1px solid black">inches</Td>
                <Td>millimetres (mm)</Td>
              </Tr>
              <Tr bgColor={"gray.200"}>
                <Td border="1px solid black">feet</Td>
                <Td>centimetres (cm)</Td>
              </Tr>
              <Tr>
                <Td border="1px solid black">yards</Td>
                <Td>metres (m)</Td>
              </Tr>
            </Tbody>
            <Tfoot border="1px solid black">
              <Tr bgColor={"gray.200"}>
                <Th border="1px solid black">To convert</Th>
                <Th>into</Th>
              </Tr>
            </Tfoot>
          </Table>
        </Box>
        {/* <Grid color="red.500" templateColumns={"repeat(6,1fr)"} gap={4}>
          <Box>ID: </Box>
          <GridItem colSpan={5}>{nftId.toString()}</GridItem>
          <Box>Owner: </Box>
          <GridItem colSpan={5}>{nftInfo?.owner}</GridItem>
          <Box>Price: </Box>
          <GridItem colSpan={5}>
            {nftInfo?.price?.toString()
              ? `${formatEther(nftInfo?.price?.toString())} BNB`
              : "N/A"}
          </GridItem>

          <GridItem colSpan={6}>
            {account && account === nftInfo?.owner ? (
              typeof nftInfo?.isOrdering === "boolean" &&
              nftInfo.isOrdering === false ? (
                <HStack>
                  <InputGroup maxW={64} borderColor="black">
                    <Input
                      border={"1px solid"}
                      placeholder="sell price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                    <InputRightAddon
                      children="BNB"
                      bg={"gray.400"}
                      // color={"white"}
                    />
                  </InputGroup>
                  <Button
                    colorScheme={"orange"}
                    isLoading={submitting}
                    onClick={() => handleOrderNFT()}
                  >
                    Sell
                  </Button>
                </HStack>
              ) : (
                <Button
                  colorScheme={"yellow"}
                  isLoading={submitting}
                  onClick={() => handleCancelOrderNFT()}
                >
                  Cancel Sell
                </Button>
              )
            ) : (
              <Button
                colorScheme={"blue"}
                isLoading={submitting}
                onClick={() => handleBuyOrderNFT(nftInfo?.price)}
              >
                Buy
              </Button>
            )}
          </GridItem>
        </Grid> */}
      </GridItem>
    </Grid>
  );
};

export default NFTDetail;

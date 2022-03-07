import {
  Box,
  VStack,
  HStack,
  Text,
  Button,
  Grid,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { formatEther } from "ethers/lib/utils";
import { useActiveWeb3React } from "hooks/useActiveWeb3React";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getOrdering, mintNFT, getOwners } from "utils/callContract";

const Home = () => {
  const { account, library } = useActiveWeb3React();

  const [nft, setNFT] = useState();
  const [minting, setMinting] = useState(false);
  const [nftOrdering, setNftOrdering] = useState([]);
  const [owners, setOwners] = useState([]);

  useEffect(() => {
    (() => {
      if (!account || !library) return;
      getOwners(library, account).then(setOwners).catch(console.error);
    })();
  }, [account, library]);
  useEffect(() => {
    if (!library) return;
    getOrdering(library)
      .then((res) => res && setNftOrdering(res))
      .catch(console.error);
    console.log(nftOrdering);
  }, [library]);

  const handleMintNFT = async () => {
    if (!account || !library) return alert("please connect wallet");
    if (!nft) return alert("please choose a nft image");
    try {
      setMinting(true);
      await mintNFT(library, account, nft);
      alert("mint success");
      setMinting(false);
    } catch (error) {
      console.log(error);
      setMinting(false);
      if (error.data?.message) {
        alert(error.data.message);
      }
    }
  };

  const property = [
    {
      imageUrl: "https://bit.ly/2Z4KKcF",
      imageAlt: "Rear view of modern home with pool",
    },
    {
      imageUrl: "https://bit.ly/2Z4KKcF",
      imageAlt: "Rear view of modern home with pool",
    },
    {
      imageUrl: "https://bit.ly/2Z4KKcF",
      imageAlt: "Rear view of modern home with pool",
    },
    {
      imageUrl: "https://bit.ly/2Z4KKcF",
      imageAlt: "Rear view of modern home with pool",
    },
    {
      imageUrl: "https://bit.ly/2Z4KKcF",
      imageAlt: "Rear view of modern home with pool",
    },
    {
      imageUrl: "https://bit.ly/2Z4KKcF",
      imageAlt: "Rear view of modern home with pool",
    },
  ];

  return (
    <Box bg="white" h="290px" borderRadius={"8px"} m={"109"} p={"9px"}>
      <VStack w="full" h="43px" p={"10px"}>
        <HStack
          w="full"
          h="full"
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Menu closeOnSelect={false}>
            <MenuButton w={"200px"} flex as={Button} colorScheme="blue">
              <HStack
                w="full"
                display={"flex"}
                justifyContent={"space-between"}
              >
                <Text>MenuItem</Text>
                <HamburgerIcon boxSize={6} />
              </HStack>
            </MenuButton>
            <MenuList minWidth="240px">
              <MenuOptionGroup defaultValue="asc" title="Order" type="radio">
                <MenuItemOption value="asc">Ascending</MenuItemOption>
                <MenuItemOption value="desc">Descending</MenuItemOption>
              </MenuOptionGroup>
              <MenuDivider />
              <MenuOptionGroup title="Country" type="checkbox">
                <MenuItemOption value="email">Email</MenuItemOption>
                <MenuItemOption value="phone">Phone</MenuItemOption>
                <MenuItemOption value="country">Country</MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu>
          <Text color={"#003163"}>View all</Text>
        </HStack>
      </VStack>
      <HStack p={"10px"} display={"flex"} justifyContent={"space-evenly"}>
        {property.map((data) => (
          <Box
            maxW="173px"
            h="197px"
            p={"14px"}
            borderWidth="1px"
            borderColor={"gray.200"}
            borderRadius="4px"
            overflow="hidden"
          >
            <Image src={data.imageUrl} alt={data.imageAlt} mb="10px" />
            <Box color={"#327ab9"} fontSize={"14px"}>
              <Box w="full" mt="1">
                <Text>{data.imageAlt}</Text>
              </Box>
            </Box>
          </Box>
        ))}
      </HStack>
      {/* <Box textAlign={"center"} color={"brown"} pb={4}>
        <input type="file" onChange={(e) => setNFT(e.target.files[0])} />
        <Button
          colorScheme="purple"
          isLoading={minting}
          onClick={() => handleMintNFT()}
        >
          Mint
        </Button>
      </Box> */}
      {/* <Text color="red.500" fontSize="xl">
        Ordering
      </Text> */}
      {/* <Grid templateColumns={"repeat(3,1fr)"} gap={8}>
        {nftOrdering.map((e, idx) => (
          <Link to={`/nft/${e.id?.toString()}`} key={idx} cursor={"pointer"}>
            <Image border={"1px solid"} src={e.url} />
            <Box textAlign={"center"}>ID: {e.id?.toString()}</Box>
            <Box textAlign={"center"}>
              Price:{" "}
              {e.price?.toString() ? formatEther(e.price.toString()) : ""} BNB
            </Box>
          </Link>
        ))}
      </Grid>
      <hr />
      <Text color="red.500" fontSize="xl">
        Mint
      </Text>
      <Grid templateColumns={"repeat(3,1fr)"} gap={8}>
        {owners.map((e, idx) => (
          <Link to={`/nft/${e.id?.toString()}`} key={idx} cursor={"pointer"}>
            <Image border={"1px solid"} src={e.url} />
            <Box textAlign={"center"}>ID: {e.id?.toString()}</Box>
          </Link>
        ))}
      </Grid> */}
    </Box>
  );
};

export default Home;

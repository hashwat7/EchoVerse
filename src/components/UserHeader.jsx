import {
  Avatar,
  Box,
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BsInstagram } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";

const UserHeader = (props) => {
  const toast = useToast();
  const copyUrl = () => {
    const curUrl = window.location.href;
    navigator.clipboard.writeText(curUrl).then(() => {
      toast({
        title: "Copied",
        description: "To clipboard",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    });
  };
  return (
    <>
      <VStack gap={4} alignItems={"strart"}>
        <Flex justifyContent={"space-between"} w={"full"}>
          <Box>
            <Text fontSize={"2xl"} fontWeight={"bold"}>
              Mark Zukerburger
            </Text>
            <Flex gap={2} alignItems={"center"}>
              <Text fontSize={"sm"}>markzukerburger</Text>
              <Text
                fontSize={"xs"}
                bg={"gray.dark"}
                color={"gray.light"}
                p={1}
                borderRadius={"full"}
              >
                threads.net
              </Text>
            </Flex>
          </Box>
          <Box>
            <Avatar
              name="Mark Zukerburger"
              src="/zuck-avatar.png"
              size={"xl"}
            />
          </Box>
        </Flex>
        <Text>Co-founder, executive chairman and CEO of Meta Platforms.</Text>
        <Flex w={"full"} justifyContent={"space-between"}>
          <Flex gap={2} alignItems={"center"}>
            <Text color={"gray.ligth"}>3.2K followers</Text>
            <Box w={1} h={1} bg={"gray.light"} borderRadius={"full"}></Box>
            <Link color={"gray.light"}>instagram.com</Link>
          </Flex>
          <Flex>
            <Box className="icon-container">
              <BsInstagram size={24} cursor={"pointer"} />
            </Box>
            <Box className="icon-container">
              <Menu>
                <MenuButton>
                  <CgMoreO size={24} cursor={"pointer"} />
                </MenuButton>
                <Portal>
                  <MenuList bg={"gray.dark"}>
                    <MenuItem bg={"gray.dark"} onClick={copyUrl}>
                      Copy link
                    </MenuItem>
                  </MenuList>
                </Portal>
              </Menu>
            </Box>
          </Flex>
        </Flex>
        <Flex w={"full"}>
          <Flex
            flex={1}
            borderBottom={"1.5px solid white"}
            justifyContent={"center"}
            pb={3}
            cursor={"pointer"}
          >
            <Text fontWeight={"bold"}>Threads</Text>
          </Flex>
          <Flex
            flex={1}
            borderBottom={"1px solid gray"}
            color={"gray.light"}
            justifyContent={"center"}
            pb={3}
            cursor={"pointer"}
          >
            <Text>Replies</Text>
          </Flex>
        </Flex>
      </VStack>
    </>
  );
};

export default UserHeader;

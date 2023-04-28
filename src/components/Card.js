import React from "react";
// Chakra imports
import { Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";

function Card() {
  let boxBg = useColorModeValue("white !important", "#111c44 !important");
  let mainText = useColorModeValue("gray.800", "white");
  let secondaryText = useColorModeValue("gray.400", "gray.400");

  return (
    <Flex 
      borderRadius='20px'
      border="1px"
      bg={boxBg}
      p='20px'
      h='345px'
      w={{ base: "315px", md: "345px" }}
      alignItems='center'
      direction='column'>
      <Image
        src='https://i.ibb.co/xmP2pS6/Profile.png'
        maxW='100%'
        borderRadius='20px'
      />
      <Flex flexDirection='column' mb='30px'>
        <Image
          src='data:image/jpeg;base64,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'
          border='5px solid red'
          mx='auto'
          borderColor={boxBg}
          width='68px'
          height='68px'
          mt='-38px'
          borderRadius='50%'
        />
        <Text
          fontWeight='600'
          color={mainText}
          textAlign='center'
          fontSize='xl'>
          Shiva Tech
        </Text>
        <Text
          color={secondaryText}
          textAlign='center'
          fontSize='sm'
          fontWeight='500'>
          Product Designer
        </Text>
      </Flex>
      <Flex justify='space-between' w='100%' px='36px'>
        <Flex flexDirection='column'>
          <Text
            fontWeight='600'
            color={mainText}
            fontSize='xl'
            textAlign='center'>
            17
          </Text>
          <Text color={secondaryText} fontWeight='500'>
            Posts
          </Text>
        </Flex>
        <Flex flexDirection='column'>
          <Text
            fontWeight='600'
            color={mainText}
            fontSize='xl'
            textAlign='center'>
            9.7k
          </Text>
          <Text color={secondaryText} fontWeight='500'>
            Followers
          </Text>
        </Flex>
        <Flex flexDirection='column'>
          <Text
            fontWeight='600'
            fontSize='xl'
            color={mainText}
            textAlign='center'>
            274
          </Text>
          <Text color={secondaryText} fontWeight='500'>
            Following
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Card;
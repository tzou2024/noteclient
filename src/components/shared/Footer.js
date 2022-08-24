import { Flex, Text, Link } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <Flex
      w="full"
      bg="blackAlpha.50"
      minHeight="20vh"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      justifyContent="center"
    >
      <Text mb="3">
         By{' '}
        <Link href="https://github.com/tzou2024/noteserver" isExternal color="blue.500">
          Trevor Zou
        </Link>
      </Text>
      <Text opacity="0.5">Notes App</Text>
    </Flex>
  );
};

export default Footer;
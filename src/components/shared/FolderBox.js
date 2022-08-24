import React from 'react'
import {
    Flex,
    Spacer,
    Text,
    Wrap,
    WrapItem,
    Avatar,
    Box,
    useMediaQuery,
  } from '@chakra-ui/react';

const FolderBox = ({isLargerThanLG}) => {
  return (
    <Flex
        width={isLargerThanLG ? '250px' : '25%'}
        shadow="md"
        flexDirection="row"
        justifyContent={"space-around"}
        height={"3rem"}
        p="1"
        border="1px solid #C4DDFF"
        borderRadius="md"
        alignItems={"center"}
        m="2"
          >
        <Box m="1">
        <i fontSize="2xl" className="fa fa-2x">&#xf114;</i>
        </Box>

        <Text fontSize="sm" width="100%" fontWeight="bold" whiteSpace="nowrap" textOverflow={"ellipsis"} overflowX="hidden">Karl Brighton Is My Head My Head Head fefweffwefaeffwefwef fwefa</Text>

    </Flex>
  )
}

export default FolderBox

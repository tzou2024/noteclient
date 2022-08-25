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
import { useNavigate } from 'react-router-dom';

const FolderBox = ({isLargerThanLG, folder}) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/folders/${folder.id}`)
  }
  return (
    <Flex
        width={isLargerThanLG ? '15%' : '22%'}
        shadow="md"
        flexDirection="row"
        justifyContent={"space-around"}
        height={"3rem"}
        p="1"
        border="1px solid #C4DDFF"
        borderRadius="md"
        alignItems={"center"}
        m="2"
        _hover={{ bg: "gray.100"}}
        onClick={handleClick}
          >
        <Box m="1">
        <i fontSize="2xl" className="fa fa-lg">&#xf114;</i>
        </Box>

        <Text fontSize="xs" width="100%" fontWeight="bold" whiteSpace="nowrap" textOverflow={"ellipsis"} overflowX="hidden">{folder.name}
        </Text>

    </Flex>
  )
}

export default FolderBox

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

const DocumentRow = ({user, isLargerThanLG, note}) => {

const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric"}
    return new Date(dateString).toLocaleDateString(undefined, options)
    }

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/folders/${note.folder}/notes/${note.id}`)
    }

  return (
    <Flex py="2" borderBottom={"1px solid black"} alignContent="center" alignItems={"center"} width={ "full"}  _hover={{ bg: "gray.100"}} m="1" onClick={handleClick}>
    <Box px="1" width="10%" textAlign={"center"} verticalAlign={"center"}>
        <i className="fa fa-file-text fa-lg" aria-hidden="true" />
    </Box>
    <Box px="2" width="60%" textAlign={"left"} whiteSpace="nowrap" textOverflow={"ellipsis"} overflowX="hidden">
        {note.title}
    </Box>
    <Box px="2" width="25%" textAlign={"center"} >
        {formatDate(note.updated)}
    </Box>
    <Box px="2" width="5%" textAlign={"right"}>
        <i className="fa fa-ellipsis-v fa-lg" aria-hidden="true" />
    </Box>
    
    </Flex>
  )
}

export default DocumentRow

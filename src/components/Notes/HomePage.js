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
import FolderBox from '../shared/FolderBox';
import FolderIcon from '../shared/FolderIcon';

const HomePage = () => {

    const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');

    return (
        <>
            <Flex
          maxWidth={isLargerThanLG ? '1400px' : 'full'}
          minHeight="5vh"
        //   justifyContent="center"
        //   alignItems="center"
          py="1"
          px={isLargerThanLG ? '16' : '6'}
          flexDirection='row'
          flexWrap={"wrap"}
          justifyContent={"center"}
          alignContent={"flex-start"}
        >
          
          
        <FolderBox isLargerThanLG={isLargerThanLG}/>

        <FolderBox isLargerThanLG={isLargerThanLG}/>

        <FolderBox isLargerThanLG={isLargerThanLG}/>

        <FolderBox isLargerThanLG={isLargerThanLG}/>

        <FolderBox isLargerThanLG={isLargerThanLG}/>

        <FolderBox isLargerThanLG={isLargerThanLG}/>

        <FolderBox isLargerThanLG={isLargerThanLG}/>

        <FolderBox isLargerThanLG={isLargerThanLG}/>

        <FolderBox isLargerThanLG={isLargerThanLG}/>

        <FolderBox isLargerThanLG={isLargerThanLG}/>
        
          
        </Flex>
        <Box bgColor={"red"}  px={isLargerThanLG ? '16' : '6'}>
            <Text>Hey</Text>
        </Box>
        </>
        
      );
    };

export default HomePage

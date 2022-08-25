import React, {useState, useEffect} from 'react'
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
import FolderBox from './shared/FolderBox';
import FolderIcon from './shared/FolderIcon';
import DocumentRow from './shared/DocumentRow';
import Loading from './shared/Loading';
import NotePage from './Notes/NotePage';
import { getFolders } from '../api/folder';
import { getNotes } from '../api/notes';

const HomePage = ({user}) => {
    const [folders, setFolders] = useState([])
    const [notes, setNotes] = useState([])
    
    console.log("user:", user)
    console.log(folders)
    useEffect(() => {
      getFolders(user)
        .then(res => {
          // console.log("res: ", res.data.folders)
          setFolders(res.data.folders)
          
        })
        .catch(err => console.err)
    }, [])
    useEffect(() => {
      getNotes(user)
        .then(res => {
          // console.log("res: ", res.data.folders)
          setNotes(res.data.notes)
          
        })
        .catch(err => console.err)
    }, [])


    const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');

    const folderIndex = folders.map((folder, index) => {
      return (
        <FolderBox key={index} folder={folder} isLargerThanLG={isLargerThanLG}/>
      )
    })
    const noteIndex = notes.map((note, index) => {
      return (
        <DocumentRow key={index} note={note} isLargerThanLG={isLargerThanLG}/>
      )
    })
    console.log("folderindex: ",folderIndex)

    return (
        <Box minHeight="70vh" my="2">
         <Flex mx={isLargerThanLG ? '14' : '3.5rem'} fontSize="2xl"  borderBottom="2px solid black" my="2" alignItems={"baseline"}>
        <Text >
          Folders
        </Text>
        <Box px="3" textAlign={"center"} verticalAlign={"center"}>
            <i class="fa fa-plus-square-o" style={{"font-size": "15px"}} aria-hidden="true" />
        </Box>
        </Flex>
        
       
        <Flex
          maxWidth={isLargerThanLG ? '1400px' : 'full'}
          minHeight="5vh"
        //   justifyContent="center"
        //   alignItems="center"
          py="1"
          // px={isLargerThanLG ? '14' : '6'}
          flexDirection='row'
          flexWrap={"wrap"}
          justifyContent={"flex-start"}
          alignContent={"flex-start"}
          mx={isLargerThanLG ? '14' : '3.5rem'}
          // border="2px solid black"
          // borderRadius={"10px"}
        > 
        {folderIndex.length > 0 ? folderIndex : "Add some Folders!"}
         
           
        </Flex>
        <Text mx={isLargerThanLG ? '14' : '3.5rem'} fontSize="2xl" fontWeight={""} borderBottom="2px solid black" my="2">
          Documents
        </Text>

        <Flex
          maxWidth={"full"}
          minHeight="5vh"
          p="5"
          flexDirection='column'
          alignContent={"center"}
          alignItems={"center"}
          alignSelf={"center"}
          // bgColor="green"

          mx={isLargerThanLG ? '14' : '2.5rem'}
          

        >
        {noteIndex.length > 0 ? noteIndex : "Add some Notes"}
        

        </Flex>


        
      </Box>
        
      );
    };

export default HomePage

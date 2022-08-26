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
import NoteRow from './shared/NoteRow';
import Loading from './shared/Loading';
import NotePage from './Notes/NotePage';
import { getFolders } from '../api/folder';
import { getNotes } from '../api/notes';
import Moda from './Folders/Moda';
import FolderForm from './Folders/FolderForm';
import CreateNote from './Notes/CreateNote';

const HomePage = ({user, msgAlert}) => {
    const [folders, setFolders] = useState([])
    const [notes, setNotes] = useState([])
    const [updated, setUpdated ] = useState(false)
    
    const toggleUpdated = () => {
      setUpdated((prev) => {
        return !prev
      })
    }

    console.log("user:", user)
    // console.log(folders)
    useEffect(() => {
      getFolders(user)
        .then(res => {
          // console.log("res: ", res.data.folders)
          setFolders(res.data.folders)
          
        })
        .catch(err => console.err)
    }, [updated])

    useEffect(() => {
      getNotes(user)
        .then(res => {
          // console.log("res: ", res.data.folders)
          setNotes(res.data.notes)
          
        })
        .catch(err => console.err)
    }, [updated])


    const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');

    const folderIndex = folders.map((folder, index) => {
      return (
        <FolderBox key={index} folder={folder} isLargerThanLG={isLargerThanLG}/>
      )
    })
    const noteIndex = notes.map((note, index) => {
      return (
        <NoteRow key={index} note={note} isLargerThanLG={isLargerThanLG} user={user} toggleUpdated={toggleUpdated}/>
      )
    })
    // console.log("folderindex: ",folderIndex)
    // console.log("noteIndex: ", noteIndex)

    return (
        <Box minHeight="70vh" my="2">

        <Flex alignItems={"baseline"}>
        <Text ml={isLargerThanLG ? '14' : '3.5rem'} mr="2" fontSize="2xl" fontWeight={""} borderBottom="2px solid black" my="2">
          Folders
        </Text>
        <Moda user={user} type="create" toggleUpdated={toggleUpdated}/>
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
        <Flex alignItems={"baseline"}>
        <Text ml={isLargerThanLG ? '14' : '3.5rem'} mr="2" fontSize="2xl" fontWeight={""} borderBottom="2px solid black" my="2">
          Documents
        </Text>
        <CreateNote user={user} msgAlert={msgAlert} toggleUpdated={toggleUpdated} folder={null}/>
        </Flex>
        

        
        {noteIndex.length > 0 ? 
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

        {noteIndex} 
        </Flex>

        : 
        
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
        Add some Notes!
        </Flex>
        }
        

        
      
        
      </Box>
        
      );
    };

export default HomePage

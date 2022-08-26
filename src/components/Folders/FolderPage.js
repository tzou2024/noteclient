import React, {useState, useEffect} from 'react'
import {
    Flex,
    Button,
    Text,
    Wrap,
    WrapItem,
    Avatar,
    Box,
    useMediaQuery,
  } from '@chakra-ui/react';
import FolderBox from '../shared/FolderBox';
import NoteRow from '../shared/NoteRow';
import NotePage from '../Notes/NotePage';
import { useNavigate, useParams } from 'react-router-dom';
import { getFolder, deleteFolder } from '../../api/folder';
import Loading from '../shared/Loading';
import Moda from './Moda';
import CreateNote from '../Notes/CreateNote';
const FolderPage = ({user, msgAlert}) => {

    const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');
    const {folderID} = useParams()
    const [folder, setFolder ] = useState(null)
    const [notes, setNotes ] =useState([])
    const navigate = useNavigate()
    const [updated, setUpdated ] = useState(false)
    
    const toggleUpdated = () => {
      setUpdated((prev) => {
        return !prev
      })
    }

    useEffect(() => {
        getFolder(user, folderID )
            .then(res => {
                console.log(res.data.folder)
                setFolder(res.data.folder)
                setNotes(res.data.notes)
            })
            .catch(err => console.log(err))
    }, [updated])

    const noteIndex = notes.map((note, index) => {
      return (
        <NoteRow key={index} note={note} isLargerThanLG={isLargerThanLG} toggleUpdated={toggleUpdated} user={user}/>
      )
    })

    const handleDelete = () => {
      deleteFolder(user, folderID)
        .then(res => {
          navigate('/')
        })
        .catch(err => console.log(err))
    }

    return (
        <Box minHeight="70vh" my="2">
        <Flex mx={isLargerThanLG ? '14' : '3.5rem'}>
        <Box onClick={() => {navigate('/')}}>
        <i className="fa fa-chevron-left fa-border" style={{"font-size": "15px", "--fa-border-color": "black"}} aria-hidden="true" />
        </Box> 
        </Flex>
        
        <Flex alignItems={"baseline"}>
        <Text ml={isLargerThanLG ? '14' : '3.5rem'} mr="2" fontSize="3xl" fontWeight={""} borderBottom="2px solid black" my="2">
          {folder ? folder.name : <Loading />}
        </Text>
        
        <Moda user={user} type="edit" folder={folder} toggleUpdated={toggleUpdated}/>
    
        </Flex>

        <Flex>
        <Text mx={isLargerThanLG ? '14' : '3.5rem'} fontSize="lg" fontWeight={""}  my="2">
        {folder ? folder.description !== "No Description"? folder.description : "" : <Loading />}
        </Text>
        </Flex>
        
        <Flex alignItems={"baseline"} >
        <Text ml={isLargerThanLG ? '14' : '3.5rem'} mr="2" fontSize="xl" fontWeight={""} borderBottom="2px solid black" my="2">
          Notes
        </Text>
        <Box  verticalAlign={"bottom"}>
            <CreateNote user={user} msgAlert={msgAlert} toggleUpdated={toggleUpdated} folder={folderID} />
        </Box>
        </Flex>
        

        <Flex
          maxWidth={isLargerThanLG ? '80vh' : 'full'}
          minHeight="5vh"
          py={"5"}
          flexDirection='column'
          
        //   bgColor="green"
          

          mx={isLargerThanLG ? '14' : '3.5rem'}
          

        >
        
        {noteIndex.length > 0 ? noteIndex : "Add some notes!"}

        <Text my="4">
        <Button colorScheme='red' onClick={handleDelete} >Delete Folder</Button>
        </Text>

        </Flex>
        
      </Box>
        
      );
    };

export default FolderPage
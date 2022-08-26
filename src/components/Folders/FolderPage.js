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
import FolderBox from '../shared/FolderBox';
import DocumentRow from '../shared/DocumentRow';
import NotePage from '../Notes/NotePage';
import { useNavigate, useParams } from 'react-router-dom';
import { getFolder } from '../../api/folder';
import Loading from '../shared/Loading';
import Moda from './Moda';
const FolderPage = ({user}) => {

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
        <DocumentRow key={index} note={note} isLargerThanLG={isLargerThanLG}/>
      )
    })

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
            <i className="fa fa-plus-square-o" style={{"font-size": "15px"}} aria-hidden="true" verticalAlign={"bottom"}/>
        </Box>
        </Flex>
        

        <Flex
          maxWidth={isLargerThanLG ? '80vh' : 'full'}
          minHeight="5vh"
          py={"5"}
          flexDirection='column'
          
        //   bgColor="green"
          

          mx={isLargerThanLG ? '14' : '2.5rem'}
          

        >
        
        {noteIndex.length > 0 ? noteIndex : "Add some notes!"}

        </Flex>

       
        
      </Box>
        
      );
    };

export default FolderPage
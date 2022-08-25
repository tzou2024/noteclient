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
const FolderPage = ({user}) => {

    const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');
    const {folderID} = useParams()
    const [folder, setFolder ] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        getFolder(user, folderID )
            .then(res => {
                console.log(res.data.folder)
                setFolder(res.data.folder)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <Box minHeight="70vh" my="2">
        <Flex mx={isLargerThanLG ? '14' : '3.5rem'}>
        <Box onClick={() => {navigate('/')}}>
        <i class="fa fa-chevron-left fa-border" style={{"font-size": "15px", "--fa-border-color": "black"}} aria-hidden="true" />
        </Box> 
        </Flex>
        
        <Flex>
        <Text mx={isLargerThanLG ? '14' : '3.5rem'} fontSize="3xl" fontWeight={""} borderBottom="2px solid black" my="2">
          {folder ? folder.name : <Loading />}
        </Text>
        </Flex>

        <Flex>
        <Text mx={isLargerThanLG ? '14' : '3.5rem'} fontSize="lg" fontWeight={""}  my="2">
        {folder ? folder.description : <Loading />}
        </Text>
        </Flex>
        
        <Flex>
        <Text mx={isLargerThanLG ? '14' : '3.5rem'} fontSize="xl" fontWeight={""} borderBottom="2px solid black" my="2">
          Notes
        </Text>
        </Flex>
        

        <Flex
          maxWidth={isLargerThanLG ? '80vh' : 'full'}
          minHeight="5vh"
          py={"5"}
          flexDirection='column'
          
        //   bgColor="green"
          

          mx={isLargerThanLG ? '14' : '2.5rem'}
          

        >
        
        

        </Flex>

       
        
      </Box>
        
      );
    };

export default FolderPage
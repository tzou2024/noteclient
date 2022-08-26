import {
  Flex,
  Spacer,
  Text,
  Wrap,
  WrapItem,
  Textarea,
  Box,
  useMediaQuery
} from '@chakra-ui/react';
import {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { getNote } from '../../api/notes';
import Loading from '../shared/Loading';
import { getFolder } from '../../api/folder';

const NotePage = ({user, msgAlert}) => {
  const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');
  let [value, setValue] = useState('')
  const {folderID, noteId} = useParams()
  const [note, setNote] = useState(null)
  const [folder, setFolder] = useState(null)
  const navigate = useNavigate()
  
  useEffect(() =>{
      getNote(user, noteId)
        .then(res=>{
          setNote(res.data.note)
          getFolder(user, folderID)
            .then(res => {
              setFolder(res.data.folder)})
            .catch(err => console.log(err))
        })
        .catch(err=>console.log(err))
  }, [])

  let handleInputChange = (e) => {
    let inputValue = e.target.value
    e.target.style.height = 'inherit';
    e.target.style.height = `${e.target.scrollHeight}px`; 

    setValue(inputValue)
    console.log(inputValue)
  }

  if(!note){
    return <Loading />
  }

  return (
    <Box minHeight="70vh" my="2">
    
    <Flex mx={isLargerThanLG ? '14' : '3.5rem'} fontSize="3xl" fontWeight={"semibold"}  alignItems={"baseline"}>
    <Box onClick={() => {navigate(-1)}}>
    <i className="fa fa-chevron-left fa-border" style={{"font-size": "15px", "--fa-border-color": "black", }} _hover={{ color: "red"}} aria-hidden="true" />
    </Box>
    
    </Flex>
        
    

    <Flex mx={isLargerThanLG ? '14' : '3.5rem'} fontSize="3xl" fontWeight={"semibold"} borderBottom="1px solid black" my="2" alignItems={"baseline"}>
    
    <Text >
          {note ? note.title : "unnamed"}
    </Text>
    <Box px="3" textAlign={"center"} verticalAlign={"center"}>
        <i className="fa fa-pencil" style={{"font-size": "15px"}} aria-hidden="true" />
    </Box>
    <Spacer />
    <Box textAlign={"center"} verticalAlign={"center"} float="right">
        <i className="fa fa-folder" style={{"font-size": "12px"}} aria-hidden="true" />
    </Box>
    {folder ?  
      <Text px="2" fontSize="md" fontWeight={"normal"}>
    {folder.name}
    </Text>
    : "No Folder"}
    
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
      <Textarea
        onChange={handleInputChange}
        minHeight={"15rem"}
        style={{"border": "solid 1px black"}}
        overflow="hidden"
        defaultValue={note.body}
        
        
      />
      
      </Flex>
    </Box>
  )
}

export default NotePage

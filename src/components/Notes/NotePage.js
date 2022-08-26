import {
  Flex,
  Spacer,
  Text,
  Wrap,
  WrapItem,
  Input,
  Textarea,
  Box,
  useMediaQuery
} from '@chakra-ui/react';
import {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { deleteNote, getNote } from '../../api/notes';
import Loading from '../shared/Loading';
import { getFolder } from '../../api/folder';
import { editNoteTitle, editNoteBody } from '../../api/notes';
import { useRef } from 'react';

const NotePage = ({user, msgAlert}) => {
  const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');
  let [value, setValue] = useState('')
  const {folderID, noteId} = useParams()
  const [note, setNote] = useState(null)
  const [folder, setFolder] = useState(null)
  const [editingTitle, setEditingTitle] = useState(false)
  const [title, setTitle ] = useState(null)
  const navigate = useNavigate()
  const [updated, setUpdated] = useState(false)
  const bodyref = useRef("")

  const toggleUpdated = () => {
    setUpdated(prev => !prev)
  }
  
  useEffect(() =>{
      getNote(user, noteId)
        .then(res=>{
          setNote(res.data.note)
          if(folderID !== "null"){
            getFolder(user, folderID)
            .then(res => {
              setFolder(res.data.folder)})
            .catch(err => console.log(err))
          }
        })
        .catch(err=>console.log(err))
  }, [updated])

  let handleTitleChange = () => {
    console.log(title)
    if(title === null){
      return
    }else if(title === ""){
      editNoteTitle(user, noteId, "unnamed note")
        .then(res => {toggleUpdated()})
        .catch(err => console.log(err))
      
    }else{
      editNoteTitle(user, noteId, title)
        .then(res => {toggleUpdated()})
        .catch(err => console.log(err))
    }

    
  }

  let handleBack = (e) => {
    console.log("bodyref: ", bodyref.current.value)
    if(bodyref.current.value == ""){
      deleteNote(user, noteId)
        .then(res => {
          navigate(-1)
        })
        .catch(err => console.log(err))
    }
    else{
      editNoteBody(user, noteId, bodyref.current.value)
      .then(res => {
        console.log(res)
        toggleUpdated()
      })
      .catch(err => console.log(err))
    navigate(-1)
    }
    
  }

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
    <Box onClick={handleBack}>
    <i className="fa fa-chevron-left fa-border" style={{"font-size": "15px", "--fa-border-color": "black", }} _hover={{ color: "red"}} aria-hidden="true" />
    </Box>
    
    </Flex>
        
    

    <Flex mx={isLargerThanLG ? '14' : '3.5rem'} fontSize="3xl" fontWeight={"semibold"} borderBottom="1px solid black" my="2" alignItems={"baseline"}>
    {editingTitle ? (
      <>
      <Input w="50%" defaultValue={note.title} fontSize="2xl" fontWeight={"bold"} onChange={(e) => setTitle(e.target.value)}/> 
      <Box px="3" textAlign={"center"} verticalAlign={"center"} onClick={() => {setEditingTitle(prev=> !prev)
      handleTitleChange()}}>
          <i className="fa fa-check" style={{"font-size": "15px"}} aria-hidden="true" />
      </Box>
      </>
    )
    : 
    <>
    <Text >
    {note.title}
    </Text>
    <Box px="3" textAlign={"center"} verticalAlign={"center"} onClick={(e) =>{
      setEditingTitle(prev=> !prev)
     }}>
        <i className="fa fa-pencil" style={{"font-size": "15px"}} aria-hidden="true" />
    </Box>
    </>
    }
    
    <Spacer />
    <Box textAlign={"center"} verticalAlign={"center"} float="right">
        <i className="fa fa-folder" style={{"font-size": "12px"}} aria-hidden="true" />
    </Box>
    {folder ?  
      <Text px="2" fontSize="md" fontWeight={"normal"}>
    {folder.name}
    </Text>
    : <Text px="2" fontSize="md" fontWeight={"normal"}>
    No Folder
    </Text>}
    
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
        ref={bodyref}
        
        
      />
      
      </Flex>
    </Box>
  )
}

export default NotePage

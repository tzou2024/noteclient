import React, {useState} from 'react'
import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Input,
	Flex,
	Box,
	Text,
	Button,
	Textarea
	} from '@chakra-ui/react'

import { useNavigate } from 'react-router-dom'
import { createFolder, editFolder } from '../../api/folder'
import Loading from '../shared/Loading'

const FolderForm = ({user, type, folder, onClose, toggleUpdated}) => {
 const [name, setName] = useState(null)
 const [description, setDescription] = useState(null)

 function handleSubmitCreate(event) {
    event.preventDefault()
    createFolder(user, name, description)
        .then(res => {
            console.log(res)
            toggleUpdated()
            onClose()
            
        })
        .catch(err =>{
            console.log(err)
        })
  }

  function handleSubmitEdit(event) {
    event.preventDefault()
    let placeName
    let placeDescription
    if(name === null){
        placeName = folder.name
    }
    else if(name === ""){
        placeName = "Unnamed Folder"
    }
    else{
        placeName = name
    }

    if(description === null){
        placeDescription = folder.description
    } 
    else if( description === ""){
        placeDescription= ""
    }
    else{
        placeDescription = description
    }
    editFolder(user, folder.id, placeName, placeDescription)
        .then(res => {
            toggleUpdated()
            onClose()}
            )
        .catch(err => {
            console.log(err)
        })

	
  }


  return (
    <Flex bg="gray:50" p={3} rounded="md" w={64} flexDirection="column">
    <Text
        fontSize='xl'
        textAlign={"center"}
    >
        {type==="edit" ? "Edit Folder" : "Create Folder" }
    </Text>
    <form onSubmit={type === "edit" ? handleSubmitEdit : handleSubmitCreate}>
    <FormControl>
        <FormLabel htmlFor="name" textAlign={"center"} fontSize="lg">
            Name
        </FormLabel>
        <Input 
            id="name"
            name="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            defaultValue={type === "edit" ? `${folder.name}` : ""}
            >
            

        </Input>
    </FormControl>
    <FormControl my="3">
        <FormLabel htmlFor="description" textAlign={"center"} fontSize="lg">
            Description
        </FormLabel>
        <Textarea 
            id="description"
            name="description"
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            defaultValue={type === "edit" ? folder.description === "No Description" ? "" : `${folder.description}` : ""}
            >

        </Textarea>
    </FormControl>
    
    <Button mt="5" type="submit" width="full" colorScheme="gray">{type === "edit" ? "edit" : "create"}</Button>
    </form>
    
    </Flex>
  )
}

export default FolderForm

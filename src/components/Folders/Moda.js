import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Button,
    Flex,
    Box,
    ModalCloseButton,
  } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import FolderForm from './FolderForm'

function Moda({user, type, toggleUpdated, folder}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    {type === "create" ?
    <i className="fa fa-plus-square-o" style={{"font-size": "15px"}} onClick={onOpen} aria-hidden="true" />
    :
    <i className="fa fa-pencil" style={{"font-size": "15px"}} onClick={onOpen} aria-hidden="true" />
    
    }
    
      

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader>Folders</ModalHeader> */}
          <ModalCloseButton />
          <ModalBody>
          <Flex alignItems="center" justifyContent="center">
          <FolderForm user={user} type={type} onClose={onClose} toggleUpdated={toggleUpdated} folder={folder}/>
          </Flex>
          
          </ModalBody>

          <ModalFooter>
            {/* <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Moda

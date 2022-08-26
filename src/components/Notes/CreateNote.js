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
import { createNote } from '../../api/notes';


const CreateNote = ({user, msgAlert, toggleUpdated, folder}) => {

  const handleClick = () => {
      createNote(user, null, null, folder )
        .then(res => {
            console.log(res)
            toggleUpdated()
        })
        .catch(err => {
            console.log(err)
        })
  }
  return (
    <i className="fa fa-plus-square-o" style={{"font-size": "15px"}} aria-hidden="true" onClick={handleClick}/>
  )
}

export default CreateNote

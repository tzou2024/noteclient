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
import NoteRow from '../shared/NoteRow';
import NotePage from '../Notes/NotePage';
import { useNavigate, useParams } from 'react-router-dom';
import { getFolder } from '../../api/folder';
import Loading from '../shared/Loading';
import { createNote } from '../../api/notes';


const EditNote = ({user, msgAlert, toggleUpdated, folder}) => {

  const handleClick = () => {
      
  }
  return (
    <i className="fa fa-pencil" style={{"font-size": "15px"}} aria-hidden="true" onClick={handleClick}/>
  )
}

export default EditNote
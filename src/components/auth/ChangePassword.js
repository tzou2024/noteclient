import React, {useState} from 'react'
import UserForm from '../shared/UserForm'
// import {useToastHook} from '../shared/Toast.js'
// import axios from 'axios'
// import apiUrl from '../../apiConfig'
import { changePassword } from '../../api/auth'
import { useNavigate } from 'react-router-dom'

const ChangePassword = ({ setUser, msgAlert, user }) => {
  console.log('user at the beginning', user)
  const navigate = useNavigate();
  //const [toast, newToast] = useToastHook();

  // const {setUser} = props
  
  const initialV = {
    oldpassword: "",
    password: ""
  }

  // const someThingHappens = (message, status) => {
  //   newToast({ message: message, status: status });
  // };

  const onSubmit = (values) => {
    console.log(values)
    const password = {
      oldPassword: values.oldpassword,
      newPassword: values.password
    }
    console.log('I am the usert========>>>', user)
    changePassword(password, user)
      .then(res => {
        console.log('I am the res=======>>', res)
        msgAlert('Password changed successfuly!', 'success')
        navigate('/')
      })
      .catch(err => {
        msgAlert('Error changing password', 'error')
      }
        )
  }

  if (!user) {
    navigate('/signin')
    return
  }
  return (
    <>
      <UserForm 
      initialV={initialV}
      onSubmit={onSubmit}
      heading={"Change Password"}
      code={"change"}
      buttonText={"Change"}
      />
    </>
    
  )
}

export default ChangePassword
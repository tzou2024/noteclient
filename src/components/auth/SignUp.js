import React, {useState} from 'react'
import UserForm from '../shared/UserForm'
//import {useToastHook} from '../shared/Toast.js'
// import axios from 'axios'
// import apiUrl from '../../apiConfig'
import { signUp, signIn } from '../../api/auth'
import { useNavigate } from 'react-router-dom'

const SignUp = ({ setUser, msgAlert }) => {
  const navigate = useNavigate();
  //const [toast, newToast] = useToastHook();

  //const {setUser} = props
  
  const initialV = {
    email: "",
    password: ""
  }

  // const msgAlert = (message, status) => {
  //   newToast({ message: message, status: status });
  // };

  const onSubmit = (values) => {
    // console.log(values)
    // msgAlert("success")
    const credentials = values
    signUp(credentials)
      .then(user => {        
        msgAlert("signup success", "success")
        console.log('signed up user')
        signIn(credentials)
          .then(res => {
            setUser(res.data.user)
            console.log('res.data.user', res.data.user)
            msgAlert('Sign in success!', 'success')
            navigate('/')
          })
          .catch(err => {
            msgAlert("signin error", "error")
            console.log(err)
          })
      })
      .catch(err => {
        msgAlert("signup error", "error")
        console.log(err)
      })

  }

  return (
    <>
      <UserForm 
      initialV={initialV}
      onSubmit={onSubmit}
      heading={"Sign Up"}
      code={"signup"}
      buttonText={"Sign Up"}
      />
    </>
    
  )
}

export default SignUp


import Footer from './components/shared/Footer';
import Nav from './components/shared/Nav'
import React, { useRef, Fragment, useState} from 'react';
import { useDisclosure } from '@chakra-ui/react';
import DrawerComponent from './components/DrawerComponent';
import { useNavigate, Route, Routes } from 'react-router-dom'
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn'
import ChangePassword from './components/auth/ChangePassword'
import { signOut } from './api/auth';
import { v4 as uuid } from 'uuid'
import { useToastHook } from './components/shared/Toast'
import { Button, useColorMode, ColorModeScript } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import HomePage from './components/HomePage';
import FolderPage from './components/Folders/FolderPage';
import NotePage from './components/Notes/NotePage';
import RequireAuth from './components/shared/RequireAuth';

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  const theme = useTheme();

  const [toast, newToast] = useToastHook();
  const msgAlert = (message, status) => {
    newToast({ message: message, status: status });
  };
  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  const clearUser = () => {
    // console.log('clear user ran')
    signOut(user)
      .then(res => {
        console.log('Logged out')
        setUser(null)
        msgAlert("logged out success", "success")
        console.log('new state of user', user)
        navigate('/')
      })
      .catch(error => msgAlert("Error logging out", "error"))
  }

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  
  return (

    <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <Nav 
      user={user} 
      // ref={btnRef} 
      onOpen={onOpen} 
      clearUser={clearUser}
      toggleColorMode={toggleColorMode}
      colorMode={colorMode}
    />
    <Routes>
      <Route 
        path="/"
        element={
        <RequireAuth user={user}>
          <HomePage user={user} msgAlert={msgAlert} />
        </RequireAuth>
        }
          
      />
      <Route 
        path="/folders/:folderID"
        element={
          <RequireAuth user={user}>
            <FolderPage user={user} msgAlert={msgAlert} />
          </RequireAuth>
        
        } 
      />
      <Route 
        path="/folders/:folderID/notes/:noteId"
        element={
        <RequireAuth user={user}>
            <NotePage user={user} msgAlert={msgAlert} />
        </RequireAuth>
        
        } 
      />
      <Route
        path="/sign-up"
        element={<SignUp setUser={setUser} msgAlert={msgAlert}/>}
      />
      <Route
        path="/changepassword"
        element={<ChangePassword user={user} setUser={setUser} msgAlert={msgAlert}/>}
      />
      <Route
        path="/sign-in"
        element={<SignIn setUser={setUser} msgAlert={msgAlert}/>}
      />
    </Routes>
    <Footer />
    <DrawerComponent user={user} isOpen={isOpen} onClose={onClose} btnRef={btnRef} clearUser={clearUser} msgAlert={msgAlert}/>
    </>
  );
}

export default App;
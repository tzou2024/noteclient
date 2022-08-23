import React, { useState } from 'react';
import {
  Text,
  Flex,
  Spacer,
  IconButton,
  useColorMode,
  useColorModeValue,
  useMediaQuery,
  Link,
  Button
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { FaAlignJustify } from 'react-icons/fa';
import { Icon } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'

const Nav = ({ onOpen, ref, user, clearUser, toggleColorMode, colorMode }) => {
  const [scroll, setScroll] = useState(false);
  const [isLargerThanMD] = useMediaQuery('(min-width: 48em)');
  const navigate = useNavigate()
  
  const changeScroll = () =>
    document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
      ? setScroll(true)
      : setScroll(false);

  window.addEventListener('scroll', changeScroll);

  return (
    <Flex
      h="10vh"
      alignItems="center"
      p="6"
      boxShadow={scroll ? 'base' : 'none'}
      position="sticky"
      top="0"
      zIndex="sticky"
      w="full"
    >

      <Text fontSize="xl" fontWeight="bold">
              Notes
              </Text>
      {isLargerThanMD ? (
        <>
        

        <Link onClick={() => navigate('/')} fontSize="md" ml={6}>
          Feed
        </Link>
        
        { user ? (
          <>
            <Link 
              onClick={() => navigate('/changepassword')} 
              fontSize="md" 
              ml={6}
            >
              Change Password
            </Link>
          </>) 
          :
          ''
        }
        
        </>
      ) : (
        <>
          
        </>
      )}
      
      <Spacer />
      
      <Flex alignItems="center">
        <IconButton mr="5" w={6} h={6} p={5} onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </IconButton>

        {isLargerThanMD ? (
          <>
            { user ? <Link onClick={clearUser} mb="3">Logout</Link> : <Link href="/signin" fontSize="md" >Log In </Link>
            
             }
          </>
        ) : (
          <IconButton onClick={onOpen}>
            <Icon as={FaAlignJustify} />
          </IconButton>
        )}
      </Flex>
    </Flex>
  );
};

export default Nav;
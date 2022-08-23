import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Link,
  Flex,
} from '@chakra-ui/react';
import { useNavigate, Navigate } from 'react-router-dom';

const DrawerComponent = ({ isOpen, onClose, btnRef, user, clearUser }) => {
  const navigate = useNavigate()

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
      zIndex="popover"
    >
      <DrawerOverlay />

      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Navigation Menu</DrawerHeader>

        <DrawerBody>
          <Flex flexDirection="column">
            
            {user ? (
              <>
                  <Link 
                    onClick={() => navigate('/changepassword')} 
                    mb='3'
                  >
                    Change Password
                  </Link>
                <Link onClick={clearUser} mb="3">Logout</Link>
              </>
            ) : 
            (
              <Link onClick={() => navigate("/signin")} mb="3">Login</Link>
            )
            }
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerComponent;
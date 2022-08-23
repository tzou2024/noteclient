import React from 'react'
import { CircularProgress, Box } from '@chakra-ui/react'

const Loading = () => {
  return (
    <Box align='center' justify='center' m='5'>
    <CircularProgress isIndeterminate color='green.300' />
    </Box>
  )
}

export default Loading

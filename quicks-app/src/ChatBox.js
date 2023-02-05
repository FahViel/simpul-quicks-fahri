import React from 'react'
import { Box, FormControl, Input, InputGroup, InputRightElement, SimpleGrid } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { Loading } from './components/Chat Box/Loading'

function ChatBox() {
  return (
    <>
      <SimpleGrid position="fixed" bottom={100} right={0} p={4} mr={1}>
        <Box bg="white" color="white" w="700px" h="700px" borderRadius="base" p={4}>
          <FormControl>
            <InputGroup>
              <InputRightElement borderColor="black" children={<SearchIcon />} color="gray" />
              <Input placeholder="Search" type="text" color="GrayText" borderColor="#828282" variant="outline" />
            </InputGroup>
          </FormControl>
          <Loading />
        </Box>
      </SimpleGrid>
    </>
  )
}

export default ChatBox

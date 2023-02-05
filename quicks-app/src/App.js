import React, { useState } from 'react'
import './App.css'
import { ChakraProvider, Button, Image, Box, SimpleGrid, Text } from '@chakra-ui/react'
import Logo from './assets/button/Logo.png'
import Task from './assets/button/Task.png'
import Inbox from './assets/button/Chat.png'
import ChatBox from './ChatBox'

function App() {
  const [isClick, setIsClick] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <ChakraProvider>
      <div className="app">
        <SimpleGrid marginTop="10">
          <Box position="fixed" bottom={0} right={0} p={4}>
            {isExpanded && (
              <>
                <Button className="image-button-task" variant="text" padding={0} mr={4}>
                  <Text position="absolute" mb={20}>
                    Task
                  </Text>
                  <Image src={Task} />
                </Button>
                <Button className="image-button-inbox" variant="text" padding={0} onClick={() => setIsClick(!isClick)}>
                  <Text position="absolute" mb={20}>
                    Inbox
                  </Text>
                  <Image src={Inbox} />
                </Button>
                {isClick && <ChatBox />}
              </>
            )}
            <Button className="button-logo" variant="text" onClick={() => setIsExpanded(!isExpanded)}>
              <Image className="image-logo" src={Logo} />
            </Button>
          </Box>
        </SimpleGrid>
      </div>
    </ChakraProvider>
  )
}

export default App

import React, { useState } from 'react'
import './App.css'
import { ChakraProvider, Button, Image, Box, ScaleFade, useDisclosure, SimpleGrid } from '@chakra-ui/react'
import Logo from './assets/button/Logo.png'
import Task from './assets/button/Task.png'
import Inbox from './assets/button/Chat.png'
import ChatBox from './ChatBox'

function App() {
  const { isOpen, onToggle } = useDisclosure()
  const [isClick, setIsClick] = useState(false)

  return (
    <ChakraProvider>
      <div className="app">
        <Box padding={0} borderRadius="lg" mt="20">
          <Button className="button-logo" variant="text" padding={0} onClick={onToggle}>
            <Image className="image-logo" src={Logo} />
          </Button>
        </Box>
        <ScaleFade in={isOpen} style={{ marginLeft: '81%', position: 'absolute' }}>
          <SimpleGrid>
            <Box>
              <Button variant="text" padding={0}>
                <p>Task</p>
                <Image className="image-button-task" src={Task} />
              </Button>
              <Button variant="text" padding={0} ml={5} onClick={() => setIsClick(!isClick)}>
                <Image className="image-button-inbox" src={Inbox} />
                <p>Inbox</p>
              </Button>
              {isClick && <ChatBox />}
            </Box>
          </SimpleGrid>
        </ScaleFade>
      </div>
    </ChakraProvider>
  )
}

export default App

import React, { useEffect, useState } from 'react'
import { CircularProgress, Flex, Text } from '@chakra-ui/react'

export function Loading() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  if (isLoading) {
    return (
      <>
        <Flex alignItems="center" justifyContent="center" mt={100}>
          <CircularProgress isIndeterminate size="120px" color="#C4C4C4" />
        </Flex>
        <Text color="black" textAlign='center'>Loading Chats...</Text>
      </>
    )
  }
}

import React from "react";
import { Box, FormControl, Input } from "@chakra-ui/react";



function ChatBox() {
    return ( 
        <div>
            <Box bg='white' color='white' w='300px' h='300px' display='flex' mt={-370} >
                <FormControl>
                    <Input placeholder='Search'/>
                </FormControl>
            </Box>
        </div>
    )
}

export default ChatBox;




/**
 * igual que en el otro manejar el estado y setearlo con los botones
 * change the state of the button to active when the user clicks
 * a button to press next
 * @returns 
 */

import { Button, ButtonGroup } from "@chakra-ui/button";
import { Container, Stack, Heading, Box, Link } from '@chakra-ui/react'

import { Link as reactRouterLink } from "react-router-dom";

function NumberOfSongs({setNumberOfSongs,numberOfSongs }) {
	return (
      <Container 
      height="100vh" 
	  maxWidth="container.xl"
	  display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection={"column"}
      >
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
		  mb={50}
          >
          <Heading
            fontWeight={800}
            fontSize={{ base: '5xl', sm: '6xl', md: '7xl' }}
            lineHeight={'110%'}>
				Select number of songs:
          </Heading>
        </Stack>
		<div>
			<ButtonGroup>
				<Button size="lg" mr={5} onClick={()=>setNumberOfSongs(5)}>5</Button>
				<Button size="lg" mr={5} onClick={()=>setNumberOfSongs(10)}>10</Button>
				<Button size="lg" mr={5} onClick={()=>setNumberOfSongs(15)}>15</Button>
			</ButtonGroup>
			
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
		  mb={50}
          >
              <Link as={reactRouterLink} to="/select-term" mt={90}>
					<Button
						colorScheme={'green'}
						bgGradient='linear(to-r, #2941AB, #034E0F)'
						px={40}
						_hover={{
							bg: 'green.500',
						}
					}>
					Next
					</Button>
              </Link>
        </Stack>
		</div>
      </Container>
	)
}

export { NumberOfSongs }

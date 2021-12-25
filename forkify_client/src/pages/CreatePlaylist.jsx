import { Input, Button, Container, Stack, Heading, Box, Link } from '@chakra-ui/react'

import { Link as reactRouterLink } from "react-router-dom";


function CreatePlaylist({ setPlaylistName }) {
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
				Name of Playlist
          </Heading>
        </Stack>
				<Input
					type="text"
					variant="filled"
					width={{base:"xs",md:"lg"}}
					size="lg"
					onChange={(e) => setPlaylistName(e.target.value)}
				/>
              <Link as={reactRouterLink} to="/number-of-songs" mt={90}>
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
      </Container>
	)
	
}

export { CreatePlaylist };

/**
 * create a component that allows to copy the content 
 * use that component in this page and pass the endpoint thats the backend generate
 * @returns 
 */

import { Container, Stack, Heading, Box, Link } from '@chakra-ui/react'

function PlaylistLink({ playlistName, playlistIdMongo }) {
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
			It's all done!{playlistName}
			Share this link with your friends {playlistIdMongo}
          </Heading>
        </Stack>
      </Container>
	)
}

export { PlaylistLink }

import { Container, Heading, Stack, Text, Box, Link, Button } from "@chakra-ui/react"
import { AnimatedPage } from "../components"
import { Link as reactRouterLink } from "react-router-dom";

function PlaylistEnd({ playlistName }) {
	return (
    <AnimatedPage>
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
				Great! your songs nows are in the playlist:
            	<Text color="#2941AB">{playlistName}</Text>
          </Heading>

              <Link mt={20} to="/" as={reactRouterLink}>
                <Button
                  colorScheme={'green'}
                  bgGradient='linear(to-r, #2941AB, #034E0F)'
                  px={40}
                  _hover={{
                    bg: 'green.500',
                  }}>
                  Home
                </Button>
              </Link>
        </Stack>
      </Container>
    </AnimatedPage>
	)
}

export { PlaylistEnd }

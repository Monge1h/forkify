import { useEffect } from "react";
import { useParams, Link as reactRouterLink } from "react-router-dom";
import { getPlaylistId } from "../playlistBackend";
import { getAccessToken, getCurrentUserData } from "../spotify";

import {  Button, Container, Stack, Heading, Box, Link } from '@chakra-ui/react'
import { AnimatedPage } from "../components";


function PlaylistInvitation({ setPlaylistId, token, setToken,setUserData }) {
	const { playlistIdMongo } = useParams();
	useEffect(() => {
		setToken(getAccessToken)
		const fetchData = async() =>{
			try {
				const { data } = await getCurrentUserData()
				setUserData(data)	
				const playlistId = await getPlaylistId(playlistIdMongo)
				console.log("playlist id: ")
				console.log(playlistId)
				setPlaylistId(playlistId)

			} catch (error) {
				console.log(error)
			}
		}
		fetchData()
	}, [])

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
          >
          <Heading
            fontWeight={800}
            fontSize={{ base: '5xl', sm: '6xl', md: '7xl' }}
            lineHeight={'110%'}>
			You have been invited to put songs on this playlist
          </Heading>
        </Stack>
          <Stack
            direction={'column'}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            {!token ? (
              <Link mt={90} href="http://localhost:8888/login">
                <Button
                  colorScheme={'green'}
                  bgGradient='linear(to-r, #2941AB, #034E0F)'
                  px={40}
                  _hover={{
                    bg: 'green.500',
                  }}>
                  Log in with Spotify
                </Button>
              </Link>
            ) : (
              <Link mt={90} to="/number-of-songs" as={reactRouterLink}>
                <Button
                  colorScheme={'green'}
                  bgGradient='linear(to-r, #2941AB, #034E0F)'
                  px={40}
                  _hover={{
                    bg: 'green.500',
                  }}>
                  Next
                </Button>
              </Link>
            )}
          </Stack>
      </Container>
    </AnimatedPage>
	)
}

export { PlaylistInvitation }

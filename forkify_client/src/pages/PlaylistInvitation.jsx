import { useEffect, useState } from "react";
import { useParams, Link as reactRouterLink } from "react-router-dom";
import { getPlaylistId } from "../playlistBackend";
import { getAccessToken, getCurrentUserData } from "../spotify";
import ClipLoader from "react-spinners/ClipLoader";

import {  Button, Container, Stack, Heading, Box, Link, Text } from '@chakra-ui/react'
import { AnimatedPage } from "../components";


function PlaylistInvitation({ setPlaylistId, token, setToken, setPlaylistName, playlistName, setInvitation, invitation, setPlaylistIdMongo }) {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL
	const { playlistIdMongo } = useParams();
  const [loading, setLoading] = useState(false)
  console.log(`state: ${invitation}`)
  let valid = false
  let tokenSpoti = localStorage.getItem("spotify_access_token")
  if (tokenSpoti != null) valid = true
  setToken(getAccessToken)
  console.log(`---------- token ${token}`)
	useEffect(() => {
    localStorage.setItem("invitation","1")
    localStorage.setItem("playlistIdMongo",playlistIdMongo)
		const fetchData = async() =>{
			try {
        setLoading(true)
				// const { data } = await getCurrentUserData()
				// setUserData(data)	
				const playlistId = await getPlaylistId(playlistIdMongo)
				setPlaylistId(playlistId.playlistId)
				setPlaylistName(playlistId.playlistName)
        setLoading(false)
			} catch (error) {
				console.log(error)
			}
		}
		fetchData()
	}, [])

	return (
    <>
    {loading ?
      <ClipLoader size={150} /> :
      
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
			You have been invited to put songs on this playlist:
      <Text color="#2941AB">{`${playlistName}`}</Text>
          </Heading>
        </Stack>
          <Stack
            direction={'column'}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            {!valid ? (
              <Link mt={20} href={`${BACKEND_URL}/login`}>
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
              <Link mt={20} to="/number-of-songs" as={reactRouterLink}>
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
    }
  </>
  )
}

export { PlaylistInvitation }

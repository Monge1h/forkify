import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  Link,
  useColorModeValue,
  createIcon,
} from '@chakra-ui/react';


import { Link as reactRouterLink, useNavigate } from "react-router-dom";
import { AnimatedPage } from '../components';
import { useEffect } from 'react';
import { getAccessToken } from '../spotify';

function Home({ token, setToken }) {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL
  let navigate = useNavigate()
  setToken(getAccessToken)
  let valid = false
  let tokenSpoti = localStorage.getItem("spotify_access_token")
  if (tokenSpoti != null) valid = true
  useEffect(() => {
    const invitationSaved = localStorage.getItem("invitation")
    const playlistIdMongo = localStorage.getItem("playlistIdMongo")
    if(invitationSaved == "1"){
      console.log(playlistIdMongo)
      localStorage.removeItem("invitation")
      navigate(`/playlist-invitation/${playlistIdMongo}`)
    }
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
            Easiest way to<br />
            <Text color="#2941AB">create</Text>
             a colloborative <br />
            <Text color="#2941AB">playlist</Text>
          </Heading>
        </Stack>
          <Stack
            direction={'column'}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            {!valid ? (
              <Link mt={90} href={`${BACKEND_URL}/login`}>
                <Button
                  width= {{base:"xs", md:"lg"}}
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
              <Link mt={90} to="/create-playlist" as={reactRouterLink}>
                <Button
                  colorScheme={'green'}
                  bgGradient='linear(to-r, #2941AB, #034E0F)'
                  px={40}
                  _hover={{
                    bg: 'green.500',
                  }}>
                  Start
                </Button>
              </Link>
            )}
          </Stack>
      </Container>
    </AnimatedPage>
		// <VStack>
		// </VStack>
	);
}

export { Home };

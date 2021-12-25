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

import { Link as reactRouterLink } from "react-router-dom";


function Home({ token }) {
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
		// <VStack>
		// </VStack>
	);
}

export { Home };

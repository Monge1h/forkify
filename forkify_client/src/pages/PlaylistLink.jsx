/**
 * create a component that allows to copy the content 
 * use that component in this page and pass the endpoint thats the backend generate
 * @returns 
 */

import { Container, Stack, Heading, Box, Link, Tag, useToast, Text } from '@chakra-ui/react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { AnimatedPage } from '../components';
const URL = import.meta.env.VITE_BASE_URL

function PlaylistLink({ playlistName, playlistIdMongo }) {
const SHARE_URL = `${URL}/playlist-invitation/${playlistIdMongo}`
const toast = useToast()
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
            width= {{base:"xs",md:"full"}}
            fontWeight={800}
            fontSize={{ base: '5xl', sm: '6xl', md: '7xl' }}
            lineHeight={'110%'}>
			It's all done!{playlistName}
			Share this link with your friends 
          </Heading>
        </Stack>
      <CopyToClipboard text={SHARE_URL}>
        <Tag size="lg" onClick={() =>
        toast({
          title: '👌',
          description: "The text was copied successfully! 😝",
          status: 'success',
          duration: 9000,
          position: "top",
          isClosable: true,
        })
      }>
        {URL}/playlist-invitation/{playlistIdMongo}
        </Tag>
      </CopyToClipboard>
      <Text>Copy Me!!</Text>
      </Container>
    </AnimatedPage>
	)
}

export { PlaylistLink }

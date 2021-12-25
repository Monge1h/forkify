/**
 * todo
 * [] cuando se le da click al boton, cambiarlo a un estado activo, lo que se me ocurre es tener mapeado los 3 botones
 * 			y cuando se seleccione uno limpiar el estado de los otros para que solo este uno activo
 * [] ponerle a cada boton un term de spotify = short_term | medium_term | long_term
 * [] luego con esto seleccionar las canciones para usar el endpoint 
 * @returns 
 */

import { Container, Stack, Heading, Box, Link } from '@chakra-ui/react'

import { Button, ButtonGroup } from "@chakra-ui/button";
import { useNavigate } from "react-router";
import { savePlaylist } from "../playlistBackend";
import { createPlaylist, getTopTracks, addTopTracksToPlaylist } from "../spotify";
import { AnimatedPage } from '../components';

function SelectTerm({spotifyTerm, setSpotifyTerm, playlistName, userId, numberOfSongs,setPlaylistIdMongo, playlistId}) {
	let navigate = useNavigate()
	const handleSubmit = async (e) =>{
		e.preventDefault()
		let url = "/playlist-link"
		if(playlistId == ""){
			playlistId = await createPlaylist(userId,playlistName)
			playlistId = playlistId.data.id
			let savePlaylistMongo = await savePlaylist(playlistId)
			setPlaylistIdMongo(savePlaylistMongo.data._id)
		}
		let topTracks = await getTopTracks(spotifyTerm, numberOfSongs)
		let urisTopTracks = topTracks.data.items.map(x=>x.uri)
        let addTracksToPlaylist = await addTopTracksToPlaylist(playlistId, urisTopTracks)
		navigate(url)
	}
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
				We will take {numberOfSongs} <br/>
				songs from the last:
          </Heading>
        </Stack>
		<div>
			<ButtonGroup>
				<Button size="lg" mr={5} onClick={() => setSpotifyTerm("short_term")}>Month</Button>
				<Button size="lg" mr={5} onClick={() => setSpotifyTerm("medium_term")}>3 Months</Button>
				<Button size="lg" mr={5} onClick={() => setSpotifyTerm("long_term")}>6 Months</Button>
			</ButtonGroup>
			
        <Stack
		  mt={50}
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
		  mb={50}
          >
			<form onSubmit={handleSubmit}>
				<Button 	
					colorScheme={'green'}
					bgGradient='linear(to-r, #2941AB, #034E0F)'
					px={40}
					_hover={{
						bg: 'green.500',
					}}
					type="submit">Next</Button>
			</form>
        </Stack>
		</div>
      </Container>
	</AnimatedPage>
	)
}

export { SelectTerm }

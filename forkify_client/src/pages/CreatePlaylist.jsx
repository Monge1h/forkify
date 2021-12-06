import { Input, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom';


function CreatePlaylist({ setPlaylistName }) {
	return (
		<div>
				<Input
					type="text"
					placeholder="name of playlist"
					onChange={(e) => setPlaylistName(e.target.value)}
				/>
				<Link to="/number-of-songs">
					<Button colorScheme='pink' px='8' type='submit'>Next</Button>
				</Link>
		</div>
	);
}

export { CreatePlaylist };

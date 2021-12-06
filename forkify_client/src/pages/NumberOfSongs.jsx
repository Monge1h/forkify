/**
 * igual que en el otro manejar el estado y setearlo con los botones
 * change the state of the button to active when the user clicks
 * a button to press next
 * @returns 
 */

import { Button, ButtonGroup } from "@chakra-ui/button";
import { Heading } from "@chakra-ui/layout";
import { Link } from "react-router-dom";

function NumberOfSongs({setNumberOfSongs,numberOfSongs }) {
	return (
		<div>
			<Heading>{numberOfSongs}</Heading>
			<ButtonGroup>
				<Button onClick={()=>setNumberOfSongs(5)}>5</Button>
				<Button onClick={()=>setNumberOfSongs(10)}>10</Button>
				<Button onClick={()=>setNumberOfSongs(15)}>15</Button>
			</ButtonGroup>

				<Link to="/select-term">
					<Button colorScheme='pink' px='8' type='submit'>Next</Button>
				</Link>
		</div>
	)
}

export { NumberOfSongs }

import { useState, useEffect } from "react";
import { Button, Heading, Link, VStack } from "@chakra-ui/react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	useLocation,
} from "react-router-dom";
import { getAccessToken } from "./spotify";
import { CreatePlaylist, Home } from "./pages";

function App() {
	const [token, setToken] = useState(null);

	useEffect(() => {
		setToken(getAccessToken);
	}, []);

	return (
		<VStack>
			<Router>
				<Routes>
					<Route path="/" element={<Home token={token} />} />
					<Route path="/create-playlist" element={<CreatePlaylist />} />
				</Routes>
			</Router>
		</VStack>
	);
}

export default App;

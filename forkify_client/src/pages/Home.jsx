import { Button, Heading, Link, VStack } from "@chakra-ui/react";
function Home({ token }) {
	return (
		<VStack>
			{!token ? (
				<Link mt={90} href="http://localhost:8888/login">
					<Button>Login</Button>
				</Link>
			) : (
				<Heading>Estoy dentro</Heading>
			)}
		</VStack>
	);
}

export { Home };

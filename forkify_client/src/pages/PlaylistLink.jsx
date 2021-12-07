/**
 * create a component that allows to copy the content 
 * use that component in this page and pass the endpoint thats the backend generate
 * @returns 
 */

function PlaylistLink({ playlistName, playlistIdMongo }) {
	return (
		<div>
			<p>It's all done!{playlistName}</p>
			<p>Share this link with your friends {playlistIdMongo}</p>
		</div>
	)
}

export { PlaylistLink }

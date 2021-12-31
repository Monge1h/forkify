# Forkify

Best tool to create playlists using Spotify API... (it's just a j4f project)

When I go to a roadtrip with my friends we always have the same problem... the music!

For that reason I made this app, to create a playlist and with a link my friends can put their favorite songs automatically in my playlist!

## App flow:

* Create playlist
  * Start the app and put the name that you want for your playlist.
  * Select how many songs do you want to put in the playist
  * Select in base of which months do you want the songs to be selected, if you want for the past month or for the past six months.
  * The playlist is created and you can copy the link and share the link with your friends!
* Add songs to an existing playlist
  * Enter with your friend's link
  * Select how many songs do you want to put in the playist
  * Select in base of which months do you want the songs to be selected, if you want for the past month or for the past six months.
  * Done! Now your songs are on your friend's playlists!! 👌
## Tech Stack

**Client:** React, Chackra UI

**Server:** Node, Express, Mongodb


## Demo

[![forkify.gif](https://s10.gifyu.com/images/forkify.gif)](https://gifyu.com/image/SSUVa)


## Lessons Learned
In the last page when the playlist is created I use a library called
```
react-copy-to-clipboard
```
But Chackra UI already have a Hook that allows me to use the clipboard, so I could use that instead of using another library
but I didn't know at that time, the hook is:

[useClipboard](https://chakra-ui.com/docs/hooks/use-clipboard)


# Leeds Laugh Love

Quick project to get every song from a specific Spotify playlist using the Spotify API and show which artists are playing at Leeds Festival 2023.

## Usage

1. Create a Spotify app (https://developer.spotify.com/)
2. Install packages with `npm install`
3. Set the following environment variables:

-   SPOTIFY_CLIENT_ID: The 'Client ID' from the app's dashboard
-   SPOTIFY_CLIENT_SECRET: Also get this from the app's dashboard
-   SPOTIFY_CLIENT_REDIRECT_URI: The same one you set in the app's dashboard
-   SPOTIFY_PLAYLIST_ID: The ID of a playlist you follow

4. Run `npm run loginServer` and navigate to http://localhost:3000/
5. Log in to Spotify
6. After logging in you should be redirected to a page showing an access token and refresh token, set the following environment variables:

-   SPOTIFY_ACCESS_TOKEN: The access token
-   SPOTIFY_REFRESH_TOKEN: The refresh token

7. Run `npm run go`. This may take a few minutes depending on how many songs are in the playlist

You should then get an output of each song in the playlist and the artist in a `SONG - ARTIST(S)` format.

## Forewarnings

-   Currently only a list of all the artists' names are being checked. I.e for each song, if the artists' name is in the list, add that song. This can cause issues if the artist has a different name on Spotify. One solution is to add the artists' Spotify ID instead
-   More artists can be added and this list won't be updated. Could potentially scrape the lineup whenever running to get a list of updated names?
-   It is not the most fantastic solution, I whipped this project up within hours so there's probably things that can be improved upon

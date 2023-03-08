# Leeds Laugh Love

This project uses the Spotify API to retrieve every song from a specific playlist and show which artists are playing at Leeds Festival 2023. Follow the steps below to run the project:

## Usage

1. Create a Spotify app at https://developer.spotify.com/
2. Install the required packages with `npm install`
3. Set the following environment variables:

-   `SPOTIFY_CLIENT_ID`: The 'Client ID' from your Spotify app's dashboard
-   `SPOTIFY_CLIENT_SECRET`: The 'Client Secret' from your Spotify app's dashboard
-   `SPOTIFY_CLIENT_REDIRECT_URI`: The same redirect URI that you set in your Spotify app's dashboard
-   `SPOTIFY_PLAYLIST_ID`: The ID of the playlist you want to retrieve

4. Run `npm run loginServer` and navigate to http://localhost:3000/
5. Log in to Spotify
6. After logging in, you will be redirected to a page showing an access token and refresh token. Set the following environment variables:

-   `SPOTIFY_ACCESS_TOKEN`: The access token
-   `SPOTIFY_REFRESH_TOKEN`: The refresh token

7. Run `npm run go`. This may take a few minutes depending on how many songs are in the playlist.

You should then get an output of each song in the playlist and the artist in a `SONG - ARTIST(S)` format.

## Forewarnings

-   The current implementation only checks the list of all the artists' names. If the artist has a different name on Spotify, it may cause issues. One solution is to add the artists' Spotify ID instead.
-   The list of artists is not updated automatically. One potential solution is to scrape the lineup when before running.
-   This is a quick project developed in a short time, and there may be areas for improvement.

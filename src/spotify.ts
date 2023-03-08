import SpotifyWebApi from 'spotify-web-api-node';

const api = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID || '',
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET || '',
    redirectUri: process.env.SPOTIFY_CLIENT_REDIRECT_URI || '',
});

const accessToken = process.env.SPOTIFY_ACCESS_TOKEN || '';
const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN || '';

if (accessToken && refreshToken) {
    api.setAccessToken(accessToken);
    api.setRefreshToken(refreshToken);
}

export default api;

import SpotifyWebApi from 'spotify-web-api-node';
import { accessToken, clientId, clientSecret, redirectUri, refreshToken } from './env';

const api = new SpotifyWebApi({
    clientId,
    clientSecret,
    redirectUri,
});

if (accessToken && refreshToken) {
    api.setAccessToken(accessToken);
    api.setRefreshToken(refreshToken);
}

export default api;

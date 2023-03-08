import express from 'express';
import api from './spotify';

const scopes = ['playlist-read-private', 'playlist-read-collaborative'];

const app = express();

app.get('/', (req, res) => {
    try {
        res.redirect(api.createAuthorizeURL(scopes, process.env.SPOTIFY_REDIRECT_URI || ''));
    } catch (err) {
        console.error(err);
        res.json({ err });
    }
});

app.get(process.env.SPOTIFY_REDIRECT_URI || '', async (req, res) => {
    try {
        const { code } = req.query;

        const resp = await api.authorizationCodeGrant(code as string);

        const accessToken = resp.body.access_token;
        const refreshToken = resp.body.refresh_token;

        process.env.SPOTIFY_ACCESS_TOKEN = accessToken;
        process.env.SPOTIFY_REFRESH_TOKEN = refreshToken;

        console.log('Got tokens', { accessToken, refreshToken });
        res.json({ accessToken, refreshToken });
    } catch (err) {
        console.error(err);
        res.json({ err });
    }
});

app.listen(3000, async () => {
    console.log('Login server listening');
});

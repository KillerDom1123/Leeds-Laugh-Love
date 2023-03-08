import { artistNames } from './artists';
import api from './spotify';

const playlistId = process.env.SPOTIFY_PLAYLIST_ID || '';

const getPlaylistSongs = async () => {
    const songs = [];

    let offset = 0;
    const limit = 100;
    for (;;) {
        const tracks = await api.getPlaylistTracks(playlistId, {
            offset,
            limit,
        });
        songs.push(...tracks.body.items);
        if (tracks.body.items.length < limit) break;
        offset += limit;
    }

    return songs;
};

const filterLeedsSongs = (songs: SpotifyApi.PlaylistTrackObject[]) => {
    const addSongs = [];

    for (const song of songs) {
        const artistInLeeds = song.track?.artists.filter((artist) => artistNames.includes(artist.name.toUpperCase()));
        if (artistInLeeds?.length && artistInLeeds.length > 0) {
            addSongs.push(song);
        }
    }

    return addSongs;
};

(async () => {
    const songs = await getPlaylistSongs();
    const filteredSongs = filterLeedsSongs(songs);

    for (const song of filteredSongs) {
        const artists = song.track?.artists.map((artist) => artist.name);
        console.log(`${song.track?.name} - ${artists?.join(', ')}`);
    }
})();

// Redux action creator
// Returns action (object) with TYPE (required) and PAYLOAD

export const selectSong = (song) => {
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};

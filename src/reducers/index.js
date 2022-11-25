import { combineReducers } from "redux";

// This reducer works with STATIC data - no need to update it
// Overkill?... Just test project!

// thanks to sewerslvt for this music - i used it data as mockup

const songsReducer = () => {
    return [
        { title: 'dissociating', duration: '05:42' },
        { title: 'self destruction worldwide broadcast', duration: '04:46' },
        { title: 'all the joy in life was gone once you left', duration: '06:36' },
        { title: 'the last thing she sent me', duration: '03:46' },
        { title: 'light at the end of the tunnel', duration: '05:56' },
        { title: 'ultradespair', duration: '05:39' },
        { title: 'borderline', duration: '07:12' },
        { title: 'whatever', duration: '04:37' },
        { title: 'blissful overdose', duration: '04:11' },
        { title: 'inertia status', duration: '04:24' }
    ]
};

// This reducer works with ONLY ONE TYPE of actions because we have one TYPE
// But 'if' statement needs if we will set new TYPE actions in future

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

// This is fn that combinates our reducers in one object and do some *magic*

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});

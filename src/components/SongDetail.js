import React from "react";
import { connect } from 'react-redux';

// See SongList for understanding react-redux things

const SongDetail = ({ selectedSong }) => {
    return selectedSong ? (
        <div>
            <h2>Song information:</h2>
            <p>
                Title: {selectedSong.title}
                <br />
                Duration: {selectedSong.duration}
            </p>

        </div>
    ) : (
        <div>
            <h2>Select a song</h2>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { selectedSong: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetail);

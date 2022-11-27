import React from "react";
import { connect } from 'react-redux';

const SongDetail = ({ selectedSong }) => {
    return selectedSong ? (
        <div>
            <h2>Song information:</h2>
            <p>{`${selectedSong.title}, ${selectedSong.duration}`}</p>
        </div>
    ) : null;
};

const mapStateToProps = (state) => {
    return { selectedSong: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetail);

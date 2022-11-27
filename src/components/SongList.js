import React from "react";
import { connect } from 'react-redux';
import { selectSong } from '../actions'

class SongList extends React.Component {
    renderList() {
        return this.props.songs.map(song => {
            return (
                <div className='item' key={song.title}>
                    <div className="right floated content">
                        <button
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}
                        >
                            Show info
                        </button>
                    </div>
                    <div className="content">
                        <h2>{song.title}</h2>
                    </div>
                </div>
            );
        })
    }

    render() {
        return (
            <div className="ui divided list">
                {this.renderList()}
            </div>
        )
    }
};

// This function gets Redux state and returns information relevant to the given component
// Name of this function is recomend by convention but not constant
const mapStateToProps = (state) => {
    return { songs: state.songs };
};

// We use 'connect' fn function for getting "partial snapshot" of Redux store to our component as a prop
// And that's it! Now we can use this prop in our component

// In addition, we have selectSong (action creator for Redux)
// We get it to "connect" as a second argument ({ }) for one idea - to recognize it as Action Creator for Redux
// If we don't make it (for example, use "selectSong" as a plain function), Redux won't recognize it as Action
// And if we do it right, Redux can "dispatch" our actions to reducers
export default connect(mapStateToProps, { selectSong })(SongList);

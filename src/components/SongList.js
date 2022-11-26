import React from "react";
import { connect } from 'react-redux';

class SongList extends React.Component {
    renderList() {
        return this.props.songs.map(song => {
            return (
                <div className='item' key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary">Show info</button>
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
export default connect(mapStateToProps)(SongList);

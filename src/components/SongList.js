import React from "react";
import { connect } from 'react-redux';

class SongList extends React.Component {
    render() {
        return (
            <div>
                Song List
                {console.log(this.props)}
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

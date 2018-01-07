import React from 'react';
import { connect } from 'react-redux';
import { love } from '../actions';
//______________________________________________________________________________


const Like = ({toggleFavorite, wasLiked}) => (
    <div>
        <button onClick={toggleFavorite}>
            {wasLiked
                ? <i className="material-icons">favorite</i>
                : <i className="material-icons">favorite_border</i>}
        </button>
    </div>
);


const mapStateToProps = (state, {id}) => ({
    wasLiked: state.beers.byId[id].liked
});


const mapDispatchToProps = (dispatch, {id}) => ({
    toggleFavorite: () => dispatch(love(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(Like);

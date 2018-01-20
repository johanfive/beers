import React from 'react';
import { connect } from 'react-redux';
import { love } from '../actions';
import { wasLiked } from '../selectors';
//______________________________________________________________________________


const Like = ({toggleFavorite, wasLiked}) => (
    <button onClick={toggleFavorite}>
        {wasLiked
            ? <i className="material-icons">favorite</i>
            : <i className="material-icons">favorite_border</i>}
    </button>
);


const mapStateToProps = (state, {id}) => ({
    wasLiked: wasLiked(state, id)
});


const mapDispatchToProps = (dispatch, {id}) => ({
    toggleFavorite: () => dispatch(love(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(Like);

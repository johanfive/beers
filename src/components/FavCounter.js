import React from 'react';
import { connect } from 'react-redux';
//______________________________________________________________________________


const FavCounter = ({likes}) => <span className="favBadge" data-favbadge={likes}>Favorite{likes>1? "s" : null}</span>;


const mapStateToProps = state => ({
    likes: state.favorites.length
});


export default connect(mapStateToProps)(FavCounter);

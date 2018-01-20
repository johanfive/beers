import React from 'react';
import { connect } from 'react-redux';
import { getTotalLikes } from '../selectors';
//______________________________________________________________________________


const FavCounter = ({likes}) => (
    <span className="favBadge" data-favbadge={likes}>
        Favorite{likes > 1 ? "s" : null}
    </span>
);


const mapStateToProps = state => ({
    likes: getTotalLikes(state)
});


export default connect(mapStateToProps)(FavCounter);

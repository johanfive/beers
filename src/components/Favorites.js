import React from 'react';
import { connect } from 'react-redux';
import Name from './Name';
import Like from './Like';
//______________________________________________________________________________


const Favorites = ({favorites}) => (
    favorites.map(
        favId => (
            <div key={favId} className="favs">
                <Name id={favId} />
                <Like id={favId} />
            </div>
        )
    )
);


const mapStateToProps = state => ({
    favorites: state.favorites
});


export default connect(mapStateToProps)(Favorites);
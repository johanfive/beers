import React from 'react';
import { connect } from 'react-redux';
import { getBeerFromFridge } from '../actions';
import Refresh from './Refresh';
import Loading from './Loading';
import Error from './Error';
import Beer from './Beer';
//______________________________________________________________________________


class Glass extends React.Component {
    componentDidMount() {
        this.props.pourBeerIntoGlass();
    }
    render() {
        const {glassId, beerId, pourBeerIntoGlass} = this.props;
        return (
            <div className='glass'>
                <Loading glassId={glassId} />
                <Error glassId={glassId} />
                {beerId ? <Beer id={beerId} /> : null}
                Already had this one, pour a different kind
                <Refresh onClick={pourBeerIntoGlass} />
            </div>
        );
    }
}


const mapStateToProps = (state, {glassId}) => ({
    // get which beer was served in this glass
    beerId: state.glasses.byId[glassId].beer
});


const mapDispatchToProps = (dispatch, {glassId}) => ({
    pourBeerIntoGlass: () => dispatch(
        getBeerFromFridge(`https://api.punkapi.com/v2/beers/random`, glassId)
    )
});


export default connect(mapStateToProps, mapDispatchToProps)(Glass);

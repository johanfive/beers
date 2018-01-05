import React from 'react';
import { connect } from 'react-redux';
import { getMeABeer } from './actions';
//______________________________________________________________________________


class Beer extends React.PureComponent {
    componentDidMount() {
        this.props.fetchDataFrom('https://api.punkapi.com/v2/beers/random');
    }
    render() {
        const {isLoading, hasErrored, name, food} = this.props;
        const foodItems = food.map((item, i) => <li key={i}>{item}</li>);
        return (
            <div className='beer'>
                {isLoading ? <p>Loading...</p> : null}
                {hasErrored ? <p>Data did not load, try again.</p> :
                (<div>
                    <h2>{name}</h2>
                    <span>Drink it with:</span>
                    <ul>{foodItems}</ul>
                </div>)}
            </div>
        );
    }
};

const mapStateToProps = (state, {id}) => ({
    isLoading: state.beers[id].isLoading,
    hasErrored: state.beers[id].hasErrored,
    name: state.beers[id].name,
    food: state.beers[id].food
});

const mapDispatchToProps = (dispatch, {id}) => ({
    fetchDataFrom: (url) => dispatch(getMeABeer(url, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Beer);

import React from 'react';
import { connect } from 'react-redux';
import { getBeerFromFridge } from '../actions';
import Name from './Name';
//______________________________________________________________________________


class Search extends React.Component {
    constructor() {
        super();
        this.state = {search: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({search: e.target.value});
    }

    handleSubmit() {
        this.props.clearResults();
        this.props.askBartenderFor(this.state.search);
    }

    render() {
        // TODO extract all this and make a new component that will receive the search word as a prop
        // TODO it will handle the request itself, and take care of pagination
        const results = this.props.searchResult.map(
            resultId => {
            if (resultId === 'NOPENOPENOPE') {
                return <span key={resultId}>Cannot drink beer with that!</span>;
            } else {
                return <Name key={resultId} id={resultId} />;
            }});

        return (
            <fieldset className="search">
                <legend>Recommend Beers based on Food</legend>
                <input value={this.state.search} onChange={this.handleChange} placeholder="eg: burger" />
                <button onClick={this.handleSubmit}>Submit</button>
                {results}
            </fieldset>
        );
    }
}



const mapStateToProps = (state) => ({
    searchResult: state.searchResult
});

const mapDispatchToProps = (dispatch) => ({
    askBartenderFor: (foodName) => dispatch(
        getBeerFromFridge(`https://api.punkapi.com/v2/beers?food=${foodName}&page=1&per_page=5`)
    ),
    clearResults: () => dispatch({type: "CLEAR_RESULTS"})
});


export default connect(mapStateToProps, mapDispatchToProps)(Search);

import React from 'react';
import { connect } from 'react-redux';
import { newSearchWord } from './actions';
import Pagination from './Pagination/';
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
        this.props.startSearch(this.state.search);
        this.setState({search: ''});
    }

    render() {
        return (
            <fieldset className="search">
                <legend>Recommend Beers based on Food</legend>
                <input value={this.state.search} onChange={this.handleChange} placeholder="eg: burger" />
                <button onClick={this.handleSubmit}>Submit</button>
                <Pagination />
            </fieldset>
        );
    }
}


const mapDispatchToProps = (dispatch) => ({
    startSearch: searchWord => dispatch(newSearchWord(searchWord))
});


export default connect(null, mapDispatchToProps)(Search);

import React from 'react';
import { connect } from 'react-redux';
import { newSearchWord } from './actions';
//______________________________________________________________________________


class SearchInput extends React.Component {
    constructor() {
        super();
        this.state = {searchWord: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({searchWord: e.target.value});
    }

    handleSubmit(e) {
        // if key pressed is Enter/Return
        if (e.keyCode === 13) {

          const {searchWord} = this.state;
             //regex.test to make sure the input starts with a non-whitespace character
            if (/^\S+/.test(searchWord)) {
                this.props.startSearch(searchWord);
            }
            this.setState({searchWord: ''});
            // e.target.blur();
        }
    }

    render() {
        return (
            <fieldset>
                <legend>Recommend Beers based on Food</legend>
                <input
                    value={this.state.searchWord}
                    onChange={this.handleChange}
                    onKeyDown={this.handleSubmit}
                    placeholder="eg: burger"
                />
            </fieldset>
        );
    }
}


const mapDispatchToProps = (dispatch) => ({
    startSearch: searchWord => dispatch(newSearchWord(searchWord))
});


export default connect(null, mapDispatchToProps)(SearchInput);

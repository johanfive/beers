import React from 'react';
import { connect } from 'react-redux';
import { askForRecommendations } from './actions';
import Name from '../../Name';
//______________________________________________________________________________


class Results extends React.Component {
    componentDidUpdate() {
        const {fetchedOnce, searchWord, getResults} = this.props;
        if (!fetchedOnce) {
            getResults(searchWord);
        }
    }

    render() {
        const {resultIds, searchWord} = this.props;
        let outcome;

        if (searchWord && resultIds.length === 0) {
            outcome = "Cannot drink beer with that!";
        } else {
            outcome = resultIds.map(id => <Name key={id} id={id} />);
        }

        return <div>{outcome}</div>;
    }
};



const mapStateToProps = (state, {page}) => ({
    fetchedOnce: state.search.pagination[page].fetchedOnce,
    searchWord: state.search.searchWord,
    resultIds: state.search.pagination[page].results
});

const mapDispatchToProps = (dispatch, {page}) => ({
    getResults: searchWord => dispatch(askForRecommendations(searchWord, page))
});
// Todo: maybe dispatch something on Unmount to clear search data?

export default connect(mapStateToProps, mapDispatchToProps)(Results);

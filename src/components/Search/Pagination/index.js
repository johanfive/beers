import React from 'react';
import { connect } from 'react-redux';
import Results from '../Results/';
import { increment, decrement } from './actions';
//______________________________________________________________________________


const Pagination = ({totalPages, page, prev, next}) => (
    <div>
        {page === 1 ? null : <button onClick={prev}>Prev</button>}
        <Results page={page} />
        {totalPages > page ? <button onClick={next}>Next</button> : null}
        {totalPages > 2 ? <span>{page}</span> : null}
    </div>
);




const mapStateToProps = state => ({
    page: state.search.currentPage,
    totalPages: Object.keys(state.search.pagination).length
});

const mapDispatchToProps = (dispatch) => ({
    next: () => dispatch(increment()),
    prev: () => dispatch(decrement())
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);

import React from 'react';
import { connect } from 'react-redux';
import Results from '../Results/';
import { increment, decrement } from './actions';
//______________________________________________________________________________


const Pagination = ({totalPages, page, prev, next}) => (
    <div>
        <Results page={page} />
        {totalPages > 2 ? <span style={{float: "left"}}>{page}</span> : null}
        {page === 1 ? null : <button style={{float: "left"}} onClick={prev}>Prev</button>}
        {totalPages > page ? <button style={{float: "right"}} onClick={next}>Next</button> : null}
    </div>
);



const mapStateToProps = state => ({
    page: state.search.pagination.currentPage,
    totalPages: Object.keys(state.search.pagination).length - 1
});


const mapDispatchToProps = (dispatch) => ({
    next: () => dispatch(increment()),
    prev: () => dispatch(decrement())
});


export default connect(mapStateToProps, mapDispatchToProps)(Pagination);

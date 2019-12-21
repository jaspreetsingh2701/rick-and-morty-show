import React from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const PaginationView = ({ onNextPagination, onPrevPagination, nextPagination, prevPagination }) => {
    const isPrevDisabled = prevPagination.length === 0,
        isNextDisabled = nextPagination.length === 0;
    return (
        <Grid>
            <IconButton onClick={onPrevPagination} aria-label="next page" disabled={isPrevDisabled}>
                <ArrowBackIcon color={isPrevDisabled ? "disabled" : "primary"} />
            </IconButton>
            <IconButton onClick={onNextPagination} aria-label="next page" disabled={isNextDisabled}>
                <ArrowForwardIcon color={isNextDisabled ? "disabled" : "primary"} />
            </IconButton>
        </Grid>
    );
}

export default PaginationView;


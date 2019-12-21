import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { sortingParams } from './../utils/constants';

const FilterSort = ({ sortChange, sortingType, speciesFilter, genderFilter }) => {
    return (
        <form noValidate autoComplete="off">
            <div>
                <TextField
                    id="sortByID"
                    select
                    label="Select"
                    value={sortingType}
                    onChange={sortChange}
                >
                    <MenuItem key={sortingParams.ASCENDING} value={sortingParams.ASCENDING}>
                        {sortingParams.ASCENDING}
                    </MenuItem>
                    <MenuItem key={sortingParams.DESCENDING} value={sortingParams.DESCENDING}>
                        {sortingParams.DESCENDING}
                    </MenuItem>
                </TextField>
            </div>
        </form>
    );
}

export default FilterSort;


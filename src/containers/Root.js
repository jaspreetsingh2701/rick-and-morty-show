import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Header from '../components/Header';
import Loader from '../components/Loader';
import CharacterList from '../components/CharacterList';
import FilterSort from '../components/FilterSort';
import PaginationView from '../components/PaginationView';
import { getCharacters, getFilterCharacters, getPaginateCharacters } from '../utils/api-service';
import { sortByDescending, sortByAscending } from '../utils/util-service';
import { sortingParams } from '../utils/constants';
import Filters from '../components/Filters';

const style = {
    boxWrapper: {
        paddingTop: '80px',
    },
    actionsWrapper: {
        padding: '15px 18px 0 18px',
    }
};

class Root extends Component {
    constructor() {
        super()
        this.state = {
            loaded: false,
            searchfield: '',
            characterList: [],
            filteredCharacters: [],
            nextPagination: '',
            prevPagination: '',
            sortingType: sortingParams.ASCENDING,
            speciesFilter: '',
            genderFilter: '',
            species: ['human', 'mythology', 'alien'],
            gender: ['male', 'female', 'unknown'],
            origin: ['earth (c-137)', 'earth (replacement dimension)', 'abadango', 'unknown'],
        }
    }

    componentDidMount() {
        this.fetchDetail();
    }

    render() {
        const { loaded, sortingType, searchfield, nextPagination, prevPagination, species, gender, origin } = this.state;
        return (
            <>
                <Header searchChange={this.onSearchChange} searchValue={searchfield} />
                <div style={style.boxWrapper}>
                    <Filters species={species} gender={gender} origin={origin} handleFilterChanges={this.handleFilterChanges} fetchFilteredCharacters={this.fetchFilteredCharacters} />
                    <div style={style.actionsWrapper}>
                        <Grid
                            container
                            direction="row"
                            alignItems="center"
                            justify="space-between">
                            {loaded ? (
                                <FilterSort sortingType={sortingType} sortChange={this.onSortChange}
                                    speciesFilter={this.onSpeciesFilter} genderFilter={this.onGenderFilter} />) : <></>}
                            {loaded ? (
                                <PaginationView className={'text-center'} onNextPagination={this.onNextPagination} onPrevPagination={this.onPrevPagination}
                                    nextPagination={nextPagination} prevPagination={prevPagination} />) : <></>}
                        </Grid>
                    </div>
                    {loaded ? (<CharacterList characters={this.getFilterCharacter()} />) : (<Loader />)}
                </div>
            </>
        );
    }

    fetchFilteredCharacters = () => {
        const { characterList, species, gender, origin } = this.state;
        const speciesKeys = species, genderKeys = gender, originKeys = origin;
        let characters = characterList.filter(item => {
            return speciesKeys.includes(item.species.toLowerCase()) && genderKeys.includes(item.gender.toLowerCase()) && originKeys.includes(item.origin.name.toLowerCase());
        });
        this.setState({ filteredCharacters: characters });
    };

    handleFilterChanges = (filterType, name) => event => {
        // let species = { ...this.state.species };
        // species[name] = event.target.checked;
        // this.setState({ species });
        let { species, gender, origin } = this.state;
        if (filterType === 'species') {
            if (event.target.checked) {
                species.push(name);
            }
            else {
                species.splice(species.indexOf(name), 1);
            }
        }
        else if (filterType === 'gender') {
            if (event.target.checked) {
                gender.push(name);
            }
            else {
                gender.splice(gender.indexOf(name), 1);
            }
        }
        else if (filterType === 'origin') {
            if (event.target.checked) {
                origin.push(name);
            }
            else {
                origin.splice(origin.indexOf(name), 1);
            }
        }
        this.setState({ species, gender, origin });
    };

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    getFilterCharacter = () => {
        const { searchfield, loaded, filteredCharacters } = this.state;
        let { characterList } = this.state;
        let list = [];
        let finalCharacters = characterList;
        if (filteredCharacters.length > 0) {
            finalCharacters = filteredCharacters;
        }
        if (loaded) {
            list = finalCharacters.filter(character => {
                return character.name.toLowerCase().includes(searchfield.toLowerCase());
            });
            list = this.sortData(list);
        }
        return list;
    }

    fetchDetail = () => {
        getCharacters().then(data => this.setStateDetail(data));
    }

    fetchFilteredDetail = (speciesFilter, genderFilter) => {
        getFilterCharacters(speciesFilter, genderFilter).then(data => {
            this.setState({ speciesFilter: speciesFilter, genderFilter: genderFilter });
            this.setStateDetail(data);
        });
    }

    fetchPaginateCharacters = (url) => {
        getPaginateCharacters(url).then(data => this.setStateDetail(data))
    }

    onSpeciesFilter = (event) => {
        const { genderFilter } = this.state;
        let value = event.target.value;
        this.fetchFilteredDetail(value, genderFilter);

    }

    onGenderFilter = (event) => {
        const { speciesFilter } = this.state;
        let value = event.target.value;
        this.fetchFilteredDetail(speciesFilter, value);
    }

    onNextPagination = () => {
        const { nextPagination } = this.state;
        this.fetchPaginateCharacters(nextPagination);
    }

    onPrevPagination = () => {
        const { prevPagination } = this.state;
        this.fetchPaginateCharacters(prevPagination);
    }

    onSortChange = (event) => {
        this.setState({ sortingType: event.target.value });
    };

    setStateDetail = (data) => {
        this.setState({
            characterList: data.results ? data.results : [],
            nextPagination: data.info ? data.info.next : '',
            prevPagination: data.info ? data.info.prev : '',
            searchfield: '',
            loaded: true
        })
    }

    sortData = (list) => {
        const { sortingType } = this.state;
        let tempCharacters = list;
        if (list && list.length > 0) {
            if (sortingType === sortingParams.DESCENDING) {
                tempCharacters = sortByDescending(list);
            }
            else tempCharacters = sortByAscending(list);
        }
        return tempCharacters;
    }

}

export default Root;

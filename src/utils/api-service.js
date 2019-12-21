const BASE_URL = 'https://rickandmortyapi.com/api/character/';
const SPECIES_FILTER = '?species=';
const SPECIES_GENDER = '&gender=';

export const getCharacters = () => {
    return fetch(BASE_URL).then(result => {
        return result.json()
    });
};

export const getFilterCharacters = (species, gender) => {
    let url = BASE_URL + SPECIES_FILTER + species + SPECIES_GENDER + gender;
    return fetch(url).then(result => {
        return result.json()
    });
};

export const getPaginateCharacters = (url) => {
    return fetch(url).then(result => {
        return result.json()
    });
};

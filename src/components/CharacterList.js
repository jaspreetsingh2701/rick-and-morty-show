import React from 'react';
import Grid from '@material-ui/core/Grid';
import Character from './Character';

const style = {
    boxWrapper: {
        marginTop: '15px',
        background: 'black',
    },
};

const CharacterList = ({ characters }) => {
    const [spacing] = React.useState(2);

    return (
        <div style={style.boxWrapper}>
            <Grid container justify="center" spacing={spacing}>
                {characters.map(character => (
                    <Character
                        key={character.id}
                        id={character.id}
                        name={character.name}
                        image={character.image}
                        createdDate={character.created}
                        status={character.status}
                        species={character.species}
                        gender={character.gender}
                        origin={character.origin}
                        location={character.location}
                    />
                ))}
            </Grid>
        </div>
    );
}

export default CharacterList;
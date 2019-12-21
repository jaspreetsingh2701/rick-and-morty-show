import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Divider from '@material-ui/core/Divider';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Filters = ({ species, gender, origin, handleFilterChanges, fetchFilteredCharacters }) => {
    return (
        <Grid>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography variant="subtitle1">Filters</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">
                            <Typography variant="caption">By Species</Typography>
                        </FormLabel>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox checked={species.includes('human')} onChange={handleFilterChanges('species', 'human')} value="human" />}
                                label={<Typography variant="caption">Human</Typography>}
                            />
                            <FormControlLabel
                                control={<Checkbox checked={species.includes('mythology')} onChange={handleFilterChanges('species', 'mythology')} value="mythology" />}
                                label={<Typography variant="caption">Mythology</Typography>}
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox checked={species.includes('alien')} onChange={handleFilterChanges('species', 'alien')} value="alien" />
                                }
                                label={<Typography variant="caption">Alien</Typography>}
                            />
                        </FormGroup>
                    </FormControl>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">
                            <Typography variant="caption">By Gender</Typography>
                        </FormLabel>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox checked={gender.includes('male')} onChange={handleFilterChanges('gender', 'male')} value="male" />}
                                label={<Typography variant="caption">Male</Typography>}
                            />
                            <FormControlLabel
                                control={<Checkbox checked={gender.includes('female')} onChange={handleFilterChanges('gender', 'female')} value="female" />}
                                label={<Typography variant="caption">Female</Typography>}
                            />
                            <FormControlLabel
                                control={<Checkbox checked={gender.includes('unknown')} onChange={handleFilterChanges('gender', 'unknown')} value="unknown" />}
                                label={<Typography variant="caption">Unknown</Typography>}
                            />
                        </FormGroup>
                    </FormControl>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">
                            <Typography variant="caption">By Origin</Typography>
                        </FormLabel>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox checked={origin.includes('earth (c-137)')} onChange={handleFilterChanges('origin', 'earth (c-137)')} value="earth (c-137)" />}
                                label={<Typography variant="caption">Earth (C-137)</Typography>}
                            />
                            <FormControlLabel
                                control={<Checkbox checked={origin.includes('earth (replacement dimension)')} onChange={handleFilterChanges('origin', 'earth (replacement dimension)')} value="earth (replacement dimension)" />}
                                label={<Typography variant="caption">Earth (Replacement Dimension)</Typography>}
                            />
                            <FormControlLabel
                                control={<Checkbox checked={origin.includes('abadango')} onChange={handleFilterChanges('origin', 'abadango')} value="abadango" />}
                                label={<Typography variant="caption">Abadango</Typography>}
                            />
                            <FormControlLabel
                                control={<Checkbox checked={origin.includes('unknown')} onChange={handleFilterChanges('origin', 'unknown')} value="unknown" />}
                                label={<Typography variant="caption">Unknown</Typography>}
                            />
                        </FormGroup>
                    </FormControl>
                </ExpansionPanelDetails>
                <Divider />
                <ExpansionPanelActions>
                    <Button variant="contained" color="primary" onClick={fetchFilteredCharacters}>Apply</Button>
                </ExpansionPanelActions>
            </ExpansionPanel>
        </Grid>
    );
}

export default Filters;
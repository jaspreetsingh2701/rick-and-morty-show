import React from 'react';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { getYearsDifference } from '../utils/util-service';

const useStyles = makeStyles(theme => ({
    card: {
        width: 255,
        maxWidth: 255,
    },
}));

const style = {
    characterImgContainer: {
        position: 'relative',
    },
    imgTextWrapper: {
        position: 'absolute',
        background: 'black',
        opacity: .5,
        bottom: 0,
        height: 80,
        width: '100%',
    },
    imgDataWrapper: {
        position: 'absolute',
        bottom: 0,
        margin: 15,
    },
    imgName: {
        color: 'white',
        fontSize: '18px',
    },
    imgMetaData: {
        color: 'white',
        fontSize: '14px',
    },
    contentWrapper: {
        background: '#2e2e2e',
        color: 'white',
        border: '1px solid #454545',
    },
    labelStyle: {
        // flex: 'unset',
        // width: '100px',
    },
};

const Character = ({ name, id, image, createdDate, status, gender, origin, species, location }) => {
    const classes = useStyles();
    return (
        <Box m={2}>
            <Card className={classes.card}>
                <div style={style.characterImgContainer}>
                    <CardMedia
                        className={classes.media}
                        component="img"
                        image={image}
                        title={name}
                    />
                    <div style={style.imgTextWrapper}></div>
                    <div style={style.imgDataWrapper}>
                        <div style={style.imgName}>{name}</div>
                        <div style={style.imgMetaData}>ID: {id}&nbsp;-&nbsp;{`Created: ${getYearsDifference(createdDate)} years ago`}</div>
                    </div>
                </div>
                <CardContent style={style.contentWrapper}>
                    <List>
                        <ListItem>
                            <ListItemText
                                style={style.labelStyle}
                                primary={<Typography variant="caption">STATUS</Typography>}
                                secondary={<Typography variant="body2">{status}</Typography>}
                            />
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <ListItemText
                                style={style.labelStyle}
                                primary={<Typography variant="caption">SPECIES</Typography>}
                                secondary={<Typography variant="body2">{species}</Typography>}
                            />
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <ListItemText
                                style={style.labelStyle}
                                primary={<Typography variant="caption">GENDER</Typography>}
                                secondary={<Typography variant="body2">{gender}</Typography>}
                            />
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <ListItemText
                                style={style.labelStyle}
                                primary={<Typography variant="caption">ORIGIN</Typography>}
                                secondary={<Typography variant="body2">{origin.name}</Typography>}
                            />
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <ListItemText
                                style={style.labelStyle}
                                primary={<Typography variant="caption">LAST LOCATION</Typography>}
                                secondary={<Typography variant="body2">{location.name}</Typography>}
                            />
                        </ListItem>
                    </List>
                </CardContent>
            </Card>
        </Box>
    );
}

export default Character;

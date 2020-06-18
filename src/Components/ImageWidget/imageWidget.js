import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
      },
      gridList: {
        maxWidth: "100vh",
        height: 200,
        display: 'flex',
        flexDirection: 'row'
      },
      icon: {
        color: 'rgba(255, 255, 255, 0.54)',
      },
}))


export default function ImageWidget (props){
    const { tileData } = props;
    const classes = useStyles();
    return (
        <div className={classes.root}>
                <GridList cellHeight='auto' cols={tileData.length} className={classes.gridList}>
            {/* <GridListTile key="Subheader" cols={1} style={{ height: 'auto' }}>
            <ListSubheader component="div">Your Images</ListSubheader>
            </GridListTile> */}
            {tileData.map((tile) => (
            <GridListTile key={tile} style={{ height: '100px', width: '150px' }}>
                <img src={tile} alt="image" />
                <GridListTileBar
                actionIcon={
                    <IconButton aria-label={`info about image`} className={classes.icon}>
                    <DeleteForeverIcon />
                    </IconButton>
                }
                />
            </GridListTile>
        ))}
      </GridList>
        </div>
    )
}
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import './Navbar.scss';

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #037DFF 30%, #03FFD1 90%)',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
});

export default function Navbar() {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Home" icon={<HomeIcon />} />
            <BottomNavigationAction label="Sign out" icon={<ExitToAppIcon />} />
        </BottomNavigation>
    );
}

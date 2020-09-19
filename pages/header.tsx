import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    header: {
        display: 'flex',
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white !important',
        color: '#000'
    },
    logo: {
        fontSize: '1.2rem'
    },
    menu: {
        display: 'flex',
        justifyContent: 'space-between',
        flex: 1,
        padding: '0 2rem'
    },
    button: {
        margin: '0 0.5rem'
    }
}));

export const Header = () => {
    const classes = useStyles();

    return (
        <AppBar className={classes.header}>
            <Toolbar>
                <h1 className={classes.logo}>Translate App</h1>
                <div className={classes.menu}>
                    <div>
                        <Button className={classes.button}>Translate</Button>
                        <Button className={classes.button}>History</Button>
                    </div>
                    <div>
                        <Button className={classes.button} variant="outlined" color="primary">Login</Button>
                        <Button className={classes.button} variant="contained" color="primary" disableElevation>Sign up</Button>
                    </div>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header;

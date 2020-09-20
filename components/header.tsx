import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            width: '100%'
        },
        flexContainer: {
            display: 'flex',
            flexGrow: 1,
            justifyContent: 'space-between'
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        menuItem: {
            padding: '0.1rem 1.8rem'
        },
        sectionDesktop: {
            display: 'none',
            [theme.breakpoints.up('md')]: {
                display: 'flex',
                flexGrow: 1,
                justifyContent: 'space-between',
                marginLeft: '1rem'
            },
        },
        sectionMobile: {
            display: 'flex',
            [theme.breakpoints.up('md')]: {
                display: 'none',
            },
        }
    }),
);

export default function Header() {
    const classes = useStyles();
    
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);
    
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    
    const mobileMenuId = 'mobile-menu';
    
    const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);
    
    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => setMobileMoreAnchorEl(event.currentTarget);

    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}>
            <MenuItem className={classes.menuItem}>
                <p>Translate</p>
            </MenuItem>
            <MenuItem className={classes.menuItem}>
                <p>History</p>
            </MenuItem>
            <MenuItem className={classes.menuItem}>
                <p>Profile</p>
            </MenuItem>
            <MenuItem className={classes.menuItem}>
                <p>Logout</p>
            </MenuItem>
        </Menu>
    );

    return (
        <>
            <AppBar position="fixed" color="default">
                <Toolbar className={classes.flexContainer}>
                    <Typography variant="h6">
                        Translate App
                    </Typography>
                    <div className={classes.sectionDesktop}>
                        <div>
                            <Button className={classes.menuButton}>Translate</Button>
                            <Button className={classes.menuButton}>History</Button>
                        </div>
                        <div>
                            <Button className={classes.menuButton} variant="outlined" color="primary">Login</Button>
                            <Button variant="contained" color="primary" disableElevation>Sign up</Button>
                        </div>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit">
                            <MenuIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </>
    );
}

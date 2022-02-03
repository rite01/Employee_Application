import { AppBar, Toolbar, Grid, InputBase, IconButton, Badge } from '@material-ui/core';
import React from 'react';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles ({
    root: {
        backgroundColor:'#fff',
        transform:'translateZ(0)'
    },
    searchInput:{
        opacity:'0.6',
        padding:'0px 8px',
        fontSize:'0.8rem',
        '&:hover':{
            backgroundColor:'#f2f2f2'
        }
    }
})


export default function Header() {
    
    const classes = useStyles();

  return (
      <AppBar className={classes.root} position='static'>
            <Toolbar>
                <Grid container alignItems='center'>
                    <Grid item> 
                        <InputBase
                        placeholder='write something'
                        className={classes.searchInput}
                        startAdornment={<SearchIcon />}
                        />
                    </Grid>

                    <Grid item sm></Grid>

                    <Grid item>
                        <IconButton>
                            <Badge badgeContent={3} color='secondary'>
                                <NotificationsNoneIcon />
                            </Badge>
                        </IconButton>

                        <IconButton>
                            <Badge badgeContent={4} color='primary'>
                                <ChatBubbleOutlineIcon />
                            </Badge>
                        </IconButton>

                        <IconButton>
                            <Badge >
                                <PowerSettingsNewIcon />
                            </Badge>
                        </IconButton>

                    </Grid>
                </Grid>        
            </Toolbar>
        </AppBar>
  );
}

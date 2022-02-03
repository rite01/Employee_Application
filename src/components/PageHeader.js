import { Paper, Card, Typography, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
    root:{
        backgroundColor:'#fdfdff'
    },
    pageHeader:{
        padding:theme.spacing(4),
        display:'flex',
        marginBottom:theme.spacing(2)
    },
    pageIcon:{
        display:'inline-block',
        padding:theme.spacing(2),
        color:'#070b1e'
    },
    pagetitle:{
        paddingLeft:theme.spacing(4)
    }
}))


export default function PageHeader(props) {
    
    const {title, subtitle, icon} = props;
    const classes = useStyles();
    return (
      <Paper elevation={0} square className={classes.root}>
        <div className={classes.pageHeader}> 
            <Card className={classes.pageIcon}>
                {icon}
            </Card>

            <div className={classes.pagetitle}>
                <Typography 
                    variant='h6'
                    component='div'>
                    {title}
                </Typography>

                <Typography 
                    variant='subtitle2'
                    component='div'>
                    {subtitle}
                </Typography>
            </div>

        </div>
      </Paper>
  );
}

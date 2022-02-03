import { Dialog, DialogContent, DialogTitle, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Controls from './Cont/Controls'
import CloseIcon from '@mui/icons-material/Close';

const useStyles = makeStyles(theme => ({
    dialogWrapper:{
        padding:theme.spacing(4),
        position:'absolute',
        top:theme.spacing(5)
    }
    
}))

export default function Popup(props) {

    const {title, children,openPopup,setOpenPopup} = props;
    const classes = useStyles();

    return (
        <Dialog open={openPopup} maxWidth="md" classes={{ paper :classes.dialogWrapper }}>
            <DialogTitle padding='0px'> 
                <div style={{display:'flex'}}>
                    <Typography variant="h5" component="div" style={{flexGrow:1}}>
                        {title}
                    </Typography>
                    <Controls.ActionButton 
                   
                    color='secondary'
                    onClick={()=>{setOpenPopup(false)}}>
                    <CloseIcon />

                    </Controls.ActionButton>
                </div>
            </DialogTitle>
            <DialogContent dividers>
                {children} 
            </DialogContent>
        </Dialog>
    );
}

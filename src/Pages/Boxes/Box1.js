import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    r2c1first:{
        width:'70%',
        height:'200px',
        //border:'1px solid grey',
        boxSizing:'border-box',
        margin:'0 auto',
        boxShadow: '0 10px 6px -6px #777',
        backgroundColor:'#98A7C7'
    },
    papergen:{
        textAlign:'center',
        height:'40px',
        backgroundColor:'#98A7C7',
        borderRadius:'0px',
        margin:'5px',
        border:'1px solid #2f4577',
        color:'#2f4577',
        boxSizing:'border-box',
        padding:'5px',
        fontSize:'20px',
    },
    actionbox:{
        backgroundColor:'#2f4577',
        textAlign:'center',
        height:'40px',
        borderRadius:'0px',
        color:'white',
        marginTop:'5px'
    },


}));

const Box1 = () => {

    const classes = useStyles();

    return(
        <Grid item container direction="column" className={classes.r2c1first}>
            <Paper elevation={0} className={classes.actionbox}>ACTIONS</Paper>
            <Paper elevation={0} className={classes.papergen}>DELETE</Paper>
            <Paper elevation={0} className={classes.papergen}>EDIT</Paper>
            <Paper elevation={0} className={classes.papergen}>IS ACTIVE</Paper>
        </Grid>
    )
}

export default Box1
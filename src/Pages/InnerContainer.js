import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Main from './Table/Main.js';
import Box1 from './Boxes/Box1.js';
import Box2 from './Boxes/Box2.js';

const useStyles = makeStyles((theme) => ({
      maincont:{
        width: '95%',
        margin: '0 auto',
        boxSizing:'border-box'
      },
      mainfirst:{
          width:'100%',
          display:'flex',
          justifyContent:'space-between',
          margin:'10px'
      },
      mainfirstbox1:{
        marginLeft:'43px',
        boxSizing:'border-box'
      },
      mainfirstbox2:{
        marginTop:'15px'
      },
      mainfirstbox2button:{
        backgroundColor:'#2f4577',
        color:'white',
        borderRadius:'0px'
      },
      mainsecond:{
        marginTop:'10px'
      },
      r2c1:{
        width:'30%',
        height:'800px'
      },
      r2c2:{
        width:'70%',
        height:'800px'
      },
      r2c1second:{
          width:'97%',
          height:'400px'
      }  
}));

const InnerContainer = () => {

    const classes = useStyles();

    return(
        <Grid container xs={12} className={classes.maincont}>

            <Grid item container className={classes.mainfirst}>
                <Paper elevation={0} className={classes.mainfirstbox1}><h2>PARTNER COMPANIES</h2></Paper>
                <Paper elevation={0} className={classes.mainfirstbox2}><Button className={classes.mainfirstbox2button}>Create New Company</Button></Paper>
            </Grid>

            <Grid item container direction="row"  className={classes.mainsecond}>
                <Grid className={classes.r2c1}>
                    <Box1 />
                    <Box2 />
                </Grid>
                <Grid className={classes.r2c2}>
                    <Main />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default InnerContainer;
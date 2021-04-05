import React, { Component } from 'react';
import { Grid } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Inputbox from './Inputbox'

const styles = theme => ({
    outerinputcontain: {
        padding: '5px',
        border: '1px solid #C8C8C8'
    },
    innerinputcontain:{
        width:'100%',
        border:'1px solid #C8C8C8',
        borderRadius:'0px'
    }
});



class Generalinfo extends Component{
    state = {
        placetextleft:['Brand', 'Type', 'Yes', 'Office Chair'],
        placetextright:['Knock Down', 'Stellar', 'Device Location', 'ABC']
    }
    render(){
        const { classes } = this.props;

        let inside = (this.state.placetextleft.map((text) =>{
            return (<Grid item container xs={12} className={classes.outerinputcontain}>
                <Paper className={classes.innerinputcontain} elevation={0}>
                    <Inputbox name={text}/>
                </Paper>
            </Grid>)
        }));

        return(
            <Grid container xs={12}>
                <Grid container item xs={6} className={classes.colgrid}>
                    {inside}
                </Grid>
                <Grid container item xs={6} className={classes.colgrid}>
                    {inside}
                </Grid>
            </Grid>
        );
    }
}

Generalinfo.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Generalinfo);
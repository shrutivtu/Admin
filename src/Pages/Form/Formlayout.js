import React, { Component } from 'react';
import './Form.css';
import { Grid } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
//import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Generalinfo from './Generalinfo.js';

import Inputbox from './Inputbox.js';

const styles = theme => ({
    formcontainer: {
        width: '90%',
        margin: '0px auto',
        border: '1px solid black',
        backgroundColor: '#E4E4E4',
    },
    paper: {
      padding: theme.spacing(5),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    linebreak:{
        width:'100%',
        height:'20px'

    },
    g1p1:{
      width: '20%',
      backgroundColor: '#E4E4E4',
      marginRight:'4%',
      display: 'flex',
      flexDirection:'column'
    },
    g1p2: {
        width: '25%',
        backgroundColor: '#E4E4E4',
        marginRight: '0',
        display: 'flex',
        flexDirection: 'column'
    },
    g1p3: {
        width: '25%',
        backgroundColor: '#E4E4E4',
        marginTop: '19px',
        marginRight: '2%',
        display: 'flex',
        flexDirection: 'column'
    },
    input_style:{
      border: '1px solid black',
      width:'140px',
      height:'30px',
      borderRadius: 0
    },
    dropdowncontain:{
        
    },
    selectstyle:{
        backgroundColor:'white'
    },
    formControl: {  
        minWidth: '170px',
        height: '20px',
        backgroundColor:'white'
    },
    formControlg1p3: {
        minWidth: '190px'
    },
    formcontrolinp: {
        backgroundColor:'white'
    },
    g1p4:{
        width: '20%',
        backgroundColor: '#E4E4E4',
        
    },
    g2: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            //margin: theme.spacing(2),
            //width: theme.spacing(16),
            //height: theme.spacing(16),
          },
        justifyContent: 'space-between'
    },
    g2row:{
        display:'flex',
    },
    g2p1: {
        width: '17%',
        backgroundColor: '#E4E4E4',
        //border: '1px solid black',
        marginRight: '10px'
    },
    g2p2:{
        marginLeft:'50px'
    },
    g2slidedown: {
        marginTop:'10px'
    },
    g3r1:{
        display:'flex',
        justifyContent:'flex-start',
    },
    g3r2:{
        //width:'50%',
        display: 'flex',
        justifyContent:'flex-start',
    },
    g3r1p1:{
        width:'25%',
        //backgroundColor: '#E4E4E4',
        marginRight:'10px'
    },
    g3r2p1:{
        width:'25%',
        marginRight: '10px',
    },
    g4:{
        display:'flex',
        justifyContent:'space-between',
        marginLeft:'10px',
        marginTop:'10px',
    },
    g4p1:{
        width: '100px',
        height:'100px',
        border: '1px solid black',
        borderRadius: '0px'
    },
    g4p2:{
        width: '200px',
        height:'100px',
    },
    g5:{
        display:'flex',
        justifyContent:'center',
        marginTop:'10px',
        borderRadius:'0px'
    },
    g5p1:{
        width:'200px',
        height: '150px',
        marginRight:'10px'
    },
    g5p2:{
        width:'300px',
        height:'100px',
        marginRight:'10px'
    },
    g5p3:{
        width:'500px',
        height:'150px'
    }
  });



class Formlayout extends Component{
    state = {
        primcategory: 'A',
        value:'female',
    };
    
    handleChange = () => {
        console.log('clicked')
    }

    render(){
        const { classes } = this.props;
        return(
            <Grid container className={classes.formcontainer} xs={12} spacing={2}>
                
                <Grid container item xs={12}>
                    <Paper className={classes.paper, classes.g1p1} elevation={0}>
                        <div style={{marginBottom: '5px'}}><label style={{color:'#7D7D7D'}}>Product Name</label></div>
                        <div className={classes.input_style}>
                            <Inputbox name='Product Name' />
                        </div>
                    </Paper>
                    <Paper className={classes.paper, classes.g1p2} elevation={0}>
                        <div style={{marginBottom: '5px'}}>
                            <label style={{color:'#7D7D7D'}}>Product Category</label>
                        </div>
                        <div className={classes.dropdowncontain}> 
                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel htmlFor="outlined-age-native-simple" className={classes.formcontrolinp}>Primary Category</InputLabel>
                                <Select
                                    native
                                    value={this.state.primcat}
                                    onChange={this.handleChange}
                                    label="Age"
                                    inputProps={{
                                        name: 'age',
                                        id: 'outlined-age-native-simple',
                                        className: 'input_style, selectstyle'
                                    }}
                                    >
                                    <option aria-label="None" value="" />
                                    <option value={10}>Ten</option>
                                    <option value={20}>Twenty</option>
                                    <option value={30}>Thirty</option>
                                </Select>
                            </FormControl>
                        </div>
                    </Paper>
                    <Paper className={classes.paper,classes.g1p3} elevation={0}>
                        <div style={{marginBottom: '5px'}}>
                            {/* <label style={{color:'#7D7D7D'}}></label> */}
                        </div>
                        <div>
                            <FormControl variant="outlined" className={classes.formControl, classes.formControlg1p3}>
                                <InputLabel htmlFor="outlined-age-native-simple">Secondary Category</InputLabel>
                                <Select
                                    native
                                    value={this.state.primcat}
                                    onChange={this.handleChange}
                                    label="Age"
                                    inputProps={{
                                        name: 'age',
                                        id: 'outlined-age-native-simple',
                                        className: 'input_style'
                                    }}
                                    >
                                    <option aria-label="None" value="" />
                                    <option value={10}>Ten</option>
                                    <option value={20}>Twenty</option>
                                    <option value={30}>Thirty</option>
                                </Select>
                            </FormControl>
                        </div>
                    </Paper>
                    <Paper className={classes.paper,classes.g1p4} elevation={0}>
                        <div style={{marginBottom: '5px'}}>
                            <label style={{color:'#7D7D7D'}}>Sub text</label>
                        </div>
                        <div className={classes.input_style}>
                            <Inputbox name='Product Name' />
                        </div>
                    </Paper>
                </Grid>


                <Grid container item xs={12} className={classes.g2}>
                    <div>Price</div>
                    <Grid item comtainer xs={12} className={classes.g2row}>
                        <Paper className={classes.paper, classes.g2p1} elevation={0}>
                            <Inputbox name="Price to Retailer(Type Number)"/>
                        </Paper>
                        <Paper className={classes.paper, classes.g2p1} elevation={0}>
                            <div></div>
                            <Inputbox name="Price to Retailer(Type Number)" />
                        </Paper>
                        <Paper className={classes.paper, classes.g2p1} elevation={0}>
                            <div></div>
                            <Inputbox name="Price to Retailer(Type Number)" className={classes.g2slidedown}/>
                        </Paper>
                        <Paper className={classes.paper, classes.g2p1} elevation={0}>
                            <div></div>
                            <Inputbox name="Price to Retailer(Type Number)" className={classes.g2slidedown}/>
                        </Paper>
                        <Paper className={classes.paper, classes.g2p2} elevation={0}>
                            <FormControl component="fieldset">
                            <FormLabel component="legend">Some Text</FormLabel>
                                <RadioGroup aria-label="gender" name="gender1" value={this.state.value} onChange={this.handleChange}>
                                    <FormControlLabel value="female" control={<Radio />} label="Publish" />
                                    <FormControlLabel value="male" control={<Radio />} label="Draft" />
                                </RadioGroup>
                            </FormControl>
                        </Paper>
                    </Grid>
                    
                </Grid>


                <Grid container item xs={12} className={classes.g3} spacing={2}>
                    <div style={{marginLeft:'10px'}}>Weight Details</div>
                    <Grid item xs={12} className={classes.g3r1} spacing={2}>
                        
                            <Paper className={classes.g3r1p1} elevation={0}>
                                <Inputbox name="Unit"/>
                            </Paper>
                        
                        
                            <Paper className={classes.g3r1p1} elevation={0}>
                                <Inputbox name="Unit"/>
                            </Paper>
                    
                        
                            <Paper className={classes.g3r1p1} elevation={0}>
                                <Inputbox name="Unit"/>
                            </Paper>
                             
                    </Grid>
                    <Grid item xs={12} className={classes.g3r2}>
                        <Paper elevation={0} className={classes.g3r2p1}>
                            <Inputbox name="Unit"/>
                        </Paper>
                        <Paper elevation={0} className={classes.g3r2p1}>
                            <Inputbox name="Unit"/>
                        </Paper>         
                    </Grid>
                </Grid>
                
                <div className={classes.linebreak}></div>

                <Grid container item xs={12}>

                    <div style={{marginLeft:'10px'}}>Product Pics</div>

                    <Grid item xs={12} className={classes.g4}>
                        <Paper elevation={0} className={classes.g4p1}></Paper>
                        <Paper elevation={0} className={classes.g4p1}></Paper>
                        <Paper elevation={0} className={classes.g4p1}></Paper>
                        <Paper elevation={0} className={classes.g4p1}></Paper>
                        <Paper elevation={0} className={classes.g4p2}></Paper>
                    </Grid>
                </Grid>

                <div className={classes.linebreak}></div>

                <Grid container item xs={12}>
                    <div style={{marginLeft:'10px'}}>Product Video Options</div>
                    <Grid item xs={12} className={classes.g5}>
                        <Paper elevation={0} className={classes.g5p1}></Paper>
                        <Paper elevation={0} className={classes.g5p2}></Paper>
                        <Paper elevation={0} className={classes.g5p3}></Paper>
                    </Grid>
                </Grid>

                <Grid container item xs={12}>
                    <div style={{marginLeft:'10px'}}>General Info</div>
                    <Generalinfo />
                </Grid>
                <Grid container item xs={12}>

                </Grid>
            </Grid>
        );
    }
}

Formlayout.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Formlayout);
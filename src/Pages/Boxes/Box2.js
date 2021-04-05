import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    r2c1second:{
        width:'70%',
        height:'350px',
        boxSizing:'border-box',
        margin:'0 auto',
        boxShadow: '0 10px 6px -6px #777',
        marginTop:'10px',
        backgroundColor:'#98A7C7'
    },
    firstbox:{
        backgroundColor:'#2f4577',
        textAlign:'center',
        height:'40px',
        borderRadius:'0px',
        color:'white',
        padding:'8px',
        boxSizing:'border-box',
        marginTop:'5px',
    },
    secondbox:{
        display:'flex',
        justifyContent:'space-around',
        padding:'5px',
        borderRadius:'0px',
        borderBottom:'1px solid black',
        margin:'10px',
        backgroundColor:'#98A7C7',
        color:'#2F4577',
        boxSizing:'border-box'
    },
    switch:{
        marginTop:'10px'
    },
    thirdbox:{
        height:'150px',
        width:'95%',
        margin:'5px',
        borderRadius:'0px',
        backgroundColor:'#98A7C7',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 160,
        height:'40px',
        borderRadius:'5px'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    fourthbox:{
        marginTop:'5px',
        height:'40px',
        borderRadius:'0px',
        backgroundColor:'#98A7C7',
        textAlign:'center'
    },
    fourthboxbutton:{
        width:'50%',
        height:'40px',
        backgroundColor:'#2f4577',
        borderRadius:'20px',
        color:'white'
    }
    

}));

const Box2 = () => {
    const [state1, setState1] = React.useState({
        checkedA: true,
        checkedB: true,
    });
    
    const handleChange1 = (event) => {
    setState1({ ...state1, [event.target.name]: event.target.checked });
    };

    const [state2, setState2] = React.useState({
        age: '',
        name: 'hai',
    });
    
    const handleChange2 = (event) => {
    const name = event.target.name;
    setState2({
        ...state2,
        [name]: event.target.value,
    });
    };

    const classes = useStyles();

    return(
        <Grid item container direction="column" className={classes.r2c1second}>
            <Paper className={classes.firstbox}>FILTER</Paper>
            <Paper className={classes.secondbox} elevation={0}>
                <h3>isActive</h3>
                <Switch
                checked={state1.checkedB}
                onChange={handleChange1}
                color="primary"
                name="checkedB"
                inputProps={{ 'aria-label': 'primary checkbox' }}
                className={classes.switch}
                />
            </Paper>
            <Paper elevation={0} className={classes.thirdbox}>
                <p>COMPANY NAME</p>
                <FormControl variant="filled" className={classes.formControl}>
                    <InputLabel htmlFor="filled-age-native-simple">Select Company</InputLabel>
                    <Select
                    native
                    value={state2.age}
                    onChange={handleChange2}
                    inputProps={{
                        name: 'age',
                        id: 'filled-age-native-simple',
                    }}
                    >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                    </Select>
                </FormControl>
            </Paper>
            <Paper className={classes.fourthbox} elevation={0}>
                <Button className={classes.fourthboxbutton}>APPLY FILTER</Button>
            </Paper>
        </Grid>
    )
}

export default Box2;
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    textfieldstyle: {
        width: '100%',
        height:'30px',
        "& input::placeholder": {
            fontSize: "11px",
            color: 'black',
          },
        backgroundColor: 'white',
        borderRadius: '0px'
    },
})

const Inputbox = (props) => {
    const classes = useStyles();
    //classes.textfieldstyle['color']='red'
    //console.log(classes.textfieldstyle)
    return(
        <TextField 
            variant='outlined'
            className={classes.textfieldstyle}
            placeholder={props.name}
            InputProps={{
                className: classes.textfieldstyle
            }}
        />
    )

}

export default Inputbox;
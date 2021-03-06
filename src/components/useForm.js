import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';

export function useForm(initialFValues, vlaidateOnChange=false, validate) {

    const [values, setValues] = useState(initialFValues);
    const [errors, setErrors] = useState({});


    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values, 
            [name]: value
        })
        if (vlaidateOnChange)
            validate({[name]: value})
    }

    // for reset all values

    const resetForm = () => {
        setValues(initialFValues);
        setErrors({})
    }

  return {
      values,
      setValues,
      errors,
      setErrors,
      handleInputChange,
      resetForm
  }
}



const useStyles = makeStyles(theme => ({
    root:{
        '& .MuiFormControl-root':{
            width:'80%',
            margin:theme.spacing(1)
        }
    }
}))



export function Form(props) {

    const classes = useStyles();
    const { children, ...other } = props; 

  return (
      <form className={classes.root} autoComplete='off' {...other}>
        {props.children}
        
      </form>
  )
}


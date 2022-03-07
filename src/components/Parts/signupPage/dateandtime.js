import React from 'react';
import { TextField } from '@material-ui/core';
import {useField } from 'formik'



const DateTimePicker = (
    name,
    ...otherProps
) =>{
    const [field, meta] = useField(name);

    const configDateTimePicker = {
        ...field,
        ...otherProps,
        type: 'date',
        variant: 'standard',
        fullWidth: true,
        InputLabelProps:{
            shrink:true
        }
    }
    if (meta && meta.touched && meta.error) {
        configDateTimePicker.error =true;
        // configDateTimePicker.helperText = meta.error;
    }
    return(
        <div>
            
            <TextField id = 'mobileNo'
            // label =" Date of birth"
            {...configDateTimePicker}
            />

        </div>
    )
}

export default DateTimePicker;
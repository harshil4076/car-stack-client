import React, {useState, useEffect} from 'react'
import TextField from '@material-ui/core/TextField';

const TextInput = (props) => {
    const {labelText, getTextValue, isDescription} = props;
    const [textValue, setTextValue] = useState({
        "value": ""
    })
    useEffect(() => {
        getTextValue(textValue.value)
    }, [textValue.value]);
    const handleChange = (e) => {
        setTextValue({
            value: e.target.value
        })
    }
    return (
        <TextField 
            multiline={isDescription? true : false} 
            fullWidth={isDescription? true : false} 
            rows={isDescription? "4" : "0"} 
            onChange={handleChange} 
            label={labelText? labelText : "Enter Label"}
            variant={isDescription? "outlined" : "standard"}
             />
    )
}

export default TextInput;
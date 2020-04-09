import React, {useState, useEffect} from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    textBox:{
        minWidth: props =>
            props.isFullWidth || props.isDescription ?
            400 : 400
    }
}))
const TextInput = (props) => {
    const {labelText, getTextValue, isFullWidth, isDescription} = props;
    const classes = useStyles(props)
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
            rows={isDescription? "4" : "0"} 
            onChange={handleChange} 
            label={labelText? labelText : "Enter Label"}
            variant={isDescription? "outlined" : "standard"}
            className={classes.textBox}
             />
    )
}

export default TextInput;
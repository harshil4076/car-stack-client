import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
        maxWidth: 300,
        backgroundColor: "white",
        borderRadius: "2px",
    },
    selectBox: {
      paddingLeft: "20px"
    }
}));
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};




export default function SearchModel (props){
    const { ModelList, getModelSelection } = props;
    const classes = useStyles();
    const [model, setModel] = React.useState({
       "model": "" 
    })
    const handleChange = (event) =>{
        setModel({model: event.target.value})
    }
    React.useEffect(()=> {
        getModelSelection(model.model)
    }, [model.model])
    return(
                <FormControl className={classes.formControl}>
                <InputLabel className={classes.selectBox} >AllModels</InputLabel>
                    <Select
                        MenuProps={MenuProps}
                        varient="outlined"
                        onChange={handleChange}
                        value={model.model}
                        >
                            {ModelList? 
                                ModelList.map(item => (
                                    <MenuItem key={item} value={item}>
                                    {item}
                                    </MenuItem>
                                ))
                                :
                                    null
                            }
                    </Select>
                </FormControl>
    )
}
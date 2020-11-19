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
        maxWidth: 400,
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




export default function SearchDropDown (props){
 const { MakesList, getMakeSelection, labelTitle, widthInput, item} = props;
 const defaultValue = MakesList[0]
    const classes = useStyles(props)
    // const [itemMake, setItemMake] = React.useState();
    // const handleChange = (event) => {
    //     setItemMake(event.target.value);
    //     console.log(event.target.value)
    //   };
    //   React.useCallback(() => {
    //     getMakeSelection(itemMake)
    //   }, [itemMake, getMakeSelection])
    
    return(
                <FormControl className={classes.formControl}>
                <InputLabel className={classes.selectBox} >{labelTitle? labelTitle : "EnterValue"}</InputLabel>
                    <Select
                        onChange={getMakeSelection}
                        MenuProps={MenuProps}
                        varient="outlined"
                        defaultValue={defaultValue}

                        >
                        {
                          MakesList? 
                          MakesList.map(item =>(
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
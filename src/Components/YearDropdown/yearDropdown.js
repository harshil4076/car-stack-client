import React from 'react';
import PropTypes from 'prop-types'
//material ui components
import { makeStyles} from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles({
    formControl: {
        minWidth: 200,
        maxWidth: 400,
        backgroundColor: "white",
        borderRadius: "2px",
    },
    selectBox: {
      paddingLeft: "20px"
    }
});
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




export default function YearDropdown (props){
    const classes = useStyles(props)

    const { yearList, getYearSelection, item} = props;
    //setting the year state
    // "item" prop to be used when passing an year value to render view ads
    const [Year, setYear] = React.useState({
       "year": item? item : "" 
    })
    // function handles user input
    const handleChange =  (event) =>{
        setYear({year: event.target.value})
        // await getYearSelection(Year.year)

    }
    // to be called when user selects or changes the value of the year
    React.useCallback(()=> {
        getYearSelection(Year.year)
    }, [Year.year])
    return(
                <FormControl className={classes.formControl} >
                <InputLabel className={classes.selectBox} >Select Year</InputLabel>
                    <Select
                        MenuProps={MenuProps}
                        varient="outlined"
                        onChange={(event) => handleChange(event)}
                        value={Year.year}
                        >
                            {yearList? 
                                yearList.map((item) => (
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

YearDropdown.propTypes = {
    yearList: PropTypes.array,
    getYearSelection: PropTypes.func,
    widthInput: PropTypes.bool,
    item: PropTypes.number
}
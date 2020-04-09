import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles({
    formControl: {
        minWidth: props => 
            props.widthInput? 400: 200,
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

    const { yearList, getYearSelection, widthInput} = props;
    const [Year, setYear] = React.useState({
       "year": "" 
    })
    const handleChange = (event) =>{
        setYear({year: event.target.value})
    }
    React.useEffect(()=> {
        getYearSelection(Year.year)
    }, [Year.year])
    return(
                <FormControl className={classes.formControl} >
                <InputLabel className={classes.selectBox} >Select Year</InputLabel>
                    <Select
                        MenuProps={MenuProps}
                        varient="outlined"
                        onChange={handleChange}
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
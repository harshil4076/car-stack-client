import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from "@material-ui/core/Checkbox"
import FormControlLabel from '@material-ui/core/FormControlLabel';
const useStyles = makeStyles(theme => ({
    formLabel: {
        color: "white"
    },
    checkBox: {
        backgroundColor: "white",
        height: 16,
        width: 16,
        borderRadius: "5%"

    },
    checkedIcon: {
        backgroundColor: '#137cbd',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
          display: 'block',
          width: 16,
          height: 16,
          backgroundImage:
            "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
            " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
            "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
          content: '""',
        },}
}));

export default function RadioButt({ radio, collectSearchItems }) {
    const classes = useStyles();
    const [checkBox, setCheckBox] = React.useState({
        "New" : false,
        "Used": false,
        "Certified Pre-Owned": false
    });
    
    const handleChange = event => {
        setCheckBox({...checkBox, [event.target.value]: event.target.checked});
    }
    
    React.useEffect(() => {
        collectSearchItems(checkBox)
    },[checkBox])
    return (
        <div
            className={classes.formLabel} 
            >
                {radio.map(item => (
                    <FormControlLabel
                    value={item}
                    key={item}
                    control={
                        <Checkbox
                        name={item}
                        onChange={handleChange}
                        color="primary"
                        medium="true"
                        value={item}
                        key={item}
                        icon={<span className={classes.checkBox}></span>}
                        checkedIcon={<span className={classes.checkedIcon}></span>}
                />
                    }
                    label={item}
                    labelPlacement="end"
                  />
                    
                ))}
      </div>
    )
}
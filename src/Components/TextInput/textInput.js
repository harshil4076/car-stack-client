import React, { useState, useEffect } from "react";
//material ui components
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  textBox: {
    minWidth: 200
  }
}));
const TextInput = props => {
  const { labelText, getTextValue, isFullWidth, isDescription, item } = props;
  const classes = useStyles(props);
  //setting the state of the user input
  const [textValue, setTextValue] = useState({
    value: item ? item : ""
  });

  //only to be called when there is a change in state
  useEffect(() => {
    getTextValue(textValue.value);
  }, [getTextValue, textValue.value]);

  //handle the user input
  const handleChange = e => {
    setTextValue({
      value: e.target.value
    });
  };
  return (
    <TextField
      fullWidth={isDescription ? true : false}
      multiline={isDescription ? true : false}
      rows={isDescription ? "4" : "0"}
      onChange={handleChange}
      label={labelText ? labelText : "Enter Label"}
      variant={isDescription ? "outlined" : "standard"}
      className={classes.textBox}
      value={textValue.value}
      isFullWidth
    />
  );
};

export default TextInput;

TextInput.propTypes = {
  labelText: PropTypes.string,
  getTextValue: PropTypes.func,
  isFullWidth: PropTypes.bool,
  isDescription: PropTypes.bool,
  item: PropTypes.string
};

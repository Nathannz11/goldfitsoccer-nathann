import React from 'react';
import "./styles.css";

import {
  Select,
  MenuItem,
  FormControl,
} from "@material-ui/core";

export default function CompPercebida(props) {
  return (
    <div className="questionaire-section">
      <p className="form-subtitle-component">{props.description}</p>
      <FormControl variant="outlined">
        <Select
          className="text-field"
          labelId="evaluate-athlete1-atleta-label"
          id={props.id}
          name={props.name}
          value={props.value}
          error={props.error}
          helperText={props.helperText}
          onChange={props.onChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}


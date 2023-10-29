import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

import './styles.css'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300 + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

export default function DiscreteSlider({sliderColor}) {
  const classes = useStyles();

  const PrettoSlider = withStyles({
    root: {
      color: sliderColor,
      height: 8,
  }})(Slider)

  return (
    <div className={classes.root}>
      <PrettoSlider
        defaultValue={30}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="off"
        step={1}
        marks
        min={1}
        max={4}
      />
      <div className="rangeNames-label">
        <p>Baixo</p>
        <p>Mediano</p>
        <p>Alto</p>
        <p>Excelência</p>
      </div>
      </div>

  );
}
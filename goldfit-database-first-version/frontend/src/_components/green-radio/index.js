import {
    withStyles,
    Radio,
} from '@material-ui/core'

import { green } from "@material-ui/core/colors";

const GreenRadio = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);

export default GreenRadio;

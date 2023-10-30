import {
  Button,
  withStyles,
} from '@material-ui/core'

const GreenButton = withStyles({
  root: {
    color: "white",
    backgroundColor: "#489152",
    width: "20em",
    fontFamily: 'Open Sans',
    textTransform: "none",
    fontWeight: "bold",
    fontSize: "20px",
    margin: "3% 0%",
    "&:hover": {
      backgroundColor: "#0E592C"
    }
  },
  checked: {},
})((props) => <Button color="default" {...props} />);

export default GreenButton;

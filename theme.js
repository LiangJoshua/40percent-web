import { createMuiTheme } from '@material-ui/core/styles';
import {green, blue} from "@material-ui/core/colors";


/**Creates the main UI Theme. Changes colors and other variants*/

const theme = createMuiTheme({
    palette: {
        primary: {
            main: green[500],
        },
        secondary: {
            main: blue[500],
        },
    },
});

export default theme;
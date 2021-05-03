import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = "#3d8ace";
const arcOrange = "#e97344";

export default createMuiTheme({
    palette:{
        common: {
            blue : `${arcBlue}`,
            orange : `${arcOrange}`,
        },
        primary: {
            main : `${arcBlue}`
        },
        secondary: {
            main : `${arcOrange}`
        }
    },
    typography:{
        tab: {
            fontFamily: "Raleway",
            textTransform: 'none',
            fontWeight: '700',
            fontSize: '1rem',
        },
        estimate: {
            fontFamily: "Pacifico",
            fontSize: '1rem',
            textTransform: "none",
            color: "white",
        }
    }
})

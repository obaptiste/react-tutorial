import {creatMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import indigo from '@material-ui/core/colors/indigo';

const theme = createMuiTheme({
    palette: {
      primary: purple,
      secondary: {
        main: '#f44336',
      },
    },
  });

  const darkTheme = ({
      palette: {
          type: 'dark',
      },
  });
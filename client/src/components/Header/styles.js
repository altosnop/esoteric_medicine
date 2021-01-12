import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    appBar: {
      backgroundColor: theme.palette.primary.dark,
    },
    menuButtons: {
      color: '#fff',
      margin: '10px',
    },
    menu: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%'
    }
  }));

  export default useStyles
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import useStyles from "./styles";
import logo from "../../assets/images/logo.png";

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <img src={logo} height="64px" alt="Logo"></img>
          <Box className={classes.menu}>
            <Button className={classes.menuButtons}>Главная</Button>
            <Button className={classes.menuButtons}>Обо мне</Button>
            <Button className={classes.menuButtons}>Направления</Button>
            <Button className={classes.menuButtons}>Мои услуги</Button>
            <Button className={classes.menuButtons}>
              Медитативные упражнения
            </Button>
            <Button className={classes.menuButtons}>Случаи из практики</Button>
          </Box>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;

import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import useStyles from "./styles";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <img src={logo} height="64px" alt="Logo"></img>
          <Box className={classes.menu}>
            <Link to="/" className={classes.link_style}>
              <Button className={classes.menuButtons}>Главная</Button>
            </Link>
            <Link to="/about-me" className={classes.link_style}>
              <Button className={classes.menuButtons}>Обо мне</Button>
            </Link>
            <Link to="/areas" className={classes.link_style}>
              <Button className={classes.menuButtons}>Направления</Button>
            </Link>
            <Link to="/my-services" className={classes.link_style}>
              <Button className={classes.menuButtons}>Мои услуги</Button>
            </Link>
            <Link to="/meditation-techniques" className={classes.link_style}>
              <Button className={classes.menuButtons}>
                Медитативные упражнения
              </Button>
            </Link>
            <Link to="/instances-of-practice" className={classes.link_style}>
              <Button className={classes.menuButtons}>
                Случаи из практики
              </Button>
            </Link>
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

import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
} from "@material-ui/core";

import LocalMallIcon from "@mui/icons-material/LocalMall";
import Badge from "@mui/material/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import mewLogo2 from "../../../images/mew logo2.PNG";
import { useSelector } from "react-redux";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import SearchIcon from "@mui/icons-material/Search";
import AttractionsIcon from "@mui/icons-material/Attractions";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";

const useStyles = makeStyles(() => ({
  header: {
    background: "linear-gradient(to right, rgb(255, 210, 0) 50%, #fe8c00)",
    paddingRight: "0px",
    paddingLeft: "0px",
    zIndex: 8,
    "@media (max-width: 900px)": {
      // paddingLeft: 0,
    },
  },
  logo: {
    height: 80,
    width: 150,

    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "black",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 600,
    fontSize: "18px",
    marginLeft: "1vmax",
    "@media (max-width: 1000px)": {
      fontSize: "15px",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    background: "linear-gradient(to right, rgb(255, 210, 0) 50%, #fe8c00)",
  },
  drawerContainer: {
    padding: "10px",
  },
}));

export default function Header() {
  const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();
  const { cartItems } = useSelector((state) => state.cart);

  const headersData = [
    {
      label: (
        <Tooltip title="Home" arrow TransitionComponent={Zoom}>
          <HomeIcon style={{ fontSize: "35PX" }} />
        </Tooltip>
      ),
      href: "/",
    },
    {
      label: (
        <Tooltip title="Products" arrow TransitionComponent={Zoom}>
          <CategoryIcon style={{ fontSize: "35PX" }} />
        </Tooltip>
      ),
      href: "/products",
    },
    {
      label: (
        <Tooltip title="About" arrow TransitionComponent={Zoom}>
          <AttractionsIcon style={{ fontSize: "35PX" }} />
        </Tooltip>
      ),
      href: "/about",
    },
    {
      label: (
        <Tooltip title="Contact" arrow TransitionComponent={Zoom}>
          <LocalPostOfficeIcon style={{ fontSize: "35PX" }} />
        </Tooltip>
      ),
      href: "/contact",
    },
    {
      label: (
        <Tooltip title="Search" arrow TransitionComponent={Zoom}>
          <SearchIcon style={{ fontSize: "35PX" }} />
        </Tooltip>
      ),
      href: "/search",
    },

    {
      label: (
        <Tooltip title="Cart" arrow TransitionComponent={Zoom}>
          <Badge badgeContent={cartItems.length} color="error">
            <LocalMallIcon
              style={{
                fontSize: "35PX",
                color: cartItems.length > 0 ? "black" : "unset",
              }}
            />
          </Badge>
        </Tooltip>
      ),
      href: "/cart",
    },
    {
      label: (
        <Tooltip title="Account" arrow TransitionComponent={Zoom}>
          <AccountCircleIcon style={{ fontSize: "35PX" }} />
        </Tooltip>
      ),
      href: "/login",
      name: "Dashboard",
    },
  ];

  const headersDataMobile = [
    {
      label: (
        <IconButton style={{ color: "white", fontWeight: "bold" }}>
          <HomeIcon style={{ fontSize: "35PX" }} />
          Home
        </IconButton>
      ),
      href: "/",
    },

    {
      label: (
        <IconButton style={{ color: "white", fontWeight: "bold" }}>
          <AttractionsIcon style={{ fontSize: "35PX" }} />
          About
        </IconButton>
      ),
      href: "/about",
    },
    {
      label: (
        <IconButton style={{ color: "white", fontWeight: "bold" }}>
          <LocalPostOfficeIcon style={{ fontSize: "35PX" }} />
          Contact
        </IconButton>
      ),
      href: "/contact",
    },
    {
      label: (
        <IconButton style={{ color: "white", fontWeight: "bold" }}>
          <CategoryIcon style={{ fontSize: "35PX" }} />
          Product
        </IconButton>
      ),
      href: "/products",
    },

    {
      label: (
        <IconButton style={{ color: "white", fontWeight: "bold" }}>
          <SearchIcon style={{ fontSize: "35PX" }} />
          Search
        </IconButton>
      ),
      href: "/search",
    },
    {
      label: (
        <IconButton style={{ color: "white", fontWeight: "bold" }}>
          <Badge badgeContent={cartItems.length} color="error">
            <LocalMallIcon
              style={{
                fontSize: "35PX",
                color: cartItems.length > 0 ? "black" : "unset",
              }}
            />
          </Badge>
          Cart
        </IconButton>
      ),
      href: "/cart",
    },
    {
      label: (
        <IconButton style={{ color: "white", fontWeight: "bold" }}>
          <AccountCircleIcon style={{ fontSize: "35PX" }} />
          Account
        </IconButton>
      ),
      href: "/login",
    },
  ];

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {femmecubatorLogo}
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon style={{ fontSize: "35PX" }} />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>
            {mobileSideBarLogo}
            {getDrawerChoices()}
          </div>
        </Drawer>
        <div>{femmecubatorLogo}</div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersDataMobile.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const femmecubatorLogo = (
    <Link href="/">
      <Typography className={logo}>
        <img
          style={{
            height: 80,
            width: 150,
          }}
          src={mewLogo2}
          alt="Logo"
        />
      </Typography>
    </Link>
  );

  const mobileSideBarLogo = (
    <Link href="/">
      <Typography>
        <img
          style={{
            height: 100,
            width: 200,
          }}
          src={mewLogo2}
          alt="Logo"
        />
      </Typography>
    </Link>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: menuButton,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <header>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}

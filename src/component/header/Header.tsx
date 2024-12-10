"use client";
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Container } from "@mui/material";
import Link from "next/link";

import upscLogo from "@/images/logo.png";
import UserBox from "./UserBox";
import Image from "next/image";
import Menus from "./MenuItems";
// import HeaderLogo from 'theme-library/Layout/AppLogo'
// import Menus from 'app/components/Menu/Menu'
// import { HeaderStyle } from './style/Header'
// import { FontIncrease } from 'theme-library/Layout/AppHeader/Components/FontIncrease'
// import UserBox from 'theme-library/Layout/AppHeader/Components/UserBox'
// import MobileMenu from './MobileMenu'
// import { getItem } from 'utils/storage'
// import { isEqual } from 'lodash'
// import Notification from 'theme-library/Layout/AppHeader/Components/notification'
// import TopHeader from '../TopHeader/TopHeader'
// import { Container } from 'reactstrap'

interface props {
  menuData: any;
  login: boolean;
}

 const HeaderStyle = styled(Box)`
  width: 100%;
  position: fixed;
  z-index: 999;

`;

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const [mobileMoreNavbarAnchorEl, setMobileMoreNavbarAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isMobileNavbarMenuOpen = Boolean(mobileMoreNavbarAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileNavbarClose = () => {
    setMobileMoreNavbarAnchorEl(null);
  };

  const handleMobileNavbarOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreNavbarAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const mobileNavbarId = "navabar";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const renderMobileNavbarMenu = (
    <Menu
      anchorEl={mobileMoreNavbarAnchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      id={mobileNavbarId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileNavbarMenuOpen}
      onClose={handleMobileNavbarClose}
    >
      <Menus />
    </Menu>
  );
  // const userType = getItem('token')?.user?.type
  return (
    <>
      <HeaderStyle>
        {/* <Box>
          TOP HEADER
        </Box> */}
        <Box
          sx={{
            background: "#2947A3",
            width: "100%",
          }}
        >
          <Container>
            <AppBar
              position="static"
              sx={{
                boxShadow: "none",
                backgroundColor: "#2947A3",
              }}
            >
              <Toolbar
                sx={{
                  pl: `0!important`,
                  pr: `0!important`,
                }}
              >
                <Box sx={{ display: { xs: "flex", sm: "flex" } , alignItems: "center" }}>
                  <Typography
                    noWrap
                    component="div"
                    sx={{ display: { xs: "block", sm: "block" } }}
                  >
                    {/* <HeaderLogo /> */}
                    <Link href={"/"}>
                      <Image src={upscLogo} alt="LOGO" />
                    </Link>
                  </Typography>
                  <Typography
                    fontSize={"16px"}
                    sx={{
                      color: "#FFF",
                      textAlign: "left",
                      // -webkit-text-stroke-width: 0.5;
                      // -webkit-text-stroke-color: #FFF;
                      fontFamily: "DevLys 010 Thin",
                      fontSize: {xs:"16px",sm:"22px"},
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "30px" /* 93.75% */,
                    }}
                    variant="h1"
                  >
                    संघ लोक सेवा आयोग
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#FFF",
                        textAlign: "center",
                        fontFamily: "Roboto",
                        fontSize: {xs:"16px",sm:"24px"},
                        fontStyle: "normal",
                        fontWeight: "900",
                        lineHeight: "30px",
                        textTransform: "uppercase",
                      }}
                    >
                      UNION PUBLIC SERVICE COMMISSION
                    </Typography>
                  </Typography>
                </Box>

               
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: "none", md: "flex" } }}>
                  <UserBox />
                  
                </Box>
                <Box sx={{ display: { xs: "flex", md: "none" } }}>
                  <IconButton
                    size="large"
                    aria-label="show more"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    onClick={handleMobileMenuOpen}
                    color="inherit"
                  >
                    <MoreIcon />
                  </IconButton>
                </Box>
                <Box sx={{ display: { xs: "flex", md: "none" } }}>
                  <IconButton
                    size="large"
                    aria-label="show more"
                    aria-controls={mobileNavbarId}
                    aria-haspopup="true"
                    onClick={handleMobileNavbarOpen}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                </Box>
              </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
            {renderMobileNavbarMenu}
          </Container>
        </Box>
        <Box>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Menus />
          </Box>
        </Box>
      </HeaderStyle>
    </>
  );
}

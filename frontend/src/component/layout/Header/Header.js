import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.PNG";
import { FaSearch, FaShoppingBag, FaUserAlt } from "react-icons/fa";

const Header = () => {
  return (
    <ReactNavbar
      burgerColorHover="grey"
      logo={logo}
      logoWidth="10vmax"
      navColor1="#ff6a00"
      logoHoverSize="10px"
      logoHoverColor="white"
      link1Text="Home"
      link2Text="Products"
      link3Text="Contact"
      link4Text="About"
      link1Url="/"
      link2Url="/products"
      link3Url="/contact"
      link4Url="/about"
      link1Size="2vmax"
      link1Color="white"
      nav1justifyContent="flex-end"
      nav2justifyContent="flex-end"
      nav3justifyContent="flex-start"
      nav4justifyContent="flex-start"
      link1ColorHover="black"
      link1Margin="1.3vmax"
      profileIconUrl="/login"
      profileIconColor="white"
      searchIconColor="white"
      cartIconColor="white"
      profileIconColorHover="black"
      searchIconColorHover="black"
      cartIconColorHover="black"
      cartIconMargin="1vmax"
      searchIcon={true}
      SearchIconElement={FaSearch}
      cartIcon={true}
      CartIconElement={FaShoppingBag}
      profileIcon={true}
      ProfileIconElement={FaUserAlt}
    />
  );
};

export default Header;

import React from "react";
import "./Footer.css";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Link } from "react-router-dom";
import AttractionsIcon from "@mui/icons-material/Attractions";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import CategoryIcon from "@mui/icons-material/Category";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footerContainer">
        <div className="leftFooter">
          <h4>Quick's Link</h4>
          <Link className="quickLink" to="/about">
            <AttractionsIcon />
            About us
          </Link>
          <Link className="quickLink" to="/contact">
            <AddIcCallIcon />
            Contact us
          </Link>
          <Link className="quickLink" to="/products">
            <CategoryIcon />
            Products
          </Link>
          <Link className="quickLink" to="/login">
            <ExitToAppIcon />
            SignIn
          </Link>
        </div>

        <div className="midFooter">
          <h1>MEW</h1>
          <h3>Men's Ethnic Wear</h3>
          <p>
            MEW is a marketplace model to capture the regional and traditional
            variations of India.
          </p>
          <p>"'Discover Ethnic Indian Products'"</p>
          <p className="copy">Copyrights 2022 &copy;MEW </p>
        </div>

        <div className="rightFooter">
          <h4>Follow Us</h4>
          <a href="https://twitter.com/">
            <TwitterIcon className="twitterSvgIcon" />
            Twitter
          </a>
          <a href="http://youtube.com">
            <YouTubeIcon className="youtubeSvgIcon" />
            Youtube
          </a>
          <a href="http://instagram.com">
            <InstagramIcon className="instagramSvgIcon" />
            Instagram
          </a>
          <a href="http://facebook.com">
            <FacebookIcon className="facebookSvgIcon" />
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

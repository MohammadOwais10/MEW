import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

const Contact = () => {
  return (
    <div className="contactContainer">
      <div className="emailBox">
        <h2>Contact Us</h2>
        <a className="mailBtn" href="mailto:mewHelp@gmail.com">
          <Button>mewHelp@gmail.com</Button>
        </a>
      </div>
      <div className="followBox">
        <h2>Follow Us</h2>
        <a href="https://www.youtube.com" target="blank">
          <YouTubeIcon className="youtubeSvgIcon" />
        </a>
        <a href="https://instagram.com" target="blank">
          <InstagramIcon className="instagramSvgIcon" />
        </a>
        <a href="https://facebook.com" target="blank">
          <FacebookIcon className="facebookSvgIcon" />
        </a>
        <a href="https://twitter.com" target="blank">
          <TwitterIcon className="twitterSvgIcon" />
        </a>
      </div>
    </div>
  );
};

export default Contact;

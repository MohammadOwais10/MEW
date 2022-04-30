import React from "react";
import "./about.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              alt="Founder"
            />
            <Typography>Mohammad Owais</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit My Instagram
            </Button>
            <span>
              Working towards our goals on a daily basis, we envision ourselves
              as the world’s leading brand for Indian Ethnic Wear. Driven by
              customer obsession and technological prowess, we respect the
              divide between modern automation and the irrefutable subtleties of
              hand-made precision. We aspire to stay true to our core values
              whilst focusing on the customer and the artisan in an equal sense.
              Providing a flawless shopping experience through and through,
              we’re gradually increasing artisanal employment every single step
              of the way.
            </span>
          </div>

          <div className="aboutSectionContainer2">
            <Typography component="h2">Follow Us</Typography>
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
      </div>
    </div>
  );
};

export default About;

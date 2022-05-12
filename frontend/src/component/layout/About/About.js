import React from "react";
import "./about.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import ProfileHead from "../../../images/Head.PNG";

const About = () => {
  const visitLinkedin = () => {
    window.location = "https://www.linkedin.com/in/mohammad-owais-555317201/";
  };
  return (
    <div className="aboutContainer">
      <Typography component="h1">About Us</Typography>
      <div className="aboutProfile">
        <Avatar
          style={{ width: "15vmax", height: "15vmax" }}
          src={ProfileHead}
          alt="Founder"
        />
        <h1>Mohammad Owais</h1>
        <h3>(Head of MEW)</h3>
        <Button onClick={visitLinkedin} color="primary">
          Visit My Linkedin
        </Button>
        <span>
          MEW (Men's Ethnic Wear), leading stylist and fashion icon, has
          embarked on an exciting journey in the fashion industry. With our e-
          commerce venture, www.mew.com, India’s premier ethnic wears are now
          available in all over India. Whether you're in Mumbai, New Delhi or
          Goa, the elite tone of Indian fashion are just a click away.
        </span>
        <span>
          MEW (Men's Ethnic Wear) Store is a carefully curated design platform
          that articulates your personal style and your accumulated experience.
          With this expertise, we brings you the opportunity to enhance your
          wardrobe with the creative excellence of our most coveted designer
          wears as well as the vibrant energy of our bright young talent.
        </span>
        <span>
          Exclusive to the website is also our eponymous label of Men’s wear
          collection. A stylish mix of modern and classic styles for the
          sophisticated mens, our range will make you the most stylist in the
          world. These stylized looks present you with pieces from different
          designs available on the website, and entice you to make your own
          stylish choices.
        </span>
        <span>
          Wherever you are, come join the experience of our fun and fashionable
          MEW (Men's Ethnic Wear)
        </span>
      </div>
      <div className="aboutDeatils">
        <div className="inspiration">
          <h4>Our Inspiration</h4>
          <p>
            MEW (Men's Ethnic Wear) embodies an artistic lifestyle rooted in the
            cultural diversity of vibrant colours and classic handblock prints
            translated into exquisite handcrafted and ethnic products to satiate
            your quest for authentic regality.We believe at MEW (Men's Ethnic
            Wear) that fashion should be fun, that luxury should be affordable,
            and that looking gorgeous needn't be difficult.
          </p>
        </div>
        <div className="philosophy">
          <h4>Our Design Philosophy</h4>
          <p>
            We at MEW (Men's Ethnic Wear) believe that life should be nothing
            short of celebration and miracles and each outfit you wear is a
            reflection of that spirit. This is why each MEW (Men's Ethnic Wear)
            outfit is curated from organic fabrics emphasizing breathability and
            airiness. With every alluring product we create, we inspire you to
            savour each aesthetic thought and intricate detailing that goes into
            it.
          </p>
        </div>
        <div className="craft">
          <h4>Our Crafts and Textiles</h4>
          <p>
            Immaculate quality is at the helm of The House of MEW (Men's Ethnic
            Wear). We at MEW (Men's Ethnic Wear) leverage the gracefulness of
            hand-woven textiles with a flourishing legacy spanning centuries.
            Our fabrics and the entire process of creating attire is versatile,
            eco friendly assuring zero carbon footprint. Each attire embraces a
            glimpse of aristocracy oozing the meticulous fineness.
          </p>
        </div>
        <div className="mission">
          <h4>Our Mission</h4>
          <p>
            Working towards our goals on a daily basis, we envision ourselves as
            the world's leading brand for Indian Ethnic Wear. Driven by customer
            obsession and technological prowess, we respect the divide between
            modern automation and the irrefutable subtleties of hand-made
            precision. We aspire to stay true to our core values whilst focusing
            on the customer and the artisan in an equal sense. Providing a
            flawless shopping experience through and through, we're gradually
            increasing artisanal employment every single step of the way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

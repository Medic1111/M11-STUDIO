import AnimBanner from "../../common/AnimBanner/AnimBanner";
import React from "react";
import Nav from "../../common/Nav/Nav";
import Logo from "../../common/Logo/Logo";
import FooterArrow from "../FooterArrow/FooterArrow";
import FooterText from "../FooterText/FooterText";
import FooterWrapper from "../FooterWrapper/FooterWrapper";

const Footer = () => {
  return (
    <React.Fragment>
      <AnimBanner />
      <FooterWrapper>
        <FooterArrow />
        <Nav />
        <Logo />
        <FooterText />
      </FooterWrapper>
    </React.Fragment>
  );
};

export default Footer;

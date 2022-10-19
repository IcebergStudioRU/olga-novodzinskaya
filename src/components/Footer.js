import React from "react";
import Section from "./Section";
import { ReactComponent as Logo } from "../assets/logo.svg";

const Footer = ({ backgroundColor }) => {
  return (
    <Section
      backgroundColor={backgroundColor}
      className="flex items-center h-32"
      justify="center"
    >
      <Logo className="mb:h-12 tl:h-16 dt:h-20" />
    </Section>
  );
};

export default Footer;

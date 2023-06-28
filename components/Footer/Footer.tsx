import React from "react";
import scss from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={scss.footer}>
      <p className={scss.text}>Created by &copy;Serenbek</p>
    </footer>
  );
};

export default Footer;

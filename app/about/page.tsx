import React from "react";
import scss from "./about.module.scss"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Next App 13",
};

const AboutPage = () => {
  return (
    <div className={scss.wrapper}>
      <h1>Subitem</h1>
    </div>
  );
};

export default AboutPage;

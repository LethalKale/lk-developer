import React from "react";
import Link from "next/link";
import { Title } from "../Core";
import imgSignLight from "../../assets/image/png/lk-logo.png";
const Logo = ({ color = "front", height, className = "", ...rest }) => {
  return (
    <Link href="/">
      <a className={`${className}`} {...rest}>
        <img src={imgSignLight} alt="LethalKale Logo" />
        {/* <Title color={color} variant="cardLg" className="mb-0">
          Wired4Apps.
        </Title> */}
      </a>
    </Link>
  );
};

export default Logo;

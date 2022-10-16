import React, { FC } from "react";
import NavItems from "./NavItems";

const Navbar: FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <NavItems icon="😄" />
        <NavItems icon="😄" />
        <NavItems icon="😄" />
      </ul>
    </nav>
  );
};

export default Navbar;

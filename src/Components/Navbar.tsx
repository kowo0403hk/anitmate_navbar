import React, { FC } from "react";
import NavItems from "./NavItems";
import DropdownMenu from "./DropdownMenu";
import { ReactComponent as BellIcon } from "../icons/bell.svg";
import { ReactComponent as MessengerIcon } from "../icons/messenger.svg";
import { ReactComponent as CaretIcon } from "../icons/caret.svg";
import { ReactComponent as PlusIcon } from "../icons/plus.svg";

// import SVG icon as ReactComponent, then pass the component down as props

const Navbar: FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <NavItems icon={<PlusIcon />} />
        <NavItems icon={<BellIcon />} />
        <NavItems icon={<MessengerIcon />} />
        <NavItems icon={<CaretIcon />}>
          <DropdownMenu />
        </NavItems>
      </ul>
    </nav>
  );
};

export default Navbar;

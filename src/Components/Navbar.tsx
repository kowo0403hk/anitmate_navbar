import React, { FC } from "react";
import NavItems from "./NavItems";
import { ReactComponent as BellIcon } from "../icons/bell.svg";
import { ReactComponent as MessengerIcon } from "../icons/messenger.svg";
import { ReactComponent as CaretIcon } from "../icons/caret.svg";
import { ReactComponent as PlusIcon } from "../icons/plus.svg";
import { ReactComponent as CogIcon } from "../icons/cog.svg";
import { ReactComponent as ChevronIcon } from "../icons/chevron.svg";
import { ReactComponent as ArrowIcon } from "../icons/arrow.svg";
import { ReactComponent as BoltIcon } from "../icons/bolt.svg";

// import SVG icon as ReactComponent, then pass the component down as props

const Navbar: FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <NavItems icon={<PlusIcon />} />
        <NavItems icon={<BellIcon />} />
        <NavItems icon={<MessengerIcon />} />
      </ul>
    </nav>
  );
};

export default Navbar;

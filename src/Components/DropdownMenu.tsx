import React, { FC } from "react";
import DropdownItem from "./DropdownItem";
import { ReactComponent as CogIcon } from "../icons/cog.svg";
import { ReactComponent as ChevronIcon } from "../icons/chevron.svg";

const DropdownMenu: FC = () => {
  return (
    <div className="dropdown">
      <DropdownItem>My Profile</DropdownItem>
      <DropdownItem leftIcon={<CogIcon />} rightIcon={<ChevronIcon />}>
        Settings
      </DropdownItem>
    </div>
  );
};

export default DropdownMenu;

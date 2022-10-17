import React, { FC, useState } from "react";
import DropdownItem from "./DropdownItem";
import { CSSTransition } from "react-transition-group";
import { ReactComponent as CogIcon } from "../icons/cog.svg";
import { ReactComponent as ChevronIcon } from "../icons/chevron.svg";
import { ReactComponent as ArrowIcon } from "../icons/arrow.svg";

const DropdownMenu: FC = () => {
  const [activeMenu, setActiveMenu] = useState("main");

  return (
    <div className="dropdown">
      <CSSTransition
        in={activeMenu === "main"} // if the "in" props is true, a "menu-primary-enter" class will be added to the div element below
        unmountOnExit
        timeout={500} // once the timeout of 500ms has passed, a "menu-primary-enter-active" class will be added to the div element below
        className="menu-primary"
      >
        {/* because of the CSS Transition props changes, the below div element will have differrent CSS animation */}
        <div className="menu">
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings"
            setActiveMenu={setActiveMenu}
          >
            Settings
          </DropdownItem>
        </div>
      </CSSTransition>

      {/* secondary drop down list */}
      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={500}
        className="menu-secondary"
      >
        <div className="menu">
          <DropdownItem
            leftIcon={<ArrowIcon />}
            goToMenu="main"
            setActiveMenu={setActiveMenu}
          />
          <DropdownItem>Settings</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
};

export default DropdownMenu;

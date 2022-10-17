import React, { FC } from "react";

interface MenuItems {
  children?: JSX.Element | string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  goToMenu?: string;
  setActiveMenu?: React.Dispatch<React.SetStateAction<string>>;
}

const DropdownItem: FC<MenuItems> = (props: any) => {
  return (
    <a
      className="menu-item"
      href="#"
      onClick={() => props.goToMenu && props.setActiveMenu(props.goToMenu)}
    >
      <span className="icon-button">{props.leftIcon}</span>
      {props.children}
      <span className="icon-right">{props.rightIcon}</span>
    </a>
  );
};

export default DropdownItem;

import React, { FC } from "react";

interface MenuItems {
  children?: any;
  leftIcon?: any;
  rightIcon?: any;
}

const DropdownItem: FC<MenuItems> = (props: any) => {
  return (
    <a className="menu-item" href="#">
      <span className="icon-button">{props.leftIcon}</span>
      {props.children}
      <span className="icon-right">{props.rightIcon}</span>
    </a>
  );
};

export default DropdownItem;

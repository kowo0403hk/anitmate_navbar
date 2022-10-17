import React, { FC, useState } from "react";

interface NavItem {
  icon: JSX.Element;
  children?: JSX.Element;
}

const NavItems: FC<NavItem> = (props: NavItem) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a className="icon-button" href="#" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
};

export default NavItems;

import React, { FC, useState } from "react";

interface NavItems {
  icon: JSX.Element;
  children?: JSX.Element;
}

const NavItems: FC<NavItems> = (props: NavItems) => {
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

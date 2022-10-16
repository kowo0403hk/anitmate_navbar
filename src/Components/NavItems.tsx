import React, { FC } from "react";

interface Items {
  icon: string;
}

const NavItems: FC<Items> = ({ icon }: Items) => {
  return (
    <li className="nav-item">
      <a className="icon-button" href="#">
        {icon}
      </a>
    </li>
  );
};

export default NavItems;

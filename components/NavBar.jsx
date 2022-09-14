import React, { Fragment, useState } from "react";
import NavBarMobile from "./NavBarMobile";
import NavBarPC from "./NavBarPC";

const NavBar = () => {
  const [mobileNav, setMobileNav] = useState(true);

  function changeNav() {
    setMobileNav(!mobileNav);
  }

  return (
    <Fragment>
      <NavBarPC />
      <NavBarMobile mobileNav={mobileNav} changeNav={changeNav} />
    </Fragment>
  );
};

export default NavBar;

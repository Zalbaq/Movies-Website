import Hamburger from "hamburger-react";
import { useState } from "react";

const HamburgerIcon = ({ isOpen, setIsOpen, className }) => {
  return (
    <>
      <div className={className}>
        <Hamburger
          toggled={isOpen}
          toggle={() => {
            setIsOpen(!isOpen);
          }}
        />
      </div>
    </>
  );
};

export default HamburgerIcon;

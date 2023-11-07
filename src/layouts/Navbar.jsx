import { useState } from "react";
import styled from "styled-components";
import ListMenu from "../components/ListMenu";
import Searchbar from "../components/Searchbar";
import Icon from "../components/Icon";
import Sidebar from "./Sidebar";
import HamburgerIcon from "../components/HamburgerIcon";
import "../css/Sidebar.css";

const Navbar = ({ searchMovie, setSearchMovie }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navClass = [
    "fixed",
    "top-0",
    "left-0",
    "h-[6rem]",
    "w-[100%]",
    "flex",
    "justify-between",
    "items-center",
    "gap-[5rem]",
    "px-[10rem]",
    "z-10",
  ];

  const hamburgerClass = [
    "absolute ",
    "left-10",
    "lg:hidden",
    "xl:hidden",
    "2xl:hidden",
    "z-[100]",
  ];
  const listMenuClass = [
    "flex",
    "gap-[3rem]",
    "xs:hidden",
    "sm:hidden",
    "md:hidden",
    "text-[1.6rem]",
  ];
  const sidebarClass = [
    "sidebar",
    "lg:hidden",
    "xl:hidden",
    "2xl:hidden",
    "fixed",
    `left-${isOpen ? "0" : "[-25rem]"}`,
    "top-0",
    "h-[100vh]",
    "w-[25rem]",
    "py-[15rem]",
    "px-[5rem]",
  ];

  return (
    <>
      <Nav className={navClass.join(" ")}>
        <HamburgerIcon
          className={hamburgerClass.join(" ")}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <Icon />
        <ListMenu className={listMenuClass.join(" ")} />
        <Searchbar searchMovie={searchMovie} setSearchMovie={setSearchMovie} />
        <Sidebar className={sidebarClass.join(" ")} />
      </Nav>
    </>
  );
};

const Nav = styled.nav`
  background-color: #393e46;
  color: #fefefe;
`;

export default Navbar;

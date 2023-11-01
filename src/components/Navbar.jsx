import styled from "styled-components";
import ListMenu from "../components/ListMenu";
import Searchbar from "./Searchbar";
import Icon from "../components/Icon";
import Sidebar from "./Sidebar";

const Navbar = ({ searchMovie, setSearchMovie }) => {
  return (
    <>
      <Nav className="fixed top-0 left-0 h-[6rem] w-[100%] flex justify-between items-center gap-[5rem] px-[5rem]">
        <Icon />
        <ListMenu className={"flex xs:hidden sm:hidden md:hidden"} />
        <Searchbar searchMovie={searchMovie} setSearchMovie={setSearchMovie} />
      </Nav>
    </>
  );
};
const Nav = styled.nav`
  z-index: 10;
  background-color: #393e46;
  color: #fefefe;
`;

export default Navbar;

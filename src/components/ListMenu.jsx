import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const ListMenu = () => {
  return (
    <>
      <ul className="flex">
        <ListItem>
          <a href="">Popular</a>
        </ListItem>
        <ListItem>
          <a href="">Top Rated</a>
        </ListItem>
        <ListItem>
          <a href="">Rated Movies</a>
        </ListItem>
        <ListItem>
          <a href="">TV Movies</a>
        </ListItem>
      </ul>
    </>
  );
};

const ListItem = styled.li`
  margin-right: 2rem;
  font-size: 1.4rem;
`;
export default ListMenu;

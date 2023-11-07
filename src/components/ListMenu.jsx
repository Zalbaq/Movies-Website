import styled from "styled-components";

const ListMenu = ({ className }) => {
  return (
    <>
      <ul className={className}>
        <ListItem>
          <A href="/">Popular</A>
        </ListItem>
        <ListItem>
          <A href="/topRated">Top Rated</A>
        </ListItem>
        <ListItem>
          <A href="">Rated Movies</A>
        </ListItem>
        <ListItem>
          <A href="">TV Movies</A>
        </ListItem>
      </ul>
    </>
  );
};

const ListItem = styled.li`
  margin-right: 2rem;
`;

const A = styled.a`
  position: relative;
  &::before {
    content: " ";
    width: 0;
    height: 3px;
    background: white;
    position: absolute;
    bottom: -1rem;
    transition: all ease-in-out 0.25s;
  }
  &:hover::before {
    width: 100%;
  }
`;

export default ListMenu;

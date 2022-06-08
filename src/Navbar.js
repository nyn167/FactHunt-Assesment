import React from "react";
import styled from "styled-components";

const Navbar = ({ name }) => {
  return <NavComp>{name}</NavComp>;
};

export default Navbar;

const NavComp = styled.div`
  width: 100%;
  height: 4rem;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  padding: 1rem;
  margin-bottom: 20px;
  box-shadow: 0px 2px 7px -5px;
`;

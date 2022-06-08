import { Button, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const SideNav = () => {
  return (
    <StyledContainer>
      <div className="typography">Fact Hunt</div>
      <div className="card">
        <Link to="/cards">
          <Button component="button">
            <Typography variant="body1"> News Card</Typography>
          </Button>
        </Link>
      </div>
      <div className="about">
        <Link to="/about">
          <Button component="button">
            <Typography variant="body1">About the Website</Typography>
          </Button>
        </Link>
      </div>
      <div className="static-pills dropdown">
        <Button className="">
          <Typography position="relative" variant="body1">
            Explore
          </Typography>
        </Button>
        <div className="dropdown-content">
          <a>Sports</a>

          <a>Market</a>

          <a>Artifical Intelligence</a>
        </div>
      </div>
    </StyledContainer>
  );
};

export default SideNav;

const StyledContainer = styled.div`
  width: 20rem;
  height: 100vh;
  background-color: #fff;
  position: static;

  .typography {
    width: 100%;
    height: 4rem;
    font-size: 1.6rem;
    padding: 1rem;
    margin-bottom: 20px;
    box-shadow: 0px 2px 7px -5px;
  }
  .card {
    width: 100%;
    font-size: 1.1rem;
  }
  .about {
    font-size: 1.1rem;
    width: 100%;
  }
  button {
    width: 100%;
    height: 3.5rem;
    &:active {
      background-color: #d0d0d0;
    }
  }

  .dropdown-content {
    list-style-type: none;
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 12px 16px;

    a {
      display: block;
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
      cursor: pointer;
    }
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  a {
    text-decoration: none;
  }
`;

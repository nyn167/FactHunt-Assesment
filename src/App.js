import { CssBaseline } from "@material-ui/core";
import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Cards from "./components/Cards";
import SideNav from "./components/SideNav";
import Navbar from "./Navbar";
import AboutPage from "./components/AboutPage";

const App = () => {
  return (
    <AppBG>
      <CssBaseline />
      <div className="sideNav">
        <SideNav />
      </div>

      <div className="display">
        <Routes>
          <Route path="/cards" element={<Cards />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </AppBG>
  );
};

export default App;

const AppBG = styled.div`
  background-color: #e1e1e1;
  width: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: row;

  .display {
    width: 100%;
    height: 100%;
    margin-left: 20rem;
  }

  .sideNav {
    position: fixed;
  }
`;

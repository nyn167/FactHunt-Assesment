import React from "react";
import Navbar from "../Navbar";
import styled from "styled-components";
import { Grid, Typography } from "@material-ui/core";

const AboutPage = () => {
  return (
    <Datacontainer>
      <Grid container direction="column" alignItems="center">
        <Navbar name="Website Description" />
        <Typography variant="h5" component="p" align="center" gutterBottom>
          Fact Hunt Assesment Project
        </Typography>
        <Typography variant="body1" component="p" align="center">
          - This is a website fetching data from an given API, which is further
          displagey in the form cards.
          <br />
          - The side nav contains two nav pills named "cards" and "About the
          Website".
          <br />
          - Onclicking the pills the tabs will get switched.
          <br />- The website is designed using Material-UI and
          styled-components.
        </Typography>
      </Grid>
    </Datacontainer>
  );
};

export default AboutPage;

const Datacontainer = styled.div`
  min-height: 100vh;
  width: 100%auto;

  p {
    text-align: left;
  }
`;

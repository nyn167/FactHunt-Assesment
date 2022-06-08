import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/node_modules/@material-ui/styles";
import Navbar from "../Navbar";

const useStyles = makeStyles({
  root: {
    maxWidth: 410
  },
  media: {
    height: 210,
  },
});

const Cards = () => {
  const baseURL = "https://api.facthunt.in/fostergem/v1/post/list/public";

  const [datas, setDatas] = useState([]);

  const fetchData = () => {
    fetch(baseURL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data.content;
      })
      .then((final) => {
        console.log(final);
        setDatas(final);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const classes = useStyles();

  return (
    <CardComp max-width="md">
      <Navbar name="Cards"/>
      <Grid container align="center" spacing={3}>
        {datas?.map((card) => (
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.root} key={card.postId} item xs={3}>
            
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={card.coverImageUrl}
                />
                <CardContent>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    component="p"
                    align="left"
                  >
                    {card.title}
                  </Typography>
                  <Typography align="right" p={1} variant="body2">
                    {card.date}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </CardComp>
  );
};

export default Cards;

const CardComp = styled.div`
  width: 100%;
  overflow: hidden ;
`;

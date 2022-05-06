import { Assignment, StackedBarChartSharp } from "@mui/icons-material";
import {
  Avatar,
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import millify from "millify";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Cryptocurencies from "./Cryptocurencies";
import News from "./News";

const Hompage = () => {
  const { data, isFetching, isError } = useGetCryptosQuery(10);

  const globalStats = data?.data?.stats;

  // const {
  //   total,
  //   total24hVolume,
  //   totalExchanges,
  //   totalMarketCap,
  //   totalMarkets,
  // } = globalStats;

  // console.log(
  //   total,
  //   total24hVolume,
  //   totalExchanges,
  //   totalMarketCap,
  //   totalMarkets
  // );

  if (isFetching) {
    return (
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return <Typography>fetching error...</Typography>;
  }

  return (
    <>
      <Box mt={2}>
        <Typography variant="h4">Global Crypo Stats</Typography>
        <Grid container spacing={3} mt={1}>
          <Grid item xs={10} md={6}>
            <Box>
              <Typography variant="h6">Number of Cryptocurrencies</Typography>
              <Avatar
                sx={{ bgcolor: "green", width: "90px" }}
                p={3}
                variant="rounded"
              >
                {millify(globalStats?.total)}
              </Avatar>
            </Box>
          </Grid>

          <Grid item xs={10} md={6}>
            <Box>
              <Typography variant="h6">Total Exchange</Typography>
              <Avatar
                sx={{ bgcolor: "green", width: "90px" }}
                variant="rounded"
              >
                {millify(globalStats?.totalExchanges)}
              </Avatar>
            </Box>
          </Grid>
          <Grid item xs={10} md={6}>
            <Box>
              <Typography variant="h6">Total Market Cap</Typography>
              <Avatar
                sx={{ bgcolor: "green", width: "90px" }}
                variant="rounded"
              >
                {millify(globalStats?.totalMarketCap)}
              </Avatar>
            </Box>
          </Grid>
          <Grid item xs={10} md={6}>
            <Box>
              <Typography variant="h6">24 Hours Volumn</Typography>
              <Avatar
                sx={{ bgcolor: "green", width: "90px" }}
                variant="rounded"
              >
                {millify(globalStats?.total24hVolume)}
              </Avatar>
            </Box>
          </Grid>
          <Grid item xs={10} md={6}>
            <Box>
              <Typography variant="h6">Total Markets</Typography>
              <Avatar
                sx={{ bgcolor: "green", width: "90px" }}
                variant="rounded"
              >
                {millify(globalStats?.totalMarkets)}
              </Avatar>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box mt={3}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h4">Top Ten Cryptos in the world</Typography>
          <Typography mr={5} variant="h6" color="blue">
            <Link to="/cryptocurencies">show more</Link>
          </Typography>
        </Box>
        <Cryptocurencies simplified />
      </Box>

      <Box mt={3}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h4">World Crypto News</Typography>
          <Typography mr={5} variant="h6" color="blue">
            <Link to="/">show more</Link>
          </Typography>
        </Box>
        <News />
      </Box>
    </>
  );
};

export default Hompage;

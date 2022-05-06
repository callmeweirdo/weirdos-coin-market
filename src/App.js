import React from "react";
// ? React router imports
import { Routes, Route } from "react-router-dom";

// ? styles import
import { Box, Grid, Typography } from "@mui/material";
import { HomeOutlined } from "@mui/icons-material";

import {
  Homepage,
  Header,
  Navbar,
  CryptoDetails,
  Cryptocurencies,
  Exchange,
  News,
  Footer,
} from "./components";

const App = () => {
  return (
    <Box>
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={4} md={3}>
          <Navbar sx={{ backgroundColor: "red" }} />
        </Grid>
        <Grid item xs={9}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/exchanges" element={<Exchange />} />
            <Route path="/cryptocurencies" element={<Cryptocurencies />} />
            <Route path="/crypto/:coinId" element={<CryptoDetails />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
};

export default App;

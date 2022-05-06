import React from "react";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        // direction: "column",
        marginBottom: "0px",
      }}
    >
      <Box>
        <Typography>Weirdos Crypto</Typography>
      </Box>
      <Box>
        <Typography>All Right reserved</Typography>
      </Box>
      <Box>
        <Link to="/">
          <Typography>Weirdos Crypto</Typography>
        </Link>
        <Link to="/exchange">
          <Typography>Exchnage</Typography>
        </Link>
        <Link to="/news">
          <Typography>News</Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;

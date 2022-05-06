import React from "react";

import { Link } from "react-router-dom";

import {
  AppBar,
  Box,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  CurrencyBitcoin,
  CurrencyBitcoinOutlined,
  CurrencyExchangeOutlined,
  Home,
  NewspaperOutlined,
  RocketLaunchOutlined,
  Search,
} from "@mui/icons-material";

const Navbar = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 360,
        // backgroundColor: "red",
        color: "red",
        height: "100%",
      }}
    >
      <nav aria-label="main mailbox folders">
        <List>
          <Link to="/">
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/cryptocurencies">
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <CurrencyBitcoinOutlined />
                </ListItemIcon>
                <ListItemText primary="Crypto Currencies" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="exchanges">
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <CurrencyExchangeOutlined />
                </ListItemIcon>
                <ListItemText primary="Exchange" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="news">
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <NewspaperOutlined />
                </ListItemIcon>
                <ListItemText primary="News" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </nav>
    </Box>
  );
};

export default Navbar;

import React from "react";

import {
  AppBar,
  Box,
  Grid,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { RocketLaunchOutlined, Search } from "@mui/icons-material";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <RocketLaunchOutlined />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            MUI
          </Typography>
          <Search />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;

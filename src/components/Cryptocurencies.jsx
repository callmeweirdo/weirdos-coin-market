import { Favorite, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  CircularProgress,
  Grid,
  IconButton,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import millify from "millify";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";

const Cryptocurencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const {
    data: CryptoList,
    isFetching,
    isError,
    isSuccess,
  } = useGetCryptosQuery(count);
  const [cryptos, setCrypotos] = useState(CryptoList?.data?.coins);

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  if (isFetching) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return <Typography>fetching error...</Typography>;
  }

  if (isSuccess) {
    return (
      <Box mt={2}>
        <Grid container spacing={2}>
          {cryptos?.map((crypto) => (
            <Grid item xs={12} md={3} key={crypto.uuid}>
              <Card>
                <CardHeader
                  avatar={
                    <Avatar
                      src={crypto.iconUrl}
                      sx={{ bgcolor: "red" }}
                      aria-label="recipe"
                    />
                  }
                  action={
                    <Avatar
                      alt="Remy Sharp"
                      variant="square"
                      sx={{ width: 24, height: 24 }}
                    >
                      {crypto.rank}
                    </Avatar>
                  }
                  title={crypto.name}
                  subheader={millify(crypto.price)}
                />

                <CardContent>
                  <Typography variant="h6" color="text.secondary">
                    {millify(crypto.price)}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    {millify(crypto.marketCap)}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    {millify(crypto.change)}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <Favorite />
                  </IconButton>
                  <IconButton aria-label="share">
                    <Share />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }
};

export default Cryptocurencies;

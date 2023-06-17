import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Grid
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            sx={{ fontSize: "23px", fontWeight: "bolder", textAlign: "center" }}
          >
            Machine Test
          </Typography>
          <Typography sx={{ textAlign: "center", my: 2 }}>
            Name : VIJEESH V
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              fullWidth
              variant="contained"
              sx={{ bgcolor: "grey" }}
              onClick={() => navigate("/table-data")}
            >
              Enter
            </Button>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default HomePage;

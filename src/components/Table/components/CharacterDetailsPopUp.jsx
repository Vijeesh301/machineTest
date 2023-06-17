import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const CharacterDetailsPopUp = ({ characterDetails }) => {
  return (
    <>
      <Grid>
        <Typography textAlign={"center"} fontSize={"25px"} fontWeight={"bold"}>
          The Lord of the Rings API
        </Typography>
        <Typography textAlign={"center"} fontSize={"18px"} my={1}>
          The one API to rule them all
        </Typography>
        <Box p={3}>
          <Grid p={1}>
            <Typography textAlign={"center"} fontWeight={"bold"}>
              Characters {">"} {characterDetails[0]?.name}
            </Typography>
          </Grid>
          <Grid p={3}>
            <Box display={"flex"}>
              <Typography mr={6}>Name</Typography>
              <Typography>{characterDetails[0]?.name}</Typography>
            </Box>
            <br></br>
            <Box display={"flex"}>
              <Typography mr={5}>WikiUrl</Typography>
              <Typography>{characterDetails[0]?.wikiUrl}</Typography>
            </Box>
            <br></br>
            <Box display={"flex"}>
              <Typography mr={7}>Race</Typography>
              <Typography>{characterDetails[0]?.race}</Typography>
            </Box>
            <br></br>
            <Box display={"flex"}>
              <Typography mr={5}>Gender</Typography>
              <Typography>{characterDetails[0]?.gender}</Typography>
            </Box>
            <br></br>
            <Box display={"flex"}>
              <Typography mr={6}>Height</Typography>
              <Typography>
                {characterDetails[0]?.height === ""
                  ? "-"
                  : characterDetails[0]?.height}
              </Typography>
            </Box>
            <br></br>
            <Box display={"flex"}>
              <Typography mr={8}>Hair</Typography>
              <Typography>
                {characterDetails[0]?.hair === ""
                  ? "-"
                  : characterDetails[0]?.hair}
              </Typography>
            </Box>
            <br></br>
            <Box display={"flex"}>
              <Typography mr={6}>Realm</Typography>
              <Typography>
                {characterDetails[0]?.realm === ""
                  ? "-"
                  : characterDetails[0]?.realm}
              </Typography>
            </Box>
            <br></br>
            <Box display={"flex"}>
              <Typography mr={7.5}>Birth</Typography>
              <Typography>
                {characterDetails[0]?.birth === ""
                  ? "-"
                  : characterDetails[0]?.birth}
              </Typography>
            </Box>
            <br></br>
            <Box display={"flex"}>
              <Typography mr={4.5}>Spouse</Typography>
              <Typography>{characterDetails[0]?.spouse}</Typography>
            </Box>
            <br></br>
            <Box display={"flex"}>
              <Typography mr={6}>Death</Typography>
              <Typography>
                {characterDetails[0]?.death === ""
                  ? "-"
                  : characterDetails[0]?.death}
              </Typography>
            </Box>
          </Grid>
        </Box>
      </Grid>
    </>
  );
};

export default CharacterDetailsPopUp;

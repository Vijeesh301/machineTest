import {
  Box,
  Card,
  Grid,
  Table,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TableBody,
  TableContainer,
  InputAdornment,
  Stack,
  Pagination,
} from "@mui/material";
import React from "react";
import { useTableData } from "../hooks/useTableData";
import SearchIcon from "@mui/icons-material/Search";
import PopUp from "../../PopUp/PopUp";
import CharacterDetailsPopUp from "./CharacterDetailsPopUp";
import { RotatingLines } from "react-loader-spinner";

const TableData = () => {
  const {
    setDatasPerPage,
    charactersHandleChange,
    formValues,
    multipleRace,
    setMultipleRace,
    handleSubmit,
    currentRecords,
    setCurrentPage,
    getCharacterDetailsById,
    characterDetails,
    characterPopUp,
    characterPopUpHandleClose,
    isLoading,
    isDataLoading,
    idData,
    setIdData,
    isIdDataLoading,
    getAllCharacterList,
  } = useTableData();

  const characterDetailsChild = (
    <CharacterDetailsPopUp characterDetails={characterDetails} />
  );
  return (
    <>
      <Grid p={4}>
        <Typography textAlign={"center"} fontSize={"25px"} fontWeight={"bold"}>
          The Lord of the Rings API
        </Typography>
        <Typography textAlign={"center"} fontSize={"18px"} my={1}>
          The one API to rule them all
        </Typography>
        <Card>
          <Grid p={1}>
            <Typography textAlign={"center"} fontWeight={"bold"}>
              Characters
            </Typography>
          </Grid>
          <Grid container p={2} spacing={2}>
            <Grid
              item
              display={"flex"}
              alignItems={"center"}
              gap={2}
              xs={12}
              md={6}
              lg={6}
            >
              <Typography>Search</Typography>
              <TextField
                fullWidth
                size="small"
                type="search"
                label="By Name"
                variant="outlined"
                name="search"
                value={formValues.search}
                onChange={(e) => {
                  charactersHandleChange(e);
                  if (formValues?.search?.length === 0) {
                    getAllCharacterList();
                  }
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid
              item
              display={"flex"}
              alignItems={"center"}
              gap={2}
              xs={12}
              md={6}
              lg={6}
            >
              <Grid item xs={1.65} md={2} lg={1}>
                <Typography>Sort By</Typography>
              </Grid>
              <FormControl fullWidth>
                <InputLabel size="small">By Name (asc/desc)</InputLabel>
                <Select
                  size="small"
                  name="sort"
                  value={formValues.sort}
                  label="By Name (asc/desc)"
                  onChange={(e) => {
                    charactersHandleChange(e);
                  }}
                >
                  <MenuItem value="asc">Asending</MenuItem>
                  <MenuItem value="desc">Descending</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              display={"flex"}
              alignItems={"center"}
              gap={2}
              xs={6}
              md={4}
              lg={4}
            >
              <Grid itme xs={4.2} md={2.2} lg={1.55}>
                <Typography>Race</Typography>
              </Grid>
              <FormControl fullWidth>
                <InputLabel size="small">List of Races</InputLabel>
                <Select
                  multiple
                  size="small"
                  name="race"
                  value={multipleRace}
                  label="List of Races"
                  onChange={(e) => {
                    setMultipleRace(e.target.value);
                  }}
                >
                  <MenuItem value="Hobbit">Hobbit</MenuItem>
                  <MenuItem value="Human">Human</MenuItem>
                  <MenuItem value="Orc">Orc</MenuItem>
                  <MenuItem value="Goblin">Goblin</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              display={"flex"}
              alignItems={"center"}
              gap={2}
              xs={6}
              md={4}
              lg={4}
            >
              <Grid itme xs={4.2} md={2}>
                <Typography>Gender</Typography>
              </Grid>
              <FormControl fullWidth>
                <InputLabel size="small">Female/Male/Any</InputLabel>
                <Select
                  size="small"
                  name="gender"
                  value={formValues.gender}
                  label="Female/Male/Other"
                  onChange={(e) => {
                    charactersHandleChange(e);
                  }}
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Any">Any</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              display={"flex"}
              alignItems={"center"}
              justifyContent={"end"}
              xs={6}
              md={4}
              lg={4}
            >
              <Button
                sx={{ minWidth: "70%", bgcolor: "grey" }}
                variant="contained"
                onClick={() => {
                  handleSubmit();
                }}
              >
                {isLoading ? (
                  <RotatingLines
                    strokeColor="white"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="15"
                    visible={true}
                  />
                ) : (
                  "Submit"
                )}
              </Button>
            </Grid>
          </Grid>
          <Grid xs={12} md={12} lg={12}>
            <TableContainer sx={{ maxHeight: 350 }}>
              <Table stickyHeader={true}>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ color: "white", bgcolor: "grey" }}>
                      ID
                    </TableCell>
                    <TableCell sx={{ color: "white", bgcolor: "grey" }}>
                      Name
                    </TableCell>
                    <TableCell sx={{ color: "white", bgcolor: "grey" }}>
                      Race
                    </TableCell>
                    <TableCell sx={{ color: "white", bgcolor: "grey" }}>
                      Gender
                    </TableCell>
                    <TableCell sx={{ color: "white", bgcolor: "grey" }}>
                      Actions
                    </TableCell>
                  </TableRow>
                </TableHead>
                {isDataLoading ? (
                  <TableBody>
                    <TableRow>
                      <TableCell colSpan={12}>
                        <Box
                          display={"flex"}
                          justifyContent={"center"}
                          alignItems={"center"}
                          height={"30vh"}
                        >
                          <RotatingLines
                            strokeColor="grey"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="25"
                            visible={true}
                          />
                        </Box>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                ) : (
                  <TableBody>
                    {currentRecords?.map((data, i) => {
                      return (
                        <TableRow>
                          <TableCell>{i + 1}</TableCell>
                          <TableCell>{data.name}</TableCell>
                          <TableCell>{data.race}</TableCell>
                          <TableCell>{data.gender}</TableCell>
                          <TableCell sx={{ cursor: "pointer" }}>
                            <Typography
                              onClick={() => {
                                setIdData(data._id);
                                getCharacterDetailsById(data._id);
                              }}
                            >
                              {idData === data._id ? (
                                isIdDataLoading ? (
                                  <RotatingLines
                                    strokeColor="grey"
                                    strokeWidth="5"
                                    animationDuration="0.75"
                                    width="15"
                                    visible={true}
                                  />
                                ) : (
                                  <Typography sx={{ fontSize: "14px" }}>
                                    Details {">>"}
                                  </Typography>
                                )
                              ) : (
                                <Typography sx={{ fontSize: "14px" }}>
                                  Details {" >> "}
                                </Typography>
                              )}
                            </Typography>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Grid>
          <Grid m={2} display={"flex"} justifyContent={"space-between"}>
            <Box>
              <Stack spacing={2}>
                <Pagination
                  count={94}
                  onChange={(e, page) => setCurrentPage(page)}
                />
              </Stack>
            </Box>
            <Box sx={{ width: "80px" }}>
              <FormControl fullWidth>
                <Select
                  size="small"
                  defaultValue={10}
                  onChange={(e) => {
                    setDatasPerPage(e.target.value);
                  }}
                >
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={20}>20</MenuItem>
                  <MenuItem value={50}>50</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Card>
      </Grid>
      <PopUp
        open={characterPopUp}
        handleClose={characterPopUpHandleClose}
        children={characterDetailsChild}
      />
    </>
  );
};

export default TableData;

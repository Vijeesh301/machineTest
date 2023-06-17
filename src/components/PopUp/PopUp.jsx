import React from "react";
import { Box, Grid, Modal, Typography } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const PopUp = ({ open, handleClose, children }) => {
  return (
    <Grid container>
      <Grid item xs={4} sm={4}>
        <Modal open={open}>
          <Box
            sx={{
              minWidth: "70%",
              top: "50%",
              left: "50%",
              bgcolor: "background.paper",
              position: "absolute",
              transform: "translate(-50%, -50%)",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            <Box sx={{ textAlign: "end", cursor: "pointer" }}>
              <Typography>
                <HighlightOffIcon onClick={handleClose} />
              </Typography>
            </Box>
            <Box>{children}</Box>
          </Box>
        </Modal>
      </Grid>
    </Grid>
  );
};

export default PopUp;

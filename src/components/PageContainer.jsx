import React from "react";
import Navbar from "./Navbar";
import { CssBaseline, Container, Box, Grid, Typography } from "@mui/material";

const PageContainer = (props) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="lg">
        <Box sx={{ height: "100vh" }}>
          {props.children}{" "}
          <Grid
            item
            xs={12}
            sx={{ pb: 5 }}
            style={{ color: "white", textAlign: "center" }}
          >
            <Typography variant="h5">FIQSTORE</Typography>
            <Typography variant="caption">
              Fiqstore: Website top-up termurah
            </Typography>
            <Typography sx={{ mt: 2 }}>
              Setiap bulannya, jutaan gamers menggunakan Fiqstore untuk
              melakukan pembelian kredit game dengan lancar: tanpa registrasi
              ataupun log-in, dan kredit permainan akan ditambahkan secara
              instan. Top-up Mobile Legends, Free Fire, dan berbagai game
              lainnya!
            </Typography>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default PageContainer;

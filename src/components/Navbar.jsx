import { Button, Container, Grid } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/user";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  return (
    <div
      style={{
        backgroundColor: "#383838",
        padding: 20,
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={6}>
            <span style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
              <b>FISQTORE</b> <small>Website topup voucher game termurah</small>
            </span>
          </Grid>
          <Grid item xs={6}>
            {!user.username ? (
              <>
                <Button
                  variant="contained"
                  style={{ float: "right" }}
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>
                <Button
                  sx={{ mr: 3 }}
                  variant="outlined"
                  style={{ float: "right" }}
                  onClick={() => navigate("/signup")}
                >
                  Signup
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="contained"
                  style={{ float: "right" }}
                  onClick={() => dispatch(logout())}
                >
                  Logout
                </Button>
                <Button
                  variant="outlined"
                  style={{ float: "right" }}
                  sx={{ mr: 3 }}
                  onClick={() => navigate("/history-order")}
                >
                  History
                </Button>
              </>
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Navbar;

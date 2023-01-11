import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import PageContainer from "../../components/PageContainer";
import User from "../../service/User";
import { setUser } from "../../redux/user";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const userService = new User();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async () => {
    const response = await userService.login({ username, password });
    dispatch(setUser(response));
    navigate("/");
  };

  return (
    <PageContainer>
      <Card sx={{ maxWidth: 400, mx: "auto", my: 5 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Login
          </Typography>
          <Typography variant="h5" component="div"></Typography>
          <Typography variant="caption">
            Login untuk menyimpan history order
          </Typography>
          <TextField
            sx={{ mt: 3 }}
            id="outlined-basic"
            label="Username"
            variant="outlined"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <TextField
            sx={{ mt: 3 }}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type={"password"}
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            sx={{ mt: 3 }}
            variant="contained"
            fullWidth
            onClick={handleSubmit}
          >
            Login
          </Button>
        </CardContent>
      </Card>
    </PageContainer>
  );
};

export default Login;

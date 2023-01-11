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

const Signup = () => {
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = () => {
    console.log({ username, name, password });
  };

  return (
    <PageContainer>
      <Card sx={{ maxWidth: 400, mx: "auto", my: 5 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Signup
          </Typography>
          <Typography variant="h5" component="div"></Typography>
          <Typography variant="caption">
            Signup untuk menyimpan history order
          </Typography>
          <TextField
            sx={{ mt: 3 }}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
            Signup
          </Button>
        </CardContent>
      </Card>
    </PageContainer>
  );
};

export default Signup;

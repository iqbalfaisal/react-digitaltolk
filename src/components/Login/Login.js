import {
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

export const Login = ({ setToken }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    setShowPassword((prev) => !prev);
  };

  const signInForm = (event) => {
    event.preventDefault();

    setToken("token", "Bearer Zl49StyUu9721TFoRHfDqGmEVikCKNhJayGUgDvK");
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      height={"80vh"}
    >
      <Grid item xs="auto">
        <Typography style={{ fontSize: "30px" }}>Log In</Typography>
      </Grid>
      <Grid item xs="auto" style={{ marginTop: "50px" }}>
        <TextField
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "345px",
            border: "1px solid #E8E8E8",
            backgroundColor: "#F6F6F6 !important",
            borderRadius: "8px",
          }}
        />
      </Grid>
      <Grid item xs="auto" style={{ marginTop: "16px" }}>
        <TextField
          id="outlined-password-input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={showPassword ? "password" : "text"}
          autoComplete="current-password"
          InputProps={{
            endAdornment: true ? (
              <InputAdornment position="end">
                <Typography
                  onClick={handleClick}
                  edge="end"
                  style={{ fontSize: "14px" }}
                >
                  {showPassword ? "Show" : "UnShow"}
                </Typography>
              </InputAdornment>
            ) : null,
          }}
          style={{
            width: "345px",
            border: "1px solid #E8E8E8",
            backgroundColor: "#F6F6F6 !important",
            borderRadius: "8px",
          }}
        />
      </Grid>
      <Grid item xs="auto" style={{ marginTop: "42px" }}>
        <Button
          variant="contained"
          onClick={signInForm}
          color="success"
          style={{
            backgroundColor: "#000000",
            fontSize: "18px",
            alignItems: "center",
            width: "345px",
            textTransform: "none",
            borderRadius: "100px",
          }}
        >
          Log in
        </Button>
      </Grid>
    </Grid>
  );
};

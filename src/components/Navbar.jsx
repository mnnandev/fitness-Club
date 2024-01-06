import React from "react";
import logo from "../assets/images/Logo.png";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { xs: "40px", sm: "122px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px='26px'
    >
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          style={{ width: "48x", height: "48px", margin: "0 20px" }}
        />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="flex-end"
        sx={{ border: 0 }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #FF2625",
          }}
        >
          Home
        </Link>
        <a
          href="#excersice"
          style={{ textDecoration: "none", color: "@3A1212" }}
        >
          Excercise
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;

import { useState } from "react";
import "./App.css";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ExcerciseDetail from "./pages/ExcerciseDetail";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Box sx={{ border: 0 , width:{xl:'1448px'}}} width="400px" m='auto' >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/excercise/id" element={<ExcerciseDetail />} />
          <Route />
        </Routes>
        <Footer />
      </Box>
    </>
  );
}

export default App;

"use client";
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import volumeImage from "@/images/volume.png";
import Link from "next/link";
import refreshImage from "@/images/refresh.png";
import Candidate_main from "../main/page";

const Dashboard = () => {
  const [alignment, setAlignment] = useState("otr_id");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    if (newAlignment) {
      setAlignment(newAlignment);
    }
  };
  return (
    <Container maxWidth="xl" sx={{ height: "auto", fontFamily: "" }}>
    <Candidate_main/>
    </Container>
  );
};

export default Dashboard;

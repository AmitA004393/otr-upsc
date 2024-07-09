"use client";
import React from "react";
import {
  Grid,
  Typography,
  Box,
  Tooltip,
  IconButton,
  Button,
} from "@mui/material";
import {
  CustomContainer,
  CustomImage,
  CustomRequiredField,
  CustomText,
  CustomTextField,
} from "@/component/common/CommonComponet";

import { styled } from "@mui/material/styles";
import RefreshIcon from "@mui/icons-material/Refresh";
import SendIcon from "@mui/icons-material/Send";

import aadharIMG from "../../../images/aadhar.png"
import Image from "next/image";

const UserInfo = styled(Typography)`
  font-size: 18px;
`;

const Info10 = styled("strong")`
  font-size: 18px;
  color: #424c6c;
  margin-top: 10px;
  margin-bottom: 0px;
  display: block;
`;

const CustomBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[0],
  textAlign: "center",
  width: "100%",
  maxWidth: "600px",
  margin: "auto",
  position: "relative",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));

const CustomHeading = styled(Typography)(({ theme }) => ({
  fontSize: "26px",
  fontFamily: "Roboto",
  fontWeight: 700,
  wordWrap: "break-word",
  marginBottom: theme.spacing(2),
  textAlign: "left",
  color: "#2947A3",
  [theme.breakpoints.down("sm")]: {
    fontSize: "22px",
  },
}));

const CustomLabel = styled(Typography)(({ theme }) => ({
  textAlign: "left",
  fontWeight: 600,
  marginBottom: theme.spacing(1),
}));

const ResponsiveButton = styled(Button)(({ theme }) => ({
  width: "100%",
//   color:'#2947A3',
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "16px",
  },
}));

const AdharVerification = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
      spacing={2}
    >
      <Grid item xs={12} md={8} lg={6}>
        <CustomBox>
          <CustomHeading>Aadhaar Verification</CustomHeading>
          <Image src={`/${aadharIMG}`} width={50} height={50} alt="Aadhaar" />
          <CustomText>
            You need to enter your OTP number and click on
            <br />
            confirm button
          </CustomText>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <CustomLabel>
                Aadhaar Number / VID Number{" "}
                <span style={{ color: "red" }}>*</span>
              </CustomLabel>
              <CustomTextField variant="outlined" fullWidth required />
            </Grid>
            <Grid item xs={12}>
              <Tooltip title="Captcha Refresh">
                <IconButton
                  aria-label="refresh captcha"
                  color="success"
                  style={{ textAlign: "left", marginBottom: "4px" }}
                >
                  <RefreshIcon
                    style={{ fontSize: "30px", display: "inline-block" }}
                  />
                </IconButton>
              </Tooltip>
              <CustomTextField variant="outlined" fullWidth required />
            </Grid>
            <Grid item xs={12}>
              <ResponsiveButton
                variant="contained"
                // color="primary"
                endIcon={<SendIcon />}
              >
                Send OTP
              </ResponsiveButton>
            </Grid>
          </Grid>
        </CustomBox>
      </Grid>
    </Grid>
  );
};

export default AdharVerification;

"use client";
import ForgotpassSteps from "@/component/common/ForgotpassSteps";
import {
  Box,
  Button,
  Container,
  Grid,
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
const CandidateForgotPassword = () => {
  const [alignment, setAlignment] = useState("email");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    if (newAlignment) {
      setAlignment(newAlignment);
    }
  };
  return (
    <Container maxWidth="lg">
      <Grid spacing={2} container>
        <Grid xs={12} md={7} item sx={{}}>
          {/* <DynamicForm config={formConfig.candidateForm} />  */}
          <Box
            sx={{
              border: "1px solid gray",
              width: "660px",
              height: "606px",
              borderRadius: "4px 4px 0px 0px",
              //   display: "flex",
              justifyContent: "center",
              //   alignItems: "center",
              marginTop: "20px",
              mx: "auto",
              //   my: "auto",
            }}
          >
            <Box
              sx={{
                display: "flex",
                border: "1px solid gray",
                height: "60px",
                width: "100%",
                borderRadius: "4px 4px 0px 0px",
                background: "#2947A3",

                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  padding: "0 16px",
                  fontSize: "20px",
                  fontWeight: 700,
                  alignItems: "center",
                }}
              >
                Forgot Password
              </Typography>
            </Box>
            <Box
              sx={{
                // border: "1px solid gray",
                height: "420px",
                width: "90%",
                mx: "auto",
                marginTop: "30px",
              }}
            >
              {/* <FormControl variant="standard"> */}
              <Box>
                <Typography>Select Mode*</Typography>
                <ToggleButtonGroup
                  color="primary"
                  value={alignment}
                  exclusive
                  onChange={handleChange}
                  aria-label="Platform"
                  size="medium"
                  sx={{ width: "100%", border: "1px solid blue" }}
                  //   style={{ width: '500px', border: '1px solid red' }}
                >
                  {/* <ToggleButton
                    value="otr_id"
                    sx={{ width: "34%", border: "1px solid blue" }}
                  >
                    OTR ID
                  </ToggleButton> */}
                  <ToggleButton
                    value="email"
                    sx={{ width: "51%", border: "1px solid blue" }}
                  >
                    EMAIL
                  </ToggleButton>
                  <ToggleButton
                    value="mobile"
                    sx={{ width: "50%", border: "1px solid blue" }}
                  >
                    MOBILE
                  </ToggleButton>
                  {/* <ToggleButton
                value="aadhaar"
                sx={{ width: "26%", border: "1px solid blue" }}
              >
                AADHAAR
              </ToggleButton> */}
                </ToggleButtonGroup>
              </Box>
              {alignment === "email" && (
                <Box>
                  <Box sx={{ alignItems: "center" }}>
                    {" "}
                    <Typography sx={{ marginTop: "20px" }}>Email*</Typography>
                    <TextField
                      size="small"
                      sx={{
                        width: "75%",
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "4px 0 0 4px",
                          height: "41px",
                        },
                      }}
                      placeholder="Please enter email"
                    ></TextField>
                    <Button
                      sx={{
                        width: "25%",
                        height: "41px",
                        borderRadius: "0 4px 4px 0",
                      }}
                      variant="contained"
                      size="medium"
                    >
                      Send OTP
                    </Button>
                  </Box>
                  <Box>
                    {" "}
                    <Typography sx={{ marginTop: "20px" }}>
                      Enter OTP*
                    </Typography>
                    <TextField
                      size="small"
                      sx={{
                        width: "75%",
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "4px 0 0 4px",
                          height: "41px",
                        },
                      }}
                      placeholder="Enter OTP"
                    ></TextField>
                    <Button
                      sx={{
                        width: "25%",
                        height: "41px",
                        borderRadius: "0 4px 4px 0",
                      }}
                      variant="contained"
                      size="medium"
                    >
                      Verify OTP
                    </Button>
                    <Link href="" style={{ float: "right" }}>
                      Resend OTP
                    </Link>
                  </Box>
                  <Box>
                    {" "}
                    <Typography sx={{ marginTop: "20px" }}>Captcha*</Typography>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Image
                        src=""
                        alt=""
                        style={{ width: "147px", height: "38.667px" }}
                      />
                      <Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography sx={{ marginRight: "5px" }}>
                            Click here for audio
                          </Typography>
                          <Image
                            src={volumeImage}
                            alt=""
                            style={{ cursor: "pointer" }}
                          />
                        </Box>
                        <Box sx={{ display: "flex" }}>
                          <Typography sx={{ marginRight: "5px" }}>
                            Click here to refresh
                          </Typography>
                          <Image
                            src={refreshImage}
                            alt=""
                            style={{ cursor: "pointer" }}
                          />
                        </Box>
                      </Box>
                    </Box>
                    <TextField
                      size="small"
                      sx={{ width: "100%", marginTop: "15px" }}
                    ></TextField>
                  </Box>
                  <span>
                    (*) Star marked fields are essentially to be filled
                  </span>
                </Box>
              )}
              {alignment === "mobile" && (
                <Box>
                  <Box>
                    {" "}
                    <Typography sx={{ marginTop: "20px" }}>Mobile*</Typography>
                    <TextField
                      size="small"
                      sx={{
                        width: "75%",
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "4px 0 0 4px",
                          height: "41px",
                        },
                      }}
                      placeholder="Please enter mobile no"
                    ></TextField>
                    <Button
                      sx={{
                        width: "25%",
                        height: "41px",
                        borderRadius: "0 4px 4px 0",
                      }}
                      variant="contained"
                      size="medium"
                    >
                      Send OTP
                    </Button>
                  </Box>
                  <Box>
                    {" "}
                    <Typography sx={{ marginTop: "20px" }}>
                      Enter OTP*
                    </Typography>
                    <TextField
                      size="small"
                      sx={{
                        width: "75%",
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "4px 0 0 4px",
                          height: "41px",
                        },
                      }}
                      placeholder="Enter OTP"
                    ></TextField>
                    <Button
                      sx={{
                        width: "25%",
                        height: "41px",
                        borderRadius: "0 4px 4px 0",
                      }}
                      variant="contained"
                      size="medium"
                    >
                      Verify OTP
                    </Button>
                    <Link href="" style={{ float: "right" }}>
                      Resend OTP
                    </Link>
                  </Box>

                  <Box>
                    {" "}
                    <Typography sx={{ marginTop: "20px" }}>Captcha*</Typography>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Image
                        src=""
                        alt=""
                        style={{ width: "147px", height: "38.667px" }}
                      />
                      <Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography sx={{ marginRight: "5px" }}>
                            Click here for audio
                          </Typography>
                          <Image
                            src={volumeImage}
                            alt=""
                            style={{ cursor: "pointer" }}
                          />
                        </Box>
                        <Box sx={{ display: "flex" }}>
                          <Typography sx={{ marginRight: "5px" }}>
                            Click here to refresh
                          </Typography>
                          <Image
                            src={refreshImage}
                            alt=""
                            style={{ cursor: "pointer" }}
                          />
                        </Box>
                      </Box>
                    </Box>
                    <TextField
                      size="small"
                      sx={{ width: "100%", marginTop: "15px" }}
                      placeholder="Please enter captcha"
                    ></TextField>
                  </Box>
                  <span>
                    (*) Star marked fields are essentially to be filled
                  </span>
                </Box>
              )}
            </Box>
            <Box
              sx={{
                // border: "1px solid gray",
                width: "90%",
                mx: "auto",
                // marginTop: "30px",
              }}
            >
              <Button variant="contained" fullWidth>
                SUBMIT
              </Button>
              {/* <Link href="/about" style={{ float: "right" }}>
            Forgot Password
          </Link> */}
            </Box>
          </Box>
        </Grid>
        <Grid xs={12} md={5} item sx={{}}>
          <ForgotpassSteps />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CandidateForgotPassword;


import { Box, Card, Grid } from "@mui/material";
import { memo } from "react";
import demoImage from "../../../images/image 5.png";
import { Table } from "reactstrap";
import { ProfileStyle } from "./profile.style";
import { TextBlur } from "./TextBlur";
import Cardintro from "./card";

// Define the SVG icon component
const OkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
    <path d="M19.7387 22.3861C19.6701 22.3758 19.4986 22.3603 19.3323 22.326C17.5607 21.9624 17.1491 22.1957 16.331 23.8594C16.1345 24.2617 15.8229 24.5966 15.4358 24.8215C14.7755 25.1646 14.1255 24.9931 13.5493 24.4785C12.1155 23.2042 11.6405 23.1853 10.1399 24.2676C9.0474 25.0548 7.85032 24.662 7.42157 23.3757C6.83504 21.6143 6.48689 21.381 4.6364 21.5131C3.14435 21.6194 2.37946 20.7481 2.68987 19.2937C3.05002 17.6095 2.78763 17.0984 1.17895 16.3643C-0.146746 15.7589 -0.3817 14.5566 0.613004 13.4641C1.77921 12.1829 1.80322 11.622 0.760492 10.1762C-0.0798612 9.01335 0.348884 7.79562 1.73975 7.38914C3.26954 6.94321 3.66227 6.36007 3.49763 4.76845C3.32613 3.13051 4.20936 2.35014 5.81461 2.7206C7.27579 3.06363 7.99267 2.68973 8.58263 1.3022C9.20003 -0.150498 10.3903 -0.412906 11.5462 0.641888C12.7655 1.755 13.4104 1.78415 14.7721 0.787668C15.9726 -0.0956146 17.2503 0.302292 17.5984 1.75842C17.9088 3.06877 18.9516 3.77025 20.2481 3.5147C21.7916 3.21113 22.62 4.20075 22.2907 5.74435C21.9477 7.35312 22.2529 7.94141 23.7827 8.61201C25.1547 9.20887 25.3948 10.4609 24.3607 11.5551C23.2356 12.7454 23.1928 13.3972 24.148 14.6989C25.1033 16.0007 24.7208 17.1636 23.1533 17.6266C21.7247 18.0503 21.2857 18.738 21.4932 20.2336C21.6784 21.5577 21.025 22.4032 19.7387 22.3861ZM11.1826 15.3541C10.2822 14.0918 9.45385 12.9032 8.59464 11.7369C8.06641 11.0166 7.39413 10.8794 6.74243 11.315C6.09073 11.7507 5.90036 12.5156 6.39943 13.2548C7.57821 14.9699 8.77872 16.6702 10.0009 18.3556C10.6869 19.2817 11.5839 19.3143 12.2699 18.3882C14.5491 15.3232 16.7906 12.2292 19.0236 9.12655C19.1354 8.98566 19.217 8.82321 19.2633 8.64937C19.3095 8.47553 19.3195 8.29401 19.2924 8.11617C19.2654 7.93832 19.202 7.76795 19.1061 7.61571C19.0103 7.46347 18.8841 7.33263 18.7355 7.23135C18.1232 6.76827 17.4355 6.88832 16.8678 7.56408C16.7203 7.73559 16.59 7.92597 16.4562 8.1112L11.1826 15.3541Z" fill="#3AC47D"/>
  </svg>
);
const uploadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
      <circle cx="16" cy="16.332" r="15.5" fill="white" stroke="#CDD4E0" />
    </svg>
  );
// eslint-disable-next-line react/display-name
const Profile = memo(() => {
  return (
    <>
      <ProfileStyle>
        <div className="heading"> Candidate Profile</div>
        <Card
          className="p-4"
          sx={{
            background: "var(--bgwhite)",
          }}
        >
          <Grid container className="box" spacing={2}>
            <Grid item xs={12} sm={6} md={5}>
              <div className="profilebox">
                <div className="profileimgbox">
                  <Box>
                    <img src={demoImage.src} alt="Profile" />
                  </Box>

                  <Grid
                    container
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      width: "32px",
                      height: "33px",
                    }}
                  >
                    <OkIcon />
                  </Grid>
                </div>
                

                <div className="profileNameBox">
                <Grid
                  sx={{
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "left",
                  }}
                >
                  <OkIcon /> 
                </Grid>
                  <p
                    className="profileName"
                    style={{
                      color: "var(--textblack)",
                    }}
                  >
                    <strong>candidate score</strong>
                  </p>
                  <div style={{ color: "", fontSize: "9px" }}>View profile</div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={7}>
              <div className="profilebox">
                <Table>
                  <tbody>
                    <tr>
                      <td
                        style={{
                          color: "var(--textblack)",
                        }}
                      >
                        One Time Registration :
                      </td>
                      <td
                        style={{
                          color: "var(--textblack)",
                        }}
                      >
                        <text className="">
                          <TextBlur text="registrationid" /> 321000020282
                        </text>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          color: "var(--textblack)",
                        }}
                      >
                        Mobile Number :
                      </td>
                      <td
                        style={{
                          color: "var(--textblack)",
                        }}
                      >
                        <strong>
                          <TextBlur text="mobile" /> 6876866867
                        </strong>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          color: "var(--textblack)",
                        }}
                      >
                        Email ID :
                      </td>
                      <td
                        style={{
                          color: "var(--textblack)",
                        }}
                      >
                        <strong>
                          <TextBlur text="email" /> cand@gmail.in
                        </strong>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Grid>
          </Grid>

          <Cardintro />
        </Card>
      </ProfileStyle>
    </>
  );
});

export default Profile;

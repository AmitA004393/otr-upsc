
import styled from "@emotion/styled";
import { Box,Button, Typography } from "@mui/material";

export const CardBox = styled(Box)(({ theme }) => ({
    fontFamily: 'Nunito',
    display: 'flex',
    width: '100%',
    height: 'auto',
    // border: '1px solid #000000',
    borderRadius: '8px',
    minHeight: '100px',
    boxShadow: "0 10px 10px 20px rgb(176 184 214 / 9%),1px 1px 10px 0px #b0b8d6",
    transition: 'background-color 0.3s, border-color 0.3s', // Add smooth transition

    // '&:hover': {
    //   backgroundColor: '#f0f0f0', // Change the background color on hover
    //   borderColor: '#ff0000', // Change the border color on hover
    // },
  }));
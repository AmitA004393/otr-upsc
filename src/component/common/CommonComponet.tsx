"use client"
import React from "react";
import {
  TextField,
  Button,
  Box,
  MenuItem,
  Select,
  FormControl,
  Grid,
  Typography,
 
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";


export const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderWidth: "1px",
      borderColor: "#ced4da",
      borderRadius: "4px",
    },
    "& input": {
      padding: "8px 12px",
      height: "20px",
      color: "#757474",
      fontSize: "14px",
      fontFamily: "Roboto",
      fontWeight: 400,
      wordWrap: "break-word",
    },
    "&:hover fieldset": {
      borderColor: "#aaa",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#4d90fe",
      boxShadow: "0 0 0 0.1rem rgba(0, 123, 255, 0.25)",
    },
  },
});

export const CustomSelect = styled(Select)({
  padding: "8px 12px",
  height: "36px",
  color: "#757474",
  fontSize: "14px",
  fontFamily: "Roboto",
  fontWeight: 400,
  wordWrap: "break-word",
  border: "1px solid #ced4da",
  borderRadius: "4px",
  "&:focus": {
    outline: "none",
    borderColor: "#4d90fe",
    boxShadow: "0 0 0 0.1rem rgba(0, 123, 255, 0.25)",
  },
});

export const NoteContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#f0f0f0",
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(2),
  borderLeft: `4px solid ${theme.palette.primary.main}`,
  width: "100%",
  maxWidth: "100%",
  wordWrap: "break-word",
}));
interface CustomNoteProps {
  text: string;
}
export const NoteText = styled("p")({
  fontSize: "14px",
  color: "#333",
  margin: "0",
  lineHeight: "1.6",
});

export const CustomInputLabel = styled("label")({
  color: "black",

  fontWeight: 600,
  lineHeight: 1,
  textTransform: "capitalize",
  wordWrap: "break-word",

  "& span": {
    color: "black",

    fontWeight: 600,
    textTransform: "capitalize",
    wordWrap: "break-word",
  },
  "& .required": {
    color: "#DD344C",
    fontFamily: "Roboto",
    fontWeight: 600,
    textTransform: "capitalize",
    wordWrap: "break-word",
    marginLeft: "4px", // Adjust margin left as needed
  },
});
interface CustomRequiredFieldProps {
  label: string;
}

export const CustomRequiredField: React.FC<CustomRequiredFieldProps> = ({
  label,
}) => (
  <CustomInputLabel>
    {label}
    <span className="required">*</span>
  </CustomInputLabel>
);

export const CustomEmailField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderWidth: "1px",
      borderColor: "#ced4da",
      borderRadius: "4px",
    },
    "& input": {
      padding: "8px 12px", // Adjust padding as needed
      height: "20px", // Adjust height as needed
      color: "#757474",
      fontSize: "14px",
      fontFamily: "Roboto",
      fontWeight: 400,
      wordWrap: "break-word",
    },
  },
});

// export const SendOTPButton = styled(Button)({
//   height: '36px', // Adjust height as needed to match TextField
//   marginLeft: '10px', // Adjust margin as needed
//   fontSize: '14px', // Adjust font size as needed
//    variant:"contained",
//    color:'primary',
//   //  backgroundColor:'primary',
//    backgroundColor: 'var(--mysubmitbtn)',
//    '&:hover': {
//      background: 'var(--buttonHover)',
//    },

//    boxShadow: 'none',

// });

export const SendOTPButton = styled(Button)({
  height: "36px", // Adjust height as needed
  marginLeft: "10px", // Adjust margin as needed
  fontSize: "14px", // Adjust font size as needed
  backgroundColor: "#1976d2", // Primary color background
  color: "#ffffff", // Text color, usually white for contrast
  "&:hover": {
    backgroundColor: "#1565c0", // Darker shade when hovered
  },
});


export const CustomContainer = styled(Box)({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "20px",
});

export const CustomImage = styled(Image)({
  width: "130px",
  height: "83px",
});

export const CustomText = styled(Typography)({
  textAlign: "center",
  color: "#424C6C",
  fontSize: "18px",
  fontFamily: "Roboto",
  fontWeight: "600",
  wordWrap: "break-word",
});

export const CustomFormHeading = styled(Typography)({
  color: '#2947A3',
  fontSize: '26px',
  fontFamily: 'Roboto',
  fontWeight: 700,
  wordWrap: 'break-word',
});

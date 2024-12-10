// pages/contact.js
"use client";

import { Container } from "reactstrap";
import formConfig from "../Lib/formConfig";
import DynamicForm from "@/component/Form/DynamicForm";
import { Box, Grid, Typography } from "@mui/material";

const ContactPage = () => {
  return (
    <Box sx={{ margin: "0 150px" }}>
      <Typography variant="h1" sx={{ fontSize: "22px", fontWeight:600, mb:2 }}>
        Personal Details
      </Typography>
      <Grid container>
        <Grid xs={12} md={6} item>
          <DynamicForm config={formConfig.candidateForm} />
        </Grid>
        <Grid item></Grid>
      </Grid>
    </Box>
  );
};

export default ContactPage;

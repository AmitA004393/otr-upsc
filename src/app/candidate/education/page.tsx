"use client"
import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { ApplicationStep } from "../../../component/common/Steps";
import formConfig from "@/app/Validation/OtrForm";
import DynamicForm from "../../../component/Form/DynamicForm";
import { OtrStepperCard } from "@/component/Stepper/Stepper";


const EducationDetails = () => {
  return (
    <Container
    sx={{
      marginBottom: "20px",
    }}
    maxWidth="lg"
  >
    <Grid container>
      <Grid xs={12} md={12} item>
        <OtrStepperCard />
      </Grid>
    </Grid>

    <Grid sx={{}} container>
      <Grid
        sx={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "5px",
        }}
        xs={12}
        md={8}
        item
      >
        <Typography
          variant="h1"
          sx={{
            color: "#13296C",
            fontSize: "18px",
            fontWeight: 600,
            mb: 2,
            textAlign: "left",
          }}
        >
          Education Details
        </Typography>
        <DynamicForm config={formConfig.candidateEducation} />

      </Grid>
      <Grid xs={12} md={4} item>
        <ApplicationStep />
      </Grid>
    </Grid>
    </Container>
  );
};

export default EducationDetails;


import { Grid, Typography } from "@mui/material";
import React from "react";
import { ApplicationStep } from "../common/Steps";
import formConfig from "@/app/Validation/OtrForm";
import DynamicForm from "../Form/DynamicForm";


const PersonalInfo = () => {
  return (
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
          Personal Details
        </Typography>
        <DynamicForm config={formConfig.candidateForm} />

      </Grid>
      <Grid xs={12} md={4} item>
        <ApplicationStep />
      </Grid>
    </Grid>
  );
};

export default PersonalInfo;

// pages/contact.js
"use client";
import formConfig from "../Lib/otrViewConfig";
import DynamicDetails from "@/component/Form/DynamicDetails";
import { Box, Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
const OtrViewPage = () => {
  return (
    <Box sx={{ padding:"10px" }}>
      <Typography variant="h1" sx={{ fontSize: "22px", fontWeight:600, mb:2 }}>
        Personal Details
      </Typography>
      <Grid container>
        <Grid xs={12}  item>
          <DynamicDetails config={formConfig.candidateForm} />
        </Grid>
        <Grid item></Grid>
      </Grid>
      <Typography variant="h1" sx={{ fontSize: "22px", fontWeight:600, mb:2 }}>
        Educational Details
      </Typography>
      <Grid container style={{marginBottom:"10px"}}>
        <Grid xs={12}  item>
          <DynamicDetails config={formConfig.educationalDetails} />
          {/* contactDetails */}
        </Grid>
        <Grid item></Grid>
      </Grid>
     
      <Grid container style={{marginBottom:"10px"}}>
      <Typography variant="h1" sx={{ fontSize: "22px", fontWeight:600, mb:2 }}>
        Contact Details
      </Typography>
        <Grid xs={12}  item>
          <DynamicDetails config={formConfig.contactDetails} />
          {/* educationalDetails */}
        </Grid>
        
       
      </Grid>
      <Grid >
        <Button
        type="submit"
        variant="contained"
        color="primary"
        style={{ marginTop: "16px" }}
      >
        Submit
      </Button>
        </Grid>
    </Box>
  );
};

export default OtrViewPage;

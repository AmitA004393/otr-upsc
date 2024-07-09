import { Card } from "@mui/material";
import React from "react";
import styled from "styled-components";
// import { isEqual, filter, toLower } from 'lodash'
// import map from 'lodash/map'
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { IconFormIncomplete } from "./IconFormIncomplete";

const Header = styled("h2")`
  color: #13296c;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-bottom: 16;
`;

const Info = styled("span")`
  color: #000;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
  padding-bottom: 20px;
  padding-top: 16px;
`;

const P = styled("p")`
  margin-top: 6.5px;
  margin-bottom: 6.5px;
`;

export const ApplicationStep = ({ title, sections, activeStep }: any) => {
  const activeSections = sections?.[activeStep]?.columns.map(
    ({ title }: any) => title
  );

  return (
    <Card sx={{ padding: 3 }}>
      <Header>Steps for Applicants </Header>
      <hr />
      <Info>Applicant can submit his/her following details:</Info>
      {/* {activeSections?.map((item:any) => ( */}
      <P>
        <IconFormIncomplete /> Candidate's Name (As per Class 10th)
      </P>
      <P>
        <IconFormIncomplete /> Verify Candidate's Name (As per Class 10th)
      </P>
      <P>
        <IconFormIncomplete /> Gender
      </P>
      <P>
        <IconFormIncomplete /> Verify Gender
      </P>
      <P>
        <IconFormIncomplete /> Date of Birth
      </P>
      <P>
        <IconFormIncomplete /> Verify Date of Birth
      </P>
      <P>
        <IconFormIncomplete />
        Father’s Name
      </P>
      <P>
        <IconFormIncomplete /> Verify Father’s Name
      </P>
      <P>
        <IconFormIncomplete /> Mother’s Name
      </P>
      <P>
        <IconFormIncomplete /> Verify Mother’s Name
      </P>
      <P>
        <IconFormIncomplete /> Minority Status
      </P>
      <P>
        <IconFormIncomplete /> Minority option
      </P>
      {/* ))} */}
    </Card>
  );
};

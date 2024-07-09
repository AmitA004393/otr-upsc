"use client";
import { memo, useEffect, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  styled,
} from "@mui/material";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MuiCard from "./MuiCard";
import {
  IdCard,
  Key,
  Laptop,
  Upload,
  UserVerify,
  Document,
} from "@/component/Icon/Icon";

// import StyledButton from "./Button";
import AadharConsent from "@/component/common/aadhar_concent";
import { Container } from "reactstrap";
import { OtrStepperCard } from "@/component/Stepper/Stepper";

const windowpath = window.location.hostname;
const port = location.port;

const OtrJson = [
  {
    id: 1,
    heading: "How to apply for an online application?",
    data: [
      {
        id: 1,
        name: `The candidate has to register himself/ herself on the OTR (One Time Registration) portal by clicking the <a href="http://${windowpath}:${port}/candidate/otr"><u>One Time Registration (OTR)</u></a> link.`,
        icon: Document,
      },
      {
        id: 2,
        name: "After registration, he or she has to login (by email / Phone / OTR-ID) with a password to verify the already registered OTR application.",
        icon: Key,
      },
      {
        id: 3,
        name: `Go to the <a href="http://${windowpath}:${port}/examination"><u>Latest Notification</u></a> tab in the OTR application.`,
        icon: Notification,
      },
      {
        id: 4,
        name: "Apply for a desirable examination.",
        icon: IdCard,
      },
      {
        id: 5,
        name: `The candidate can check the active examination notification (in English and Hindi) at the following URL: <a href="https://www.upsc.gov.in"><u>https://www.upsc.gov.in</u></a>`,
        icon: IdCard,
      },
    ],
  },
  {
    id: 2,
    heading: "One Time Registration Benefits:",
    data: [
      {
        id: 1,
        name: "The applicant needs to fill out personal details only once.",
        icon: IdCard,
      },
      {
        id: 2,
        name: "The applicant needs to upload document, if required.",
        icon: Upload,
      },
      {
        id: 3,
        name: "OTR information is digitally available anytime, anywhere.",
        icon: Laptop,
      },
      {
        id: 4,
        name: "OTR Information gets automatically populated while applying under any commission's notification.",
        icon: UserVerify,
      },
    ],
  },
  {
    id: 3,
    heading: "Aadhaar Benefits:",
    data: [
      {
        id: 1,
        name: "Note: Providing your Aadhaar information will grant you priority access at the examination center.",
        icon: Document,
      },
      {
        id: 2,
        name: "You will be given extra privileges at the examination venues and UPSC premises.",
        icon: Upload,
      },
      {
        id: 3,
        name: "You will have ease in the exam application process.",
        icon: Laptop,
      },
    ],
  },
];

const OtrInstruction = memo(() => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const [openAadharConsent, setOpenAadharConsent] = useState(false);

  const handleButtonClick = () => {
    setOpenAadharConsent(true);
  };

  const handleClose = () => {
    setOpenAadharConsent(false);
  };
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  useEffect(() => {
    setExpanded(`panel1`);
  }, []);

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
      <OtrInst>
        <MuiCard
          title="Instructions"
          data={
            <>
              {OtrJson.map(({ id, heading, data }, index) => (
                <Accordion
                  key={index}
                  expanded={expanded === `panel${id}`}
                  onChange={handleChange(`panel${id}`)}
                  sx={{
                    boxShadow: "none",
                    borderBottom: "1px solid rgba(32, 39, 140, 0.125)",
                    margin: "0!important",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${id}bh-content`}
                    id={`panel${id}bh-header`}
                    sx={{
                      pl: 0,
                      pr: 0,
                    }}
                  >
                    <Typography component="h2">{heading}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List
                      sx={{
                        width: "100%",
                        bgcolor: "background.paper",
                        pb: "20px",
                      }}
                    >
                      {data.map(({ name, icon: Icon }, index) => (
                        <ListItem
                          key={index}
                          sx={{
                            p: 0,
                            pt: "3px",
                            pb: "3px",
                            "& .MuiTypography-root": {
                              fontSize: "var(--fontsize)",
                            },
                          }}
                        >
                          <ListItemIconBox>{/* <Icon /> */}</ListItemIconBox>
                          <ListItemText
                            primary={
                              <div dangerouslySetInnerHTML={{ __html: name }} />
                            }
                          />
                        </ListItem>
                      ))}
                    </List>
                  </AccordionDetails>
                </Accordion>
              ))}
            </>
          }
        />
        <Button color="primary" variant="contained" onClick={handleButtonClick}>
          CONTINUE
        </Button>
      </OtrInst>

      <Dialog
        open={openAadharConsent}
        onClose={handleClose}
        aria-labelledby="aadhar-consent-dialog-title"
        maxWidth="sm"
        fullWidth
        sx={{
          textAlign: "center",
        }}
      >
        <AadharConsent onClose={handleClose} />
      </Dialog>
    </Container>
  );
});

const OtrInst = styled(Box)`
  .MuiCardHeader-root {
    background: var(--bgwhite);
    color: var(--textblue);
  }
  .MuiCollapse-wrapperInner.MuiCollapse-vertical {
    border-bottom: 1px solid rgba(32, 39, 140, 0.125);
  }
  .MuiButtonBase-root.Mui-expanded {
    border-bottom: 1px solid rgba(32, 39, 140, 0.125);
    .MuiAccordionSummary-content.Mui-expanded {
      margin: 0;
    }
  }
  .MuiPaper-root-MuiAccordion-root:before {
    display: none;
  }
  .MuiButtonBase-root.MuiAccordionSummary-root.Mui-expanded {
    min-height: 48px !important;
  }
`;
// const Typography = styled(Typography).attrs({ component: 'h2' })`
//   color: var(--textblue);
//   font-weight: 700;
//   font-size: 0.9rem;
//   padding-bottom: 0px;
// `
const ListItemIconBox = styled(ListItemIcon)`
  min-width: 40px;
  position: relative;
  padding-left: 7px;
  z-index: 1;
  &:before {
    position: absolute;
    content: "";
    width: 30px;
    height: 30px;
    top: -6px;
    left: 0px;
    background: #e3ebfd;
    border-radius: 50%;
    z-index: -1;
  }
`;

export default OtrInstruction;

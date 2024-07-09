import { Stepper, Step, StepButton, StepLabel, Card } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

import BadgeIcon from '@mui/icons-material/Badge'
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle'
import ContactMailIcon from '@mui/icons-material/ContactMail'
import SecurityIcon from '@mui/icons-material/Security'

import StepConnector, {
  stepConnectorClasses,
} from '@mui/material/StepConnector'
import { StepIconProps } from '@mui/material/StepIcon'
import MuiCard from './MuiCard'

const ColorlibStepIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean }
}>(({ theme, ownerState }) => ({
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,

  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#7F91C8',
  ...(ownerState.active && {
    backgroundColor: '#2947A3',
  }),
}))

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props

  const icons: { [index: string]: React.ReactElement } = {
    1: <BadgeIcon />,
    2: <BadgeIcon />,
    3: <SupervisedUserCircleIcon />,
    4: <ContactMailIcon />,
    5: <SecurityIcon />,
    6: <SecurityIcon />,
    7: <SecurityIcon />,
  }

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className + ' iconsbox'}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  )
}

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
    marginLeft: '5%',
    marginRight: '5%',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: '#2947A3',
      position: 'relative',
      '&::after': {
        position: 'absolute',
        content: '""',
        right: '-2px',
        top: '-8px',
        width: '0',
        height: '0',
        borderTop: '10px solid transparent',
        borderLeft: '10px solid #2947A3',
        borderBottom: '10px solid transparent',
      },
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: '#d51010',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
}))

export const OtrStepperCard = ({
  // sections,
  activeStep,
  completed,
  handleStep,
  noConsentClass,
}: any) => {
  const sections = [
    { title: 'Aadhaar Verify ' },
    { title: 'Personal Details ' },
    { title: 'Education Information ' },
    { title: 'Contact Details ' },
    { title: 'Preview ' },
  ]
  return (
    <MuiCard
      title="One Time Registration (OTR)"
      rightText={<div />}
      data={
        <Stepper
          nonLinear
          activeStep={activeStep}
          alternativeLabel
          connector={<ColorlibConnector />}
          className="mt-3"
        >
          {sections?.map((iten, index) => {
            let stepClass = ''
            let stepLabel = iten
            if (noConsentClass === 0 && index === 0) {
              stepClass = 'adhaar'
            }
            // if (noConsentClass === 1 && index === 0) {
            //   stepLabel = 'Adhaar Verified'
            // }
            return (
              <Step
                className={`
                  ${stepClass}
                  ${index < activeStep ? ' stepactive ' : ''}
                  `}
                key={iten.title}
                // completed={completed[index]}
              >
                {/* <StepButton color="inherit" onClick={handleStep(index)}> */}
                <StepLabel StepIconComponent={ColorlibStepIcon}>
                  {stepLabel.title}
                </StepLabel>
                {/* </StepButton> */}
              </Step>
            )
          })}
        </Stepper>
      }
    />
  )
}

import { memo, useEffect, useState } from 'react'
import { Button, Card, CardHeader, Container, Grid } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import MuiCard from '../Stepper/MuiCard'
import { useRouter } from 'next/navigation'


const AadharConsent = memo(
  ({ setShowdbSection, setActiveStep, formSections, methods }: any) => {
    const [showGetData, setShowGetData] = useState(false)
    const [showOtr, setShowOtr] = useState(false)

  const router = useRouter()
  const handleClick = () => {
    router.push('/candidate/aadhar_verification');
  };

  const handleClick2 = () => {
    router.push('/candidate/personalInfo');
  };
    return (
      <div>
     
          <div className="d-flex justify-content-">
            <Grid lg={6} md={5} sm={8}>
              <MuiCard
                title="Aadhaar consent"
                data={
                  <>
                    <FormControl className="text-center">
                      <FormLabel
                        sx={{
                          Gridor: 'var(--textblack)',
                          paddingLeft: '70px',
                          paddingRight: '70px',
                          marginTop: '10px',
                        }}
                      >
                        Do you consent to provide your Aadhaar Information for
                        Verification Purposes? 
                      </FormLabel>
                      <div className="d-flex mt-5 mb-5 pt-3 align-items-center justify-content-center">
                        <Button
                          variant="contained"
                          onClick={handleClick}
                        >
                          Yes
                        </Button>
                        <Button
                          variant="outlined"
                          onClick={handleClick2}
                          sx={{
                            marginLeft: '10px',
                          }}
                        >
                          No
                        </Button>
                      </div>
                    </FormControl>
                  </>
                }
              />
            </Grid>
          </div>
       
      </div>
    )
  },
)

export default AadharConsent

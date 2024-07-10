import { memo } from 'react'
// import ApplicationTab from './components/applicationTab'
// import Profile from './dashboard/Profile'
// import CardBox from './dashboard/cardbox'
import { Box, Grid } from '@mui/material'
import Profile from '../profile/page'
import VerticalNotificationStepper from '../notification/page'
// import Notification from './dashboard/Notification'

// eslint-disable-next-line react/display-name
const Candidate_main = memo(() => {
  return (
    <>
      <Box
        sx={{
          p: 2,
          width: '100%',
        }}
      >
        <Grid container spacing={2} className="mb-3">
          <Grid item xs={12} md={8}>
            {/* <Profile /> */}
            <Profile/>
          </Grid>
          <Grid item xs={12} md={4}>
            {/* <Notification /> */} notification
            <VerticalNotificationStepper/>
          </Grid>
        </Grid>
        {/* <ApplicationTab /> */} application tab
      </Box>
    </>
  )
})
export default Candidate_main

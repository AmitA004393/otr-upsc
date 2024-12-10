// import { Box, Grid } from '@mui/material'
// import { memo } from 'react'
// import AdmitcardLogo from '../../candidate/Images/AdmitCardLogo'
// import ResultLogo from '../../candidate/Images/ResultLogo'
// import NoticeLogo from '../../candidate/Images/NoticeLogo'
// import DafLogo from '../../candidate/Images/Daflogo'
// import Activitylogo from '../../candidate/Images/ActivityLogo'
// import ESummonLogo from '../../candidate/Images/E-summonLogo'
// import Card from '../Card'
// // import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// // import Card from 'app/components/Card'

// // eslint-disable-next-line react/display-name
// const CardBox = memo(() => {
//   const cardData: any = [
//     {
//       icon: <NoticeLogo />,
//       label: 'NOTICES',
//       text: 'Notices',
//       link: '/dashboards/exam_notices',
//       color: 'var(--borderblue)',
//       iconBg: '#E5E5E5',
//     },
//     {
//       icon: <AdmitcardLogo />,
//       label: 'e-Admit Card',
//       text: 'Download Admit Card',
//       link: 'https://example1.com',
//       color: 'var(--borderblue)',
//       iconBg: '#d1eeea',
//     },
//     {
//       icon: <ResultLogo />,
//       label: 'Results',
//       text: 'Check Your Result',
//       link: 'https://example2.com',
//       color: 'var(--borderblue)',
//       iconBg: '#FADDE3',
//     },
//     {
//       icon: <DafLogo />,
//       label: 'DAF',
//       text: 'Detailed Application Form',
//       link: `/dashboards/candidate_daf_tab`,
//       color: 'var(--borderblue)',
//       iconBg: '#C9CCFF',
//     },
//     {
//       icon: <ESummonLogo />,
//       label: 'e-SUMMON',
//       text: 'E-Summon Download',
//       link: 'https://example3.com',
//       color: 'var(--borderblue)',
//       iconBg: '#D3EEFF',
//     },
//     {
//       icon: <Activitylogo />,
//       label: 'ACTIVITIES',
//       text: 'Activity',
//       link: 'https://example6.com',
//       color: 'var(--borderblue)',
//       iconBg: '#C8ECD9',
//     },
//   ]

//   return (
//     <Box>
//       <Grid container rowSpacing={2} columnSpacing={2}>
//         {cardData.map((card:any, index: any) => (
//           // eslint-disable-next-line react/jsx-key
//           <Grid item xs={12} sm={6} md={4}>
//             <Card data={card} />
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   )
// })
// export default CardBox
import { Box, Grid } from '@mui/material';
import { memo } from 'react';
import AdmitcardLogo from '../../candidate/Images/AdmitCardLogo';
import ResultLogo from '../../candidate/Images/ResultLogo';
import NoticeLogo from '../../candidate/Images/NoticeLogo';
import DafLogo from '../../candidate/Images/Daflogo';
import Activitylogo from '../../candidate/Images/ActivityLogo';
import ESummonLogo from '../../candidate/Images/E-summonLogo';
import Card from '../Card';

// Define cardData array
const cardData: any[] = [
  {
    icon: <NoticeLogo />,
    label: 'NOTICES',
    text: 'Notices',
    link: '/dashboards/exam_notices',
    color: 'var(--borderblue)',
    iconBg: '#E5E5E5',
  },
  {
    icon: <AdmitcardLogo />,
    label: 'e-Admit Card',
    text: 'Download Admit Card',
    link: 'https://example1.com',
    color: 'var(--borderblue)',
    iconBg: '#d1eeea',
  },
  {
    icon: <ResultLogo />,
    label: 'Results',
    text: 'Check Your Result',
    link: 'https://example2.com',
    color: 'var(--borderblue)',
    iconBg: '#FADDE3',
  },
  {
    icon: <DafLogo />,
    label: 'DAF',
    text: 'Detailed Application Form',
    link: '/dashboards/candidate_daf_tab',
    color: 'var(--borderblue)',
    iconBg: '#C9CCFF',
  },
  {
    icon: <ESummonLogo />,
    label: 'e-SUMMON',
    text: 'E-Summon Download',
    link: 'https://example3.com',
    color: 'var(--borderblue)',
    iconBg: '#D3EEFF',
  },
  {
    icon: <Activitylogo />,
    label: 'ACTIVITIES',
    text: 'Activity',
    link: 'https://example6.com',
    color: 'var(--borderblue)',
    iconBg: '#C8ECD9',
  },
];

// CardBox component definition
// eslint-disable-next-line react/display-name
const CardBox = memo(() => {
    return (
      <Box>
        <Grid container rowSpacing={2} columnSpacing={2}>
          {cardData.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card data={card} />
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  });
  
  export default CardBox;



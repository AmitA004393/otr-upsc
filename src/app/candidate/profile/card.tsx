// /* eslint-disable react/display-name */
// import {Grid } from "@mui/material";
// import { memo } from "react";


// import ResultLogo from "../Images/ResultLogo";
// import Activitylogo from "../Images/ActivityLogo";
// import AdmitcardLogo from "../Images/AdmitCardLogo";
// import ESummonLogo from "../Images/E-summonLogo";
// import NoticeLogo from "../Images/NoticeLogo";
// import DafLogo from "../Images/Daflogo";

// const Cardintro = memo(() => {
//   return (
//     <>
//       <Grid
//         container
//         spacing={3}
//         style={{ marginBottom: "10px", paddingLeft: "5px" }}
//       >
//         <Grid item>
//           <Grid
//             style={{
//               padding: "10px",
//               width: "200px",
//               borderRadius: "6px",
//               height: "146px",
//               border: "1px solid var(--Box-Border, #CDD4E0)",
//               background: "#FFF",
//             }}
//           >
//             <Grid
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               <AdmitcardLogo />
//             </Grid>

//             <div
//               style={{
//                 color: "#2947A3",
//                 fontFamily: "Roboto",
//                 fontSize: "26px",
//                 fontWeight: "700",
//                 lineHeight: "normal",
//                 letterSpacing: "1",
//                 textTransform: "lowercase",
//                 justifyContent: "center",
//                 display: "flex",
//               }}
//             >
//               {" "}
//               e-Admit Card
//             </div>
//             <div
//               style={{
//                 color: "#000000",
//                 fontFamily: "Roboto",
//                 fontSize: "14px",
//                 fontWeight: "400",
//                 lineHeight: "normal",
//                 letterSpacing: "1",
//                 textTransform: "lowercase",
//                 justifyContent: "center",
//                 display: "flex",
//               }}
//             >
//               {" "}
//               Download Admit Card
//             </div>
//           </Grid>
//         </Grid>

//         <Grid item>
//           <Grid
//             style={{
//               padding: "10px",
//               width: "200px",
//               borderRadius: "6px",
//               height: "146px",
//               border: "1px solid var(--Box-Border, #CDD4E0)",
//               background: "#FFF",
//             }}
//           >
//             <Grid
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               <ResultLogo />
//             </Grid>

//             <div
//               style={{
//                 color: "#2947A3",
//                 fontFamily: "Roboto",
//                 fontSize: "26px",
//                 fontWeight: "700",
//                 lineHeight: "normal",
//                 letterSpacing: "1",
//                 textTransform: "lowercase",
//                 justifyContent: "center",
//                 display: "flex",
//               }}
//             >
//               {" "}
//               Results
//             </div>
//             <div
//               style={{
//                 color: "#000000",
//                 fontFamily: "Roboto",
//                 fontSize: "14px",
//                 fontWeight: "400",
//                 lineHeight: "normal",
//                 letterSpacing: "1",
//                 textTransform: "lowercase",
//                 justifyContent: "center",
//                 display: "flex",
//               }}
//             >
//               {" "}
//               Check Your Result
//             </div>
//           </Grid>
//         </Grid>

//         <Grid item>
//           <Grid
//             style={{
//               padding: "10px",
//               width: "200px",
//               borderRadius: "6px",
//               height: "146px",
//               border: "1px solid var(--Box-Border, #CDD4E0)",
//               background: "#FFF",
//             }}
//           >
//             <Grid
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               <ESummonLogo />
//             </Grid>

//             <div
//               style={{
//                 color: "#2947A3",
//                 fontFamily: "Roboto",
//                 fontSize: "26px",
//                 fontWeight: "700",
//                 lineHeight: "normal",
//                 letterSpacing: "1",
//                 textTransform: "lowercase",
//                 justifyContent: "center",
//                 display: "flex",
//               }}
//             >
//               {" "}
//               e-SUMMON
//             </div>
//             <div
//               style={{
//                 color: "#000000",
//                 fontFamily: "Roboto",
//                 fontSize: "14px",
//                 fontWeight: "400",
//                 lineHeight: "normal",
//                 letterSpacing: "1",
//                 textTransform: "lowercase",
//                 justifyContent: "center",
//                 display: "flex",
//               }}
//             >
//               {" "}
//               E-Summon Download
//             </div>
//           </Grid>
//         </Grid>
//       </Grid>

//       <Grid
//         container
//         spacing={3}
//         style={{ marginBottom: "10px", paddingLeft: "5px" }}
//       >
//         <Grid item>
//           <Grid
//             style={{
//               padding: "10px",
//               width: "200px",
//               borderRadius: "6px",
//               height: "146px",
//               border: "1px solid var(--Box-Border, #CDD4E0)",
//               background: "#FFF",
//             }}
//           >
//             <Grid
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               <DafLogo />
//             </Grid>

//             <div
//               style={{
//                 color: "#2947A3",
//                 fontFamily: "Roboto",
//                 fontSize: "26px",
//                 fontWeight: "700",
//                 lineHeight: "normal",
//                 letterSpacing: "1",
//                 textTransform: "lowercase",
//                 justifyContent: "center",
//                 display: "flex",
//               }}
//             >
//               {" "}
//               DAF
//             </div>
//             <div
//               style={{
//                 color: "#000000",
//                 fontFamily: "Roboto",
//                 fontSize: "14px",
//                 fontWeight: "400",
//                 lineHeight: "normal",
//                 letterSpacing: "1",
//                 textTransform: "lowercase",
//                 justifyContent: "center",
//                 display: "flex",
//               }}
//             >
//               {" "}
//               Detailed Application Form
//             </div>
//           </Grid>
//         </Grid>

//         <Grid item>
//           <Grid
//             style={{
//               padding: "10px",
//               width: "200px",
//               borderRadius: "6px",
//               height: "146px",
//               border: "1px solid var(--Box-Border, #CDD4E0)",
//               background: "#FFF",
//             }}
//           >
//             <Grid
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               <NoticeLogo />
//             </Grid>

//             <div
//               style={{
//                 color: "#2947A3",
//                 fontFamily: "Roboto",
//                 fontSize: "26px",
//                 fontWeight: "700",
//                 lineHeight: "normal",
//                 letterSpacing: "1",
//                 textTransform: "lowercase",
//                 justifyContent: "center",
//                 display: "flex",
//               }}
//             >
//               {" "}
//               Notices
//             </div>
//             <div
//               style={{
//                 color: "#000000",
//                 fontFamily: "Roboto",
//                 fontSize: "14px",
//                 fontWeight: "400",
//                 lineHeight: "normal",
//                 letterSpacing: "1",
//                 textTransform: "lowercase",
//                 justifyContent: "center",
//                 display: "flex",
//               }}
//             >
//               {" "}
//               Notices
//             </div>
//           </Grid>
//         </Grid>

//         <Grid item>
//           <Grid
//             style={{
//               padding: "10px",
//               width: "200px",
//               borderRadius: "6px",
//               height: "146px",
//               border: "1px solid var(--Box-Border, #CDD4E0)",
//               background: "#FFF",
//             }}
//           >
//             <Grid
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               <Activitylogo />
//             </Grid>

//             <div
//               style={{
//                 color: "#2947A3",
//                 fontFamily: "Roboto",
//                 fontSize: "26px",
//                 fontWeight: "700",
//                 lineHeight: "normal",
//                 letterSpacing: "1",
//                 textTransform: "lowercase",
//                 justifyContent: "center",
//                 display: "flex",
//               }}
//             >
//               {" "}
//               activity
//             </div>
//             <div
//               style={{
//                 color: "#000000",
//                 fontFamily: "Roboto",
//                 fontSize: "14px",
//                 fontWeight: "400",
//                 lineHeight: "normal",
//                 letterSpacing: "1",
//                 textTransform: "lowercase",
//                 justifyContent: "center",
//                 display: "flex",
//               }}
//             >
//               {" "}
//               activity
//             </div>
//           </Grid>
//         </Grid>
//       </Grid>
//     </>
//   );
// });
// export default Cardintro;
import { Grid } from "@mui/material";
import { memo } from "react";
import ResultLogo from "../Images/ResultLogo";
import Activitylogo from "../Images/ActivityLogo";
import AdmitcardLogo from "../Images/AdmitCardLogo";
import ESummonLogo from "../Images/E-summonLogo";
import NoticeLogo from "../Images/NoticeLogo";
import DafLogo from "../Images/Daflogo";

const cardsData = [
  { logo: <AdmitcardLogo />, title: "e-Admit Card", description: "Download Admit Card" },
  { logo: <ResultLogo />, title: "Results", description: "Check Your Result" },
  { logo: <ESummonLogo />, title: "e-SUMMON", description: "E-Summon Download" },
  { logo: <DafLogo />, title: "DAF", description: "Detailed Application Form" },
  { logo: <NoticeLogo />, title: "Notices", description: "Notices" },
  { logo: <Activitylogo />, title: "Activity", description: "Activity" },
];

const Card = ({ logo, title, description }) => (
  <Grid item>
    <Grid
      style={{
        padding: "10px",
        width: "200px",
        borderRadius: "6px",
        height: "146px",
        border: "1px solid var(--Box-Border, #CDD4E0)",
        background: "#FFF",
      }}
    >
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {logo}
      </Grid>
      <div
        style={{
          color: "#2947A3",
          fontFamily: "Roboto",
          fontSize: "26px",
          fontWeight: "700",
          lineHeight: "normal",
          letterSpacing: "1",
          textTransform: "lowercase",
          justifyContent: "center",
          display: "flex",
        }}
      >
        {title}
      </div>
      <div
        style={{
          color: "#000000",
          fontFamily: "Roboto",
          fontSize: "14px",
          fontWeight: "400",
          lineHeight: "normal",
          letterSpacing: "1",
          textTransform: "lowercase",
          justifyContent: "center",
          display: "flex",
        }}
      >
        {description}
      </div>
    </Grid>
  </Grid>
);

// eslint-disable-next-line react/display-name
const Cardintro = memo(() => {
  return (
    <>
      <Grid container spacing={3} style={{ marginBottom: "10px", paddingLeft: "5px" }}>
        {cardsData.map((data, index) => (
          <Card key={index} logo={data.logo} title={data.title} description={data.description} />
        ))}
      </Grid>
    </>
  );
});

export default Cardintro;

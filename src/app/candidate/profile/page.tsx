/* eslint-disable react/display-name */
import { Box, Card, Grid, Avatar, Typography } from "@mui/material";
import { memo, useEffect, useState } from "react";
// import { getItem } from 'utils/storage'
// import { isEmpty, get } from 'lodash'
// import { ProfileStyle } from '../style/profile.style'
// import { requestPayload } from 'utils/requestPayload'
import upsc from "../../assets/images/blank-profile-picture.jpeg";
// import { Link } from 'react-router-dom'
// import { TextBlur } from 'app/components/TextBlur'
import styled from "styled-components";
// import ProfileImg from '../components/ImgCenterCrop/ProfileImg'
// import { useAxios } from 'utils/useAxios'
// import { CandidateScore } from './CandidateScore'
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { Table } from "reactstrap";
import { ProfileStyle } from "./profile.style";
import ProfileImg from "./ProfileImg";
import { TextBlur } from "./TextBlur";
import { CardBox } from "./Style";
import Cardintro from "./card";
const ESummonLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="29" viewBox="0 0 36 29" fill="none">
<g clip-path="url(#clip0_1417_12090)">
<path d="M0 8.01987C0.0754653 7.71332 0.233381 7.43282 0.457151 7.20829C0.680921 6.98376 0.962 6.82364 1.27044 6.74498C1.43289 6.72824 1.59675 6.72824 1.7592 6.74498H34.2244C34.4618 6.72288 34.7009 6.75266 34.9254 6.8322C35.1498 6.91174 35.354 7.0391 35.5233 7.20531C35.6926 7.37152 35.8232 7.57252 35.9055 7.79413C35.9879 8.01574 36.0201 8.25258 36 8.48788V27.2564C36.0261 27.4972 35.9971 27.7408 35.9152 27.9691C35.8334 28.1973 35.7006 28.4044 35.5269 28.5749C35.3532 28.7454 35.143 28.875 34.9119 28.954C34.6807 29.0331 34.4347 29.0596 34.1918 29.0315H2.06881C1.61957 29.0882 1.16453 28.9845 0.785448 28.739C0.406364 28.4936 0.127978 28.1225 0 27.6921V8.01987ZM17.9186 27.8696H33.9801C34.6642 27.8696 34.8272 27.7082 34.8272 27.0304V8.64925C34.8272 7.97145 34.6642 7.81009 33.9801 7.81009H1.97098C1.28681 7.81009 1.12389 7.97145 1.12389 8.64925V27.0304C1.12389 27.7082 1.28681 27.8696 1.97098 27.8696H17.9186Z" fill="#475EAB"/>
<path d="M16.0292 5.56691H14.9214V2.33931C14.9142 2.28575 14.9142 2.23148 14.9214 2.17792C15.0549 1.55993 15.3973 1.00557 15.892 0.606495C16.3866 0.20742 17.0039 -0.0124761 17.6418 -0.0168531C18.0372 -0.0568823 18.4356 -0.0568823 18.8309 -0.0168531C19.4562 0.106476 20.0189 0.440978 20.4229 0.929546C20.8269 1.41811 21.0473 2.03046 21.0463 2.66206C21.0463 3.56579 21.0463 4.46951 21.0463 5.37324C21.0463 5.37324 21.0463 5.37324 21.0463 5.45393H19.9876C19.9876 5.3571 19.9876 5.26029 19.9876 5.16346V2.87184C20.0127 2.62338 19.982 2.37252 19.8978 2.13719C19.8135 1.90185 19.6777 1.68787 19.5003 1.51054C19.3228 1.33321 19.1081 1.19692 18.8713 1.11142C18.6345 1.02593 18.3816 0.993341 18.1306 1.01598C17.8235 1.00733 17.5166 1.0399 17.2183 1.1128C16.869 1.21343 16.5637 1.42701 16.3511 1.71948C16.1386 2.01195 16.031 2.36649 16.0455 2.7266C16.0129 3.72716 16.0292 4.6309 16.0292 5.56691Z" fill="#475EAB"/>
<path d="M17.9838 3.06667C18.0656 3.05282 18.1495 3.05682 18.2296 3.07841C18.3097 3.10001 18.3841 3.13869 18.4475 3.19171C18.511 3.24473 18.5619 3.31082 18.5969 3.38539C18.6318 3.45995 18.65 3.54121 18.65 3.62343C18.65 3.70566 18.6318 3.78689 18.5969 3.86145C18.5619 3.93602 18.511 4.00213 18.4475 4.05515C18.3841 4.10817 18.3097 4.14683 18.2296 4.16842C18.1495 4.19002 18.0656 4.19404 17.9838 4.18019C17.8512 4.15774 17.731 4.08952 17.6442 3.98763C17.5574 3.88574 17.5098 3.75674 17.5098 3.62343C17.5098 3.49012 17.5574 3.3611 17.6442 3.25921C17.731 3.15732 17.8512 3.08912 17.9838 3.06667Z" fill="#475EAB"/>
<path d="M12.9341 15.6378V19.4464C12.946 19.6027 12.9239 19.7598 12.8695 19.907C12.815 20.0542 12.7294 20.1881 12.6183 20.2998C12.5072 20.4114 12.373 20.4981 12.2252 20.5541C12.0774 20.6101 11.9192 20.6341 11.7613 20.6244H3.99111C3.83474 20.636 3.67777 20.6146 3.53038 20.5616C3.38299 20.5085 3.24848 20.4251 3.13607 20.3168C3.02366 20.2085 2.93577 20.0778 2.87816 19.9333C2.82055 19.7888 2.79465 19.6338 2.802 19.4786V11.7485C2.79521 11.5976 2.8199 11.447 2.87458 11.306C2.92927 11.165 3.01272 11.0367 3.11976 10.9292C3.2268 10.8216 3.35505 10.7371 3.49658 10.6809C3.6381 10.6248 3.78981 10.5981 3.9422 10.6027H11.7939C11.9469 10.5957 12.0996 10.6206 12.2423 10.6759C12.385 10.7312 12.5143 10.8156 12.6219 10.9237C12.7295 11.0318 12.8129 11.1611 12.8667 11.3032C12.9205 11.4453 12.9434 11.597 12.9341 11.7485V15.6378ZM11.7939 19.5109V11.7324H3.9585V19.5109H11.7939Z" fill="#475EAB"/>
<path d="M18.0166 23.9648H32.6772C32.7471 23.9669 32.8159 23.9828 32.8795 24.0117C32.943 24.0406 33.0002 24.0819 33.0473 24.1331C33.0944 24.1843 33.1305 24.2444 33.1537 24.3097C33.1769 24.3751 33.1867 24.4444 33.1823 24.5135C33.187 24.6495 33.139 24.7822 33.0481 24.8842C32.9572 24.9862 32.8303 25.0499 32.6935 25.0622H3.25834C3.12444 25.0385 3.00451 24.9653 2.92289 24.8575C2.84127 24.7497 2.804 24.6152 2.81849 24.4812C2.81749 24.3548 2.86328 24.2323 2.94735 24.1371C3.03142 24.042 3.14798 23.9807 3.27465 23.9648H17.9353H18.0166Z" fill="#475EAB"/>
<path d="M23.962 10.5859H32.7258C32.8727 10.5859 33.0135 10.6438 33.1173 10.7467C33.2212 10.8496 33.2796 10.9891 33.2796 11.1346C33.2796 11.2802 33.2212 11.4197 33.1173 11.5226C33.0135 11.6255 32.8727 11.6833 32.7258 11.6833H15.1167C14.9815 11.6597 14.8601 11.5872 14.7758 11.4799C14.6916 11.3725 14.6505 11.238 14.6607 11.1024C14.6601 10.9734 14.7083 10.8489 14.7957 10.7533C14.8831 10.6577 15.0034 10.598 15.133 10.5859H23.962Z" fill="#475EAB"/>
<path d="M23.9623 12.8301H32.7261C32.7967 12.8342 32.8659 12.8521 32.9295 12.8827C32.9932 12.9133 33.05 12.9561 33.0969 13.0086C33.1439 13.0611 33.1799 13.1222 33.2029 13.1885C33.2259 13.2548 33.2354 13.3249 33.231 13.3949C33.2315 13.5281 33.1817 13.6567 33.0912 13.7553C33.0007 13.8539 32.8763 13.9153 32.7424 13.9275H15.1333C14.9981 13.9038 14.8767 13.8313 14.7924 13.724C14.7082 13.6166 14.6671 13.4821 14.6773 13.3465C14.6767 13.2175 14.7249 13.093 14.8123 12.9974C14.8997 12.9019 15.02 12.8422 15.1496 12.8301H23.9623Z" fill="#475EAB"/>
<path d="M23.9617 16.1704H15.2794C15.1976 16.1843 15.1137 16.1802 15.0336 16.1587C14.9536 16.1371 14.8791 16.0984 14.8157 16.0454C14.7523 15.9924 14.7014 15.9262 14.6664 15.8517C14.6314 15.7771 14.6133 15.6959 14.6133 15.6137C14.6133 15.5314 14.6314 15.4502 14.6664 15.3756C14.7014 15.3011 14.7523 15.235 14.8157 15.1819C14.8791 15.1289 14.9536 15.0903 15.0336 15.0687C15.1137 15.0471 15.1976 15.043 15.2794 15.0569H32.7907C32.9275 15.0692 33.0544 15.1329 33.1453 15.2349C33.2362 15.337 33.284 15.4696 33.2793 15.6056C33.2808 15.7381 33.2337 15.8667 33.1469 15.9676C33.06 16.0685 32.9394 16.1348 32.807 16.1543H23.9617V16.1704Z" fill="#475EAB"/>
<path d="M23.9625 18.3964H15.1497C15.0159 18.3764 14.8946 18.3072 14.8101 18.2025C14.7255 18.0977 14.6841 17.9653 14.6938 17.8316C14.6928 17.7008 14.7403 17.5743 14.8274 17.4761C14.9145 17.3779 15.035 17.3148 15.166 17.299C15.269 17.291 15.3726 17.291 15.4756 17.299H32.7426C32.8132 17.3031 32.8823 17.321 32.946 17.3516C33.0096 17.3823 33.0665 17.425 33.1134 17.4775C33.1603 17.53 33.1964 17.5911 33.2194 17.6574C33.2424 17.7237 33.2519 17.7939 33.2474 17.8638C33.2484 17.9988 33.1992 18.1294 33.109 18.2307C33.0189 18.3319 32.8942 18.3966 32.7589 18.4125H23.9625V18.3964Z" fill="#475EAB"/>
<path d="M19.6777 20.6252H15.3283C14.8722 20.6252 14.6279 20.4316 14.6279 20.0765C14.6279 19.7215 14.8559 19.5117 15.312 19.5117H24.0597C24.5158 19.5117 24.7437 19.7215 24.7437 20.0765C24.7437 20.4316 24.4993 20.6252 24.0758 20.6252H19.6777Z" fill="#475EAB"/>
</g>
<defs>
<clipPath id="clip0_1417_12090">

    <rect width="60" height="60" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    
);
// import CardBox from '@/app/component/cardbox/page'
// import { CardBox } from "./Style";
// import CardBox from './cardbox'

const Profile = memo(() => {
  //   const userInfo = !isEmpty(getItem('token')) ? getItem('token') : {}

  //   const { mutate, res, isLoading } = useAxios({ url: '/api/service' })

  const [userPhoto, setUserPhoto] = useState("") as any;

  const arrayBufferToBase64 = (buffer: Iterable<number>) => {
    let binary = "";
    const bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));

    return `data:${userPhoto?.type?.ext};base64,${window.btoa(binary)}`;
  };

  //   useEffect(() => {
  //     const payload = {
  //       path: 'formio',
  //       section: 'candidate/candidate_score',
  //       action: 'get',
  //     }
  //     mutate({ ...payload } as any)
  //   }, [])

  return (
    <>
      <ProfileStyle>
        <div className="heading"> Candidate Profile</div>
        <Card
          className="p-4"
          sx={{
            background: "var(--bgwhite)",
          }}
        >
          <Grid container className="box" spacing={2}>
            <Grid item xs={12} sm={6} md={5}>
              <div className="profilebox">
                <div className="profileimgbox">
                  <Box>
                    {userPhoto?.file?.data ? (
                      <ProfileImg
                        imageSrc={arrayBufferToBase64(userPhoto?.file?.data)}
                      />
                    ) : (
                      <ProfileImg imageSrc={upsc} />
                    )}
                  </Box>
                </div>
                <div className="profileNameBox">
                  <p
                    className="profileName"
                    style={{
                      color: "var(--textblack)",
                    }}
                  >
                    <strong>
                      candidate score
                      {/* {get(
                        userInfo,
                        'user.candidate_name',
                        get(userInfo, 'user.name'),
                      )}
                      <CandidateScore data={res} loading={isLoading} /> */}
                    </strong>
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={7}>
              <div className="profilebox">
                <Table>
                  <tbody>
                    <tr>
                      <td
                        style={{
                          color: "var(--textblack)",
                        }}
                      >
                        One Time Registration :
                      </td>
                      <td
                        style={{
                          color: "var(--textblack)",
                        }}
                      >
                        <text className="">
                          <TextBlur text="registrationid" />
                        </text>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          color: "var(--textblack)",
                        }}
                      >
                        Mobile Number :
                      </td>
                      <td
                        style={{
                          color: "var(--textblack)",
                        }}
                      >
                        <strong>
                          <TextBlur text="mobile" />
                        </strong>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          color: "var(--textblack)",
                        }}
                      >
                        Email ID :
                      </td>
                      <td
                        style={{
                          color: "var(--textblack)",
                        }}
                      >
                        <strong>
                          <TextBlur text="email" />
                        </strong>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Grid>
          </Grid>

          {/* <Grid
            style={{
              padding: "10px",
              width: "268px",
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
                <ESummonLogo
               
                />
              </Grid>
           
              
             
             <div  style={{  color: "#2947A3",
                    fontFamily:"Roboto",
                    fontSize:"26px",
                    fontWeight:"700",
                    lineHeight:"normal",
                    letterSpacing:"1",
                    textTransform:"lowercase",
                    justifyContent:"center",
                    display:"flex"
                    }}>  e-SUMMON</div>
                      <div  style={{  color: "#000000",
                    fontFamily:"Roboto",
                    fontSize:"14px",
                    fontWeight:"400",
                    lineHeight:"normal",
                    letterSpacing:"1",
                    textTransform:"lowercase",
                    justifyContent:"center",
                    display:"flex"
                    }}>  E-Summon Download</div>
             
                
              
          
          </Grid> */}
       <Cardintro/>
      
      
        </Card>
      </ProfileStyle>
    </>
  );
});
export default Profile;

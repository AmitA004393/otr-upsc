"use client";

import { memo, useState, useEffect } from "react";
import { Col, Row, Container } from "reactstrap";
// import AppLogo from 'theme-library/Layout/AppLogo'
// import { FooterStyle } from "./FooterStyle";
import { Twitter, Facebook, YouTube, LinkedIn, Height } from "@mui/icons-material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Cipllogo from "app/assets/images/cipllogo.png";
// import { getItem, removeItem } from 'utils/storage'
// import { menusItems } from '../Routes/public_sidebar'
import Link from "next/link";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const footerMenu = {
  menu: [
    {
      icon: "fa fa-database",
      label: "One Time Registration",
      to: "/dashboards/main",
    },

    {
      icon: "fa fa-paste",
      label: "Instruction for OTR",
      to: "/dashboards/application",
    },
  ],
};
const FooterStyle = styled("div")`
  background-color: #2947a3;
  border-top: 1px solid var(--formBorderColor);
  padding: 20px 0;
  margin-top: 100px;
  position:relative;
  bottom:0;
  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .footerleft {
    padding: 10px 0;
    p {
      color: white;
      font-size: 0.8rem;
      font-family: Roboto;
    //   width: 450px;
    }
  }
  .social {
    h2 {
      color: white;
      font-size: 18px;
      font-weight: 700;
    }
    ul {
      display: flex;
      gap: 4px;

      li {
        background: rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        text-decoration: none;

        a {
          color: white;
          display: block;
          padding: 5px;
          text-decoration: none;
        }
      }
    }
  }
  .footer_link {
    h2 {
      color: white;
      font-size: 1rem;
      font-weight: 700;
    }
    li {
      a {
        color: white;
        font-size: 0.7rem;
        text-decoration: none;
      }
    }
  }
  .powered {
    p {
      color: white;
      font-size: 0.7rem;
    }
  }
  .visit {
    // margin-bottom: 10px;
    h2 {
      color: white;
      font-size: 0.9rem;
      font-weight: 700;
    }
    p {
      font-size: 0.7rem;
      color: white;
      margin-bottom: 0;
    }
    span {
      font-size: 0.7rem;
      color: white;
    }
  }
  @media (max-width: 768px) {
    .footerleft {
      p {
        font-size: 0.7rem;
      }
    }
    .footer_link {
      ul {
        gap: 8px;
      }
      li {
        flex: 0 0 100%; /* Full width on smaller screens */
      }
    }
    .visit {
      h2 {
        font-size: 0.8rem;
      }
      p {
        font-size: 0.6rem;
      }
    }
    .responsive-row {
      flex-direction:column;
    
      text-align: left;
      margin: 0 20px;
    }
  }
`;

const Footer = memo(() => {
  //   const FooterStyle = styled(Box)`
  //     width: 100%;
  //     position: fixed;
  //     z-index: 999;
  //   `;
  //   const [currentTime, setCurrentTime] = useState(new Date());

  //   useEffect(() => {
  //     const intervalId = setInterval(() => {
  //       setCurrentTime(new Date());
  //     }, 1000);

  //     return () => clearInterval(intervalId);
  //   }, []);

  //   const data = getItem('token') as any

  //   const menuItemLast = menusItems?.menu.slice(0, -1)
  //   menuItemLast.shift()

  //   const finalmenu = data === null ? menusItems.menu : menuItemLast

  return (
    <FooterStyle>
      <Container sx={{ width: "100%" }}>
        <Row
          className="responsive-row"
          style={{
            display: "flex",
            // alignItems: "center",
            justifyContent: "space-between",
            margin: "0 50px",
          }}
        >
          <Col>
            <div>
              {/* <AppLogo /> */}
              <div className="footerleft">
                <p>
                  Website Content Managed by © Content Owned by Union Public
                  Service Commission, New Delhi, India.
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="footer_link">
              <h2>Usefull Link</h2>
              <ul>
                {footerMenu?.menu.map(({ label, to, icon }: any) => (
                  <li>
                    <Link href="/">
                      {" "}
                      <i className={`${icon} me-2`}></i>
                      {label}
                    </Link>{" "}
                  </li>
                ))}

                {/* <li>
                  <Link href="/">One Time Registration</Link>
                </li>
                <li>
                  <Link href="/">Instruction for OTR</Link>
                </li>
                <li>
                  <Link href="/">FAQ's</Link>
                </li>
                <li>
                  <Link href="/">Latest Notification</Link>
                </li> */}
              </ul>
            </div>
          </Col>

          <Col>
            <div className="visit">
              <h2>Contact Us:</h2>
              <p>Dholpur House, Shahajahan Road, New Delhi - 110069</p>
            </div>
            <div className="visit">
              <div>
                <h2 className="">Your System IP Address:</h2>
                <h2 className="mt-3"> Current Time & Date: </h2>
                <p className="">
                  {/* {moment(currentTime).format("hh:mm:ss a (ddd, Do MMM YYYY)")} */}
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </FooterStyle>
  );
});

export default Footer;

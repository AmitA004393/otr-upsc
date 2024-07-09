import { memo, useState } from "react";
import { Menu, MenuItem, MenuButton, MenuRadioGroup } from "@szhsin/react-menu";
// import { map } from 'lodash'
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { MenuStyle } from "./MenuStyle";

import Link from "next/link";
import { Container } from "@mui/material";
interface props {
  menuData: any;
}

const menuData = {
  module: "candidate",
  menu: [
    {
      icon: "fa fa-database",
      label: "Dashboards",
      content: [
        {
          icon: "fa fa-gears",
          label: "Main",
          to: "/dashboards/main",
          component: "main",
        },
        {
          icon: "fa fa-gears",
          label: "Notification Dashboard",
          to: "/dashboards/exam_notices",
          component: "exam_notices",
        },
        {
          icon: "fa fa-gears",
          label: "Candidate Applications",
          to: "/dashboards/application",
          component: "candidate_application",
          isHidden: true,
        },
      ],
    },

    {
      icon: "fa fa-paste",
      label: "Profile",
      to: "/dashboards/application",
      component: "candidate_application",     
    },
   
  ],
};

const Menus = memo(() => {
  const [textColor, setTextColor] = useState("red");
  return (
    <MenuStyle>
      <Container >
        {" "}
        {menuData?.menu.map(({ content, label, icon, to }: any, i) => {
          return (
            <Menu
            key={i}
              menuButton={
                <MenuButton>
                  <Link href={`${to}`}>
                    <i
                      className={`${icon} me-3`}
                      style={{
                        fontSize: "0.9rem",
                      }}
                    />
                    {label}
                    {content?.length > 0 && (
                      <i
                        className="fa fa-angle-down ms-3 mt-3"
                        style={{
                          fontSize: "0.7rem",
                        }}
                      />
                    )}
                  </Link>
                </MenuButton>
              }
            >
              {content?.length > 0 && (
                <MenuRadioGroup
                  value={textColor}
                  onRadioChange={(e) => setTextColor(e.value)}
                >
                  {content.map(
                    ({ content, label, icon, to }: any, index: number) => {
                      return (
                        <MenuItem key={index} value="red">
                          <Link href={`${to}`}>
                            {label}
                          </Link>
                        </MenuItem>
                      );
                    }
                  )}
                </MenuRadioGroup>
              )}
            </Menu>
          );
        })}
      </Container>
    </MenuStyle>
  );
});
export default Menus;

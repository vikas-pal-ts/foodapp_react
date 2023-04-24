import React, { useState } from "react";
import AllAssets from "../../../../assets";
import {
  LeftSideBarConatiner,
  LeftSideBarItemConatiner,
  LeftSideBarItemLogo,
  LeftSideBarItemText,
  LeftSideBarLogoSection,
  LeftSideContainer,
} from "./index.styled";
import { LeftSideBarMenu } from "./utils/constants";

const HomeLeftSide = () => {
  const [activeMenuItem, setActiveMenuItem] = useState({ index: 0 });
  return (
    <LeftSideContainer>
      <LeftSideBarLogoSection>
        <AllAssets.Logo />
      </LeftSideBarLogoSection>
      <LeftSideBarConatiner>
        {LeftSideBarMenu.map((item, i) => {
          const isActive = i === activeMenuItem?.index;
          return (
            <LeftSideBarItemConatiner
              key={i}
              isActive={isActive}
              onClick={() => {
                setActiveMenuItem({ index: i });
              }}
            >
              <LeftSideBarItemLogo isActive={isActive}>
                <item.Icon />
              </LeftSideBarItemLogo>
              <LeftSideBarItemText isActive={isActive}>
                {item.title}
              </LeftSideBarItemText>
            </LeftSideBarItemConatiner>
          );
        })}
      </LeftSideBarConatiner>
    </LeftSideContainer>
  );
};

export default HomeLeftSide;

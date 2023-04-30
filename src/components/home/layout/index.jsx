import React from "react";
import {
  HomeLayoutContainer,
  HomeLayoutContent,
  HomeLayoutLeftSide,
  HomeLayoutRightSide,
} from "./index.styled";
import HomeLeftSide from "./leftsidebar";
import HomeContent from "./content";
import RightSideBarContent from "./rightsidebar";

const HomeLayout = () => {
  return (
    <HomeLayoutContainer>
      <HomeLayoutLeftSide>
        <HomeLeftSide />
      </HomeLayoutLeftSide>
      <HomeLayoutContent>
        <HomeContent />
      </HomeLayoutContent>
      {/* <HomeLayoutRightSide>
        <RightSideBarContent />
      </HomeLayoutRightSide> */}
    </HomeLayoutContainer>
  );
};

export default HomeLayout;

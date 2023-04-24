import React from "react";
import {
  HomeLayoutContainer,
  HomeLayoutContent,
  HomeLayoutLeftSide,
  HomeLayoutRightSide,
} from "./index.styled";
import HomeLeftSide from "./leftsidebar";
import HomeContent from "./content";

const HomeLayout = () => {
  return (
    <HomeLayoutContainer>
      <HomeLayoutLeftSide>
        <HomeLeftSide />
      </HomeLayoutLeftSide>
      <HomeLayoutContent>
        <HomeContent />
      </HomeLayoutContent>
      <HomeLayoutRightSide></HomeLayoutRightSide>
    </HomeLayoutContainer>
  );
};

export default HomeLayout;

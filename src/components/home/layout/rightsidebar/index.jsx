import React from "react";
import AllAssets from "../../../../assets";
import styled from "styled-components";

export const RightSideHeaderContainer = styled.div`
  /* width: 100%; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
  padding: 0px 20px;
`;

export const RightSideHeaderIconContainer = styled.div`
  /* width: 100%; */
  display: flex;
  align-items: center;
`;

export const RightSideHeaderIconDiv = styled.div`
  /* width: 100%; */
  width: 60px;
  cursor: pointer;
`;

const RightSideBarContent = () => {
  return (
    <RightSideHeaderContainer>
      <RightSideHeaderIconContainer>
        {/* <RightSideHeaderIconDiv>
          <AllAssets.OrderDiscussionIcon />
        </RightSideHeaderIconDiv> */}
        <RightSideHeaderIconDiv>
          <AllAssets.NotificationIcon />
        </RightSideHeaderIconDiv>
        <RightSideHeaderIconDiv>
          <AllAssets.SettingIcon />
        </RightSideHeaderIconDiv>
      </RightSideHeaderIconContainer>
      <div>
        <img src={AllAssets.UserProfileImage} alt="profile" />
      </div>
    </RightSideHeaderContainer>
  );
};

export default RightSideBarContent;

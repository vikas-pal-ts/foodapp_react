import styled from "styled-components";

export const LeftSideContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
`;

export const LeftSideBarLogoSection = styled.div`
  margin-top: 50px;
`;

export const LeftSideBarConatiner = styled.div`
  margin-top: 60px;
`;

export const LeftSideBarItemConatiner = styled.div`
  background-color: ${(props) => (props?.isActive ? "#f8b602" : "#ffffff")};
  width: 250px;
  height: 50px;
  padding: 16px 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 30px;
  box-shadow: ${(props) =>
    props?.isActive ? "0px 20px 50px rgba(46, 46, 46, 0.05)" : "none"};
  border-radius: 16px;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const LeftSideBarItemLogo = styled.div`
  & svg {
    & path {
      fill: ${(props) => (props?.isActive ? "#ffffff" : "#A098AE")};
    }
  }
`;

export const LeftSideBarItemText = styled.div`
  font-weight: 500;
  font-size: 18px;
  color: ${(props) => (props?.isActive ? "#ffffff" : "#A098AE")};
  margin-left: 20px;
`;

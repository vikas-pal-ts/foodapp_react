import styled from "styled-components";

export const HomeLayoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;

  /* align-items: center; */
`;

export const HomeLayoutLeftSide = styled.div`
  width: 345px;
  height: 100%;
  background-color: #ffffff;
`;

export const HomeLayoutContent = styled.div`
  width: calc(100% - 800px);
  padding: 0px 50px;
  /* height: 100vh; */
  overflow: auto;
  padding-bottom: 20px;
`;

export const HomeLayoutRightSide = styled.div`
  width: 455px;
  height: 100%;
  background-color: #ffffff;
`;

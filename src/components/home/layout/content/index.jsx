import React from "react";
import styled from "styled-components";
import AllAssets from "../../../../assets";
import { HomeCategoryData, PopularDishesData } from "./utils/constants";

const { BannerBG2 } = AllAssets;

export const HomeContentContainer = styled.div`
  width: 100%;
  /* height: 100%; */
  /* padding: 0px 40px; */
  margin-top: 50px;
`;

export const HomeContentHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HomeContentHeaderTitle = styled.h1`
  font-weight: 700;
  font-size: 36px;
  line-height: 54px;
  color: #2e2e2e;
`;

export const HomeContentSearchInputContainer = styled.div`
  width: 500px;
  height: 60px;
  background: #ffffff;
  border-radius: 16px;
  display: flex;
  align-items: center;
  padding: 2px 32px 2px 24px;
`;

export const HomeContentSearchInput = styled.input`
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #a098ae;
  &::placeholder {
    color: #a098ae;
    font-weight: 400;
    font-size: 18px;
  }
  outline: none;
  border: none;
  padding-left: 10px;
  width: 100%;
`;

export const HomeContentLayoutBanner = styled.div`
  height: 235px;
  /* width: 100%; */
  // eslint-disable-next-line no-undef
  /* 
  background-repeat: no-repeat;
  background-size: cover; */
  background-color: #f8b602;
  border-radius: 20px;
  background-image: url("${BannerBG2}");
  background-repeat: no-repeat;
  background-position: right;
  padding-right: 30px;
  background-origin: content-box, padding-box;
  display: flex;
  /* align-items: center; */
  padding-left 40px;
  flex-direction: column;
  justify-content: center;
`;

export const HomeContentBannerHeadling = styled.h1`
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;

  /* Color/White */

  color: #ffffff;
  width: 40%;
`;

export const HomeContentBannerDescr = styled.h1`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;

  /* Color/White */

  color: #ffffff;
  width: 50%;
`;

export const HomeContentDishesShowCardHeader = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

export const HomeContentDishesShowCardTitle = styled.div`
  font-weight: 700;
  font-size: 24px;
  color: #2e2e2e;
`;

export const HomeContentDishesShowCardViewAllBtn = styled.div`
  font-weight: 400;
  font-size: 18px;
  color: #f8b602;
`;

export const HomeContentCardContainer = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  gap: 20px;
  overflow: auto;
`;

export const HomeContentCategoryCardItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 16px;

  width: 160px;
  height: 160px;

  background: #ffffff;
  border-radius: 16px;
  flex-direction: column;
  cursor: pointer;
  color: #a098ae;
  &:hover {
    background: #f8b602;
    color: #ffffff;
    stroke: white;
    /* fill: white; */
  }
`;

export const HomeContentCategoryCardIcon = styled.div`
  & svg {
    stroke: inherit;
    & path {
      /* fill: inherit; */
    }
  }
`;
export const HomeContentCategoryCardText = styled.div`
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  color: inherit;
`;

export const HomeContentProductItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 260px;
  background: #ffffff;
  border-radius: 16px;
  cursor: pointer;
  position: relative;
  &:hover {
    /* background: #f8b602; */
    /* opacity: 0.8; */
  }
`;

export const HomeContentProductItemDiscountBadge = styled.div`
  position: absolute;
  background: #eb5757;
  border-radius: 0px 8px 8px 0px;
  width: 70px;
  height: 25px;
  left: 0;
  top: 25px;
  font-weight: 300;
  font-size: 15px;
  text-align: center;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomeContentProductItemFavBadge = styled.div`
  position: absolute;
  border-radius: 0px 8px 8px 0px;
  height: 25px;
  right: 25px;
  top: 25px;
  font-weight: 300;
  font-size: 15px;
  text-align: center;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    stroke: #dbdbdb;

    & path {
      fill: #dbdbdb;
    }
  }

  &:hover {
    & svg {
      stroke: #eb5757;

      & path {
        fill: #eb5757;
      }
    }
  }
`;

export const HomeContentItemBottomContent = styled.div`
  padding: 0px 25px;
  align-self: flex-start;
`;
export const HomeContentItemRatingContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 5px;
`;

export const HomeContentItemTitlePriceBtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 10px;
`;

export const HomeContentItemTitlePriceWrapper = styled.div`
  align-self: flex-start;
  padding: 0px 25px;
`;

export const HomeContentItemTitle = styled.div`
  font-weight: 500;
  font-size: 15px;
  color: #2e2e2e;
`;

export const HomeContentItemPrice = styled.div`
  font-weight: 700;
  font-size: 18px;
  color: #2e2e2e;
`;

export const HomeContentItemPlusButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* padding: 24px; */
  width: 48px;
  height: 48px;
  background: #f8b602;
  border-radius: 8px;
  margin-right: 25px;

  &:hover {
    background: #4a934a;
  }
`;

export const HomeContentSectionHeaderViewAll = ({
  title,
  btnTitle = "View all",
  btnOnClick = () => {},
}) => {
  return (
    <HomeContentDishesShowCardHeader>
      <HomeContentDishesShowCardTitle>{title}</HomeContentDishesShowCardTitle>
      <HomeContentDishesShowCardViewAllBtn onClick={btnOnClick}>
        {btnTitle}
      </HomeContentDishesShowCardViewAllBtn>
    </HomeContentDishesShowCardHeader>
  );
};

export const HomeContentProductItemCard = (props) => {
  return (
    <HomeContentProductItem>
      <HomeContentProductItemDiscountBadge>
        {props.discount} Off
      </HomeContentProductItemDiscountBadge>
      <HomeContentProductItemFavBadge>
        <AllAssets.FavIcon />
      </HomeContentProductItemFavBadge>
      <img src={props.img} alt="burger" style={{ width: "80%" }} />
      <HomeContentItemBottomContent>
        <HomeContentItemRatingContainer>
          <AllAssets.StarIcon />
          <AllAssets.StarIcon />
          <AllAssets.StarIcon />
          <AllAssets.StarIcon />
          <AllAssets.StarIcon />
        </HomeContentItemRatingContainer>
      </HomeContentItemBottomContent>
      <HomeContentItemTitlePriceBtnWrapper>
        <HomeContentItemTitlePriceWrapper>
          <HomeContentItemTitle>{props.title}</HomeContentItemTitle>
          <HomeContentItemPrice>${props.price}</HomeContentItemPrice>
        </HomeContentItemTitlePriceWrapper>
        <HomeContentItemPlusButton>
          <AllAssets.PlusIcon />
        </HomeContentItemPlusButton>
      </HomeContentItemTitlePriceBtnWrapper>
    </HomeContentProductItem>
  );
};

const HomeContent = () => {
  return (
    <HomeContentContainer>
      <HomeContentHeader>
        <HomeContentHeaderTitle>Hello, Vikas</HomeContentHeaderTitle>
        <HomeContentSearchInputContainer>
          <AllAssets.SearchIcon />
          <HomeContentSearchInput
            type="text"
            placeholder="What do you want to eat today..."
          />
        </HomeContentSearchInputContainer>
      </HomeContentHeader>
      <HomeContentLayoutBanner>
        <HomeContentBannerHeadling>
          Get Discount Voucher Up To 20%{" "}
        </HomeContentBannerHeadling>
        <HomeContentBannerDescr>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </HomeContentBannerDescr>
      </HomeContentLayoutBanner>
      <HomeContentSectionHeaderViewAll title={"Category"} />
      <HomeContentCardContainer>
        {HomeCategoryData.map((item) => {
          return (
            <HomeContentCategoryCardItem>
              <HomeContentCategoryCardIcon>
                <item.Icon />
              </HomeContentCategoryCardIcon>

              <HomeContentCategoryCardText>
                {item.title}
              </HomeContentCategoryCardText>
            </HomeContentCategoryCardItem>
          );
        })}
      </HomeContentCardContainer>

      {/* Popular dishes section */}
      <HomeContentSectionHeaderViewAll title={"Popular Dishes"} />
      <HomeContentCardContainer>
        {PopularDishesData.map((item, i) => {
          return <HomeContentProductItemCard key={i} {...item} />;
        })}
      </HomeContentCardContainer>
      {/* Popular dishes section */}
      <HomeContentSectionHeaderViewAll title={"Recent Order"} />
      <HomeContentCardContainer>
        {PopularDishesData.map((item, i) => {
          return <HomeContentProductItemCard key={i} {...item} />;
        })}
      </HomeContentCardContainer>
    </HomeContentContainer>
  );
};

export default HomeContent;

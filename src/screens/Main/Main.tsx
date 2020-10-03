import React, { FC } from "react";
import RecipeImage from "../../components/RecipeImage";
import RecipeDescription from "../../components/RecipeDescription";
import { BackgroundImage, MainWrapper } from "./style";
const Main: FC = () => {
  return (
    <BackgroundImage>
      <MainWrapper>
        <RecipeImage />
        <RecipeDescription />
      </MainWrapper>
    </BackgroundImage>
  );
};

export default Main;

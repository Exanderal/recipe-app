import React, { FC } from "react";
import RecipeImage from "../../components/RecipeImage";
import RecipeData from "../../components/RecipeData";
import { BackgroundImage, MainWrapper } from "./style";
const Main: FC = (props) => {
  const colors = [
    {
      first: "rgba(230, 100, 101, 0.9)",
      second: "rgba(145, 152, 229, 0.9)",
      third: "rgba(230, 100, 101, 0.6)",
    },
    {
      first: "rgba(33, 147, 176, 0.9)",
      second: "rgba(109, 213, 237, 0.9)",
      third: "rgba(33, 147, 176, 0.6)",
    },
    {
      first: "rgba(31, 64, 55, 0.9)",
      second: "rgba(153, 242, 200, 0.9)",
      third: "rgba(31, 64, 55, 0.6)",
    },
    {
      first: "rgba(16, 141, 199, 0.9)",
      second: "rgba(239, 142, 56, 0.9)",
      third: "rgba(16, 141, 199, 0.6)",
    },
    {
      first: "rgba(69, 104, 220, 0.9)",
      second: "rgba(176, 106, 179, 0.9)",
      third: "rgba(69, 104, 220, 0.6)",
    },
  ];
  const randomColorPicked = Math.floor(Math.random() * colors.length);
  const colorPalette = colors[randomColorPicked];
  return (
    <BackgroundImage colorPalette={colorPalette}>
      <MainWrapper colorPalette={colorPalette}>
        <RecipeImage />
        <RecipeData />
      </MainWrapper>
    </BackgroundImage>
  );
};

export default Main;

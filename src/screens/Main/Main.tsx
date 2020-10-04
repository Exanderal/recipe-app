import React, { FC, useState, useEffect } from "react";
import RecipeImage from "../../components/RecipeImage";
import RecipeData from "../../components/RecipeData";
import { Recipe } from "../../types/models/Recipe";
import colors from "../../utils/colors";
import { getRandomRecipe } from "../../utils/api";
import { BackgroundImage, MainWrapper } from "./style";
import Loader from "../../components/Loader";

const Main: FC = () => {
  const dummyRecipe: Recipe = {
    title: "",
    image: "",
    instructions: "",
    sourceUrl: "",
    sponacularScore: 0,
    summary: "",
    readyInMinutes: 0,
  };
  const randomColorPicked = Math.floor(Math.random() * colors.length);
  const [colorPalette, setColorPalette] = useState(colors[randomColorPicked]);
  const [recipe, setRecipe] = useState(dummyRecipe);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    getRandomRecipe().then((recipes) => {
      setRecipe(recipes.recipes[0]);
    });
    setLoading(false);
  }, [colorPalette]);
  if (loading) {
    return <Loader />;
  } else {
    return (
      <BackgroundImage colorPalette={colorPalette} imageUrl={recipe.image}>
        <MainWrapper colorPalette={colorPalette}>
          <RecipeImage imageUrl={recipe.image} />
          <RecipeData recipe={recipe} setColorPalette={setColorPalette} />
        </MainWrapper>
      </BackgroundImage>
    );
  }
};

export default Main;

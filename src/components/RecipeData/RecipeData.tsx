import React, { FC } from "react";
import Avatar from "../../images/avatar.png";
import {
  RecipeWrapper,
  Wrapper,
  RecipeTime,
  RecipeLink,
  RecipeTitle,
  RecipeDescription,
  RecipeAuthorWrapper,
  RecipeAuthor,
  RecipeAuthorImg,
  RecipeAuthorName,
  RecipeAuthorRecipeAmount,
  RecipeLinkArrow,
  RecipeLinkCircle,
  RecipeDetails,
  RecipeDetailsCircle,
  RecipeDetailsParagraph,
  RecipeLinkHeading,
} from "./style";
import { Recipe } from "../../types/models/Recipe";
import colors from "../../utils/colors";
type Props = {
  recipe: Recipe;
  setColorPalette: React.Dispatch<
    React.SetStateAction<{
      first: string;
      second: string;
      third: string;
    }>
  >;
};

const RecipeData: FC<Props> = ({
  recipe: { summary, sponacularScore, sourceUrl, title, readyInMinutes },
  setColorPalette,
}) => {
  return (
    <Wrapper>
      <RecipeWrapper>
        <RecipeTime>Cooking time: {readyInMinutes}</RecipeTime>
        <RecipeTitle>{title}</RecipeTitle>
        <RecipeAuthor>
          <RecipeAuthorImg src={Avatar} />
          <RecipeAuthorWrapper>
            <RecipeAuthorName>Lyanna Goyle</RecipeAuthorName>
            <RecipeAuthorRecipeAmount>
              {sponacularScore} recipes
            </RecipeAuthorRecipeAmount>
          </RecipeAuthorWrapper>
        </RecipeAuthor>
        <RecipeDescription dangerouslySetInnerHTML={{ __html: summary }} />
        <RecipeDetails href={sourceUrl} target="blank">
          <RecipeDetailsParagraph>
            Find more about recipe right here
          </RecipeDetailsParagraph>
          <RecipeDetailsCircle>
            <RecipeLinkArrow />
          </RecipeDetailsCircle>
        </RecipeDetails>
      </RecipeWrapper>
      <RecipeLink
        onClick={() => {
          const randomColorNumber = Math.floor(Math.random() * colors.length);
          setColorPalette(colors[randomColorNumber]);
        }}
      >
        <RecipeLinkHeading>Next Recipe</RecipeLinkHeading>
        <RecipeLinkCircle>
          <RecipeLinkArrow />
        </RecipeLinkCircle>
      </RecipeLink>
    </Wrapper>
  );
};

export default RecipeData;

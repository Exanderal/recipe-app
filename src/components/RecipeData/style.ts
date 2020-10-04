import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";
export const Wrapper = styled.div`
  display: flex;
  max-width: 50%;
`;

export const RecipeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 88%;
  padding: 2rem 1.5rem;
`;

export const RecipeLink = styled.div`
  width: 12%;
  position: relative;
  flex: 1;
  border-left: 1px solid lightgrey;
`;

export const RecipeTime = styled.p`
  color: ${(props) => props.theme.color.darkgrey};
  margin-bottom: 0.8rem;
`;

export const RecipeTitle = styled.h1`
  color: ${(props) => props.theme.color.white};
  margin-bottom: 1rem;
  font-weight: 500;
`;

export const RecipeDescription = styled.div`
  padding: 1rem;
  text-indent: 0.3rem;
  color: ${(props) => props.theme.color.darkgrey};
  white-space: pre-line;
`;

export const RecipeAuthorWrapper = styled.div`
  margin-left: 0.5rem;
`;

export const RecipeAuthor = styled.div`
  display: flex;
  align-items: center;
`;

export const RecipeAuthorImg = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
`;

export const RecipeAuthorName = styled.h2`
  color: ${(props) => props.theme.color.lightgrey};
  font-weight: 500;
`;

export const RecipeAuthorRecipeAmount = styled.p`
  color: ${(props) => props.theme.color.darkgrey};
  margin-top: 0.2rem;
`;

export const RecipeLinkCircle = styled.div`
  cursor: pointer;
  position: absolute;
  left: -1.3rem;
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${(props) => props.theme.color.lightgrey};
`;

export const RecipeLinkArrow = styled(FaArrowRight)`
  position: relative;
  fill: ${(props) => props.theme.color.black};
  height: 1rem;
  width: 1rem;
`;

export const RecipeDetails = styled.a`
  display: flex;
  align-items: center;
  margin-top: auto;
  text-decoration: none;
  color: black;
`;

export const RecipeDetailsParagraph = styled.p``;

export const RecipeDetailsCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  margin-left: 0.5rem;
  background-color: ${(props) => props.theme.color.lightgrey};
  cursor: pointer;
`;

export const RecipeLinkHeading = styled.h2`
  position: absolute;
  transform: rotate(90deg);
  color: ${(props) => props.theme.color.white};
  white-space: nowrap;
  top: 50%;
  left: 0;
`;

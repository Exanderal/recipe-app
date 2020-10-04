import React, { FC } from "react";
import { ImageWrapper } from "./style";
type ImageProps = {
  imageUrl: string;
};

const RecipeImage: FC<ImageProps> = ({ imageUrl }) => {
  return <ImageWrapper imageUrl={imageUrl} />;
};

export default RecipeImage;

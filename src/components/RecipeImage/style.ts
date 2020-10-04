import styled from "styled-components";

type ImageProps = {
  imageUrl: string;
};

export const ImageWrapper = styled.div<ImageProps>`
  width: 50%;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
`;

import styled from "styled-components";
import Image from "../../images/default.jpg";
type BackgroundProps = {
  colorPalette: {
    first: string;
    second: string;
    third: string;
  };
};

export const BackgroundImage = styled.div<BackgroundProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  background-image: linear-gradient(
      ${(props) => props.colorPalette.first},
      ${(props) => props.colorPalette.second}
    ),
    url(${Image});
  background-size: cover;
  background-position: center;
`;
export const MainWrapper = styled.div<BackgroundProps>`
  display: flex;
  width: 70vw;
  min-height: 70vh;
  background: ${(props) => props.colorPalette.third};
`;

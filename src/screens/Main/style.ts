import styled from "styled-components";
import Image from "../../images/default.jpg";
export const BackgroundImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  /* background-image: url(${Image}); */
  background-image: linear-gradient(
      rgba(230, 100, 101, 0.9),
      rgba(145, 152, 229, 0.9)
    ),
    url(${Image});
`;
export const MainWrapper = styled.div`
  display: flex;
  min-width: 60vw;
  min-height: 70vh;
  background: rgb(230, 100, 101);
`;

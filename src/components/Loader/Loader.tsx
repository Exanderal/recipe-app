import React, { FC } from "react";
import { LoaderWrapper } from "./style";
const Loader: FC = () => {
  return (
    <LoaderWrapper>
      <div className="loader">Loading...</div>
    </LoaderWrapper>
  );
};

export default Loader;

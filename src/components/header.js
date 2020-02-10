import React, { useState } from "react";
import styled from "styled-components";
import ImageUpload from "./ImageUpload";

const Image = styled.img`
  width: 75%;
  margin: auto 0;
`;
const Header = () => {
  const [image, setImage] = useState(0);
  if (!image) return <ImageUpload setImage={setImage} />;

  return <Image alt="Teacher provided." src={image} />;
};

export default Header;

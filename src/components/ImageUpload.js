import React from "react";
import styled from "styled-components";

const Upload = styled.input`
  display: block;
  margin: 25px auto;
`;
const ImageUpload = props => {
  const handleChange = e => {
    console.log(e.target.files[0]);
    const file = e.target.files[0];
    const fileCompressed = URL.createObjectURL(file);
    props.setImage(fileCompressed);
  };
  return (
    <>
      <label htmlFor="imageupload">Upload image.</label>
      <Upload type="file" onChange={handleChange} name="imageupload" />
    </>
  );
};

export default ImageUpload;

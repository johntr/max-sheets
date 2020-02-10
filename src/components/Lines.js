import React from "react";
import styled from "styled-components";
const StyledLines = styled.div`
  border-top: black 1px solid;
  border-bottom: black 1px solid;
  height: 50px;
  width: 90%;
  margin: 15px auto;
`;
const StrikeThrough = styled.div`
  height: 50%;
  border-bottom: black 1px dashed;
`;
const Lines = () => {
  return (
    <StyledLines>
      <StrikeThrough />
    </StyledLines>
  );
};

export default Lines;

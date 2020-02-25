import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/header";
import Lines from "../components/Lines";

const Button = styled.button`
  margin: 0 auto;
  border-radius: 0.25rem;
  background: #1e88e5;
  color: white;
  font-size: 1rem;
  line-height: 1.2;
  text-decoration: none;
  padding: 0.25rem 0.5rem;
  display: block;
  @media print {
    display: none;
  }
`;

const Picture = () => {
  const [lines, setLines] = useState([<Lines />]);
  const handleClick = () => setLines([...lines, <Lines />]);
  return (
    <>
      <Header />
      <Button onClick={handleClick}>Add Lines</Button>
      {lines}
    </>
  );
};

export default Picture;

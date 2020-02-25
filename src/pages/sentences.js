import React from "react";
import Data from "../data/sentenceData";
import Draggable from "react-draggable";
import styled from "styled-components";
import reactStringReplace from "react-string-replace";
export const Blank = styled.span`
  border-bottom: black 1px solid;
  line-height: 2;
  width: 50px;
  display: inline-block;
  margin: -3px 10px;
`;
const Answer = styled.div`
  border: black 1px solid;
  height: 50px;
  width: 50px;
  display: grid;
  align-items: center;
  text-align: center;
`;
const Sentences = () => {
  const Results = Data.map((el, index) => {
    const tempSent = reactStringReplace(el.phrase, "|", (match, keys) => (
      <Blank key={keys} />
    ));
    const tempAnswers = el.choices.map((choice, i) => (
      <Draggable key={i}>
        <Answer>{choice}</Answer>
      </Draggable>
    ));
    return (
      <React.Fragment key={index}>
        <h3>{tempSent}</h3>
        <div>{tempAnswers}</div>
      </React.Fragment>
    );
  });

  return <>{Results}</>;
};

export default Sentences;

import React from "react";
import Data from "../data/sentenceData";
import Draggable from "react-draggable";
import styled from "styled-components";
import reactStringReplace from "react-string-replace";
const Wrapper = styled.div`
  /* background: #ffd0d0; */
`;
const AppWrapper = styled.div`
  padding: 25px;
  border: 2px solid #929292;
  margin: 50px;
  box-shadow: 4px 3px 20px -6px rgba(0, 0, 0, 0.54);
  /* background: white; */
`;
export const Blank = styled.span`
  border-bottom: black 1px solid;
  line-height: 2;
  width: 65px;
  display: inline-block;
  margin: -3px 10px;
`;
const Answer = styled.div`
  border: black 1px solid;
  min-height: 50px;
  width: 80px;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 5px;
  margin-top: 5px;
`;
const Sentences = () => {
  const Results = Data.map((el, index) => {
    const tempSent = reactStringReplace(el.phrase, "|", (match, keys) => (
      <Blank key={keys} />
    ));
    console.log(el);
    const tempAnswers = el.choices.map(choice => (
      <div style={{ marginLeft: `50px` }}>
        {choice.map((c, i) => (
          <Draggable key={i}>
            <Answer>{c}</Answer>
          </Draggable>
        ))}
      </div>
    ));
    return (
      <AppWrapper key={index}>
        <h3>{tempSent}</h3>
        <div style={{ display: `flex` }}>{tempAnswers}</div>
      </AppWrapper>
    );
  });

  return <Wrapper>{Results}</Wrapper>;
};

export default Sentences;

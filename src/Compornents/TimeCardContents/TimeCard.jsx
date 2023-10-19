import React from "react";
import styled from "styled-components";
import { TimeCardHeader } from "./TimeCardCompornents/TimeCardHeader";
import { Timer } from "./TimeCardCompornents/Timer";
import { TimeCardSelectBox } from "./TimeCardCompornents/TimeCardSelectBox";
import { TimeCardInputBox } from "./TimeCardCompornents/TimeCardInputBox";
import { TimeCardButtonBox } from "./TimeCardCompornents/TimeCardButtonBox";
import { TimeCardRadioButtonBox } from "./TimeCardCompornents/TimeCardRadioButtonBox";

// TimeCardDiv Style
export const StimecardDiv = styled.div`
  max-width:1110px;
  background-color:white;
  border-radius:5px;
  height:436.21px;
  margin-top:15px;
  margin-bottom:15px;
  margin-right:13px;
  margin-left:13px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
`;

// Div Style
export const Sdiv = styled.div`
  display:flex;
  justify-content:center;
`;

// P Style
export const StimeCardP = styled.p`
  font-size:13px;
  margin-right:auto;
  margin-bottom:6.5px;
`;

//Main TimeCard Compornent
export const TimeCard = ()=>{
    return(
      <StimecardDiv>
        <TimeCardHeader />
        <Timer />

      <TimeCardCrlBoxDiv>
        <Sdiv><StimeCardP>打刻場所を選択してください</StimeCardP></Sdiv>
        <TimeCardSelectBox />
        <TimeCardInputBox />
        <TimeCardButtonBox />
        <TimeCardRadioButtonBox />
      </TimeCardCrlBoxDiv>
      
      
      </StimecardDiv>
    )
};

// Style TimeCardCrlBox Div
const TimeCardCrlBoxDiv = styled.div`
  display:flex;
  flex-direction:column;

`;
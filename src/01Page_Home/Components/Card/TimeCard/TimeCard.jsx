import React from "react";
import styled from "styled-components";
import { TimeCardHeader } from "./Parts/TimeCardHeader";
import { TimeCardSelectBox } from "./Parts/TimeCardSelectBox";
import { TimeCardButtonBox } from "./Parts/TimeCardButtonBox";
import { TimeCardRadioButtonBox } from "./Parts/TimeCardRadioButtonBox";
import { Timer } from "./Parts/Timer";
import { TimeCardInputBox } from "./Parts/TimeCardInputBox";

/* ======================================================================== */  
/* ============================ Styles ==================================== */  
/* ======================================================================== */ 

/* ====== Styled Components ====== */
// TimeCardDiv Style
export const StimecardDiv = styled.div`
  max-width:100%;
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

// Style TimeCardBox Div
const StimeCardBoxDiv = styled.div`
  width:100%;
  display:flex;
  justify-content: center; 
`;

// Style TimeCardBoxCrl Div
const StimeCardBoxCrlDiv = styled.div`
  display:flex;
  width:58%;
  padding-right:15px;
  padding-left:15px;
  flex-direction:column;
  max-width:58%;
`;

/* ======================================================================== */  
/* ============================ Components ================================ */  
/* ======================================================================== */ 

//Main TimeCard Compornent
export const TimeCard = ()=>{
    return(
      <StimecardDiv>
        <TimeCardHeader />
        <Timer />

      <StimeCardBoxDiv>
      <StimeCardBoxCrlDiv>
        <Sdiv><StimeCardP>打刻場所を選択してください</StimeCardP></Sdiv>
        <TimeCardSelectBox />
        <TimeCardInputBox />
        <TimeCardButtonBox />
        <TimeCardRadioButtonBox />
      </StimeCardBoxCrlDiv>
      </StimeCardBoxDiv>
      
      
      </StimecardDiv>
    )
};



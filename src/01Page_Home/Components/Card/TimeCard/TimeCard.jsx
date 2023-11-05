import React, { useState } from 'react';
import styled from "styled-components";
import { TimeCardHeader } from "./Parts/TimeCardHeader";
import { TimeCardSelectBox } from "./Parts/TimeCardSelectBox";
import { TimeCardButtonBox,TextContext } from "./Parts/TimeCardButtonBox";
import { TimeCardRadioButtonBox } from "./Parts/TimeCardRadioButtonBox";
import { Timer } from "./Parts/Clock";
import { TimeCardInputBox } from "./Parts/TimeCardInputBox";

/* ======================================================================== */  
/* ============================ Styles ==================================== */  
/* ======================================================================== */ 
/* ====== Styled Components ====== */
export const StimecardDiv = styled.div` // タイムカード全体を囲うスタイル
  display:flex;
  flex-direction:column;
  max-width:100%;
  background-color:white;
  border-radius:5px;
  height:436.21px;
  margin-top:15px;
  margin-bottom:15px;
  margin-right:13px;
  margin-left:13px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
  align-items:center;
`;

const StimeCardBody = styled.div` //タイムカードのボディを囲うスタイル
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
//タイムカードを呼び出す関数
export const TimeCard = ()=>{

  const [text, setText] = useState('退勤中');

    return(
      <TextContext.Provider value={{text, setText}}>
      <StimecardDiv>

        <TimeCardHeader />
        
        <StimeCardBody>
          <Timer />
          <p style={{fontSize:'13px',marginRight:'auto',marginBottom:'6.5px'}}>打刻場所を選択してください</p>
          <TimeCardSelectBox />
          <TimeCardInputBox />
          <TimeCardButtonBox />
          <TimeCardRadioButtonBox />
        </StimeCardBody>
      
      </StimecardDiv>
      </TextContext.Provider>
    )
};



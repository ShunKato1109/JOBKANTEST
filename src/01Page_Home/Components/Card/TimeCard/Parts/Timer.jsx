import React from "react";
import styled from "styled-components";
import { Clock } from "./Clock";

  // TimerDiv Style
  export const StimerDiv = styled.div`
    font-size:96px;
    text-align:center;
  `;

// Timer Compornent
export const Timer = ()=>{
    return (
    <StimerDiv>
      <Clock />
    </StimerDiv>
    )
  };
  

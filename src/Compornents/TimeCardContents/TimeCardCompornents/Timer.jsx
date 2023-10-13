import React from "react";
import styled from "styled-components";

export const Timer = ()=>{
    return <StimerDiv>00:00:00</StimerDiv>
  };
  
  // TimerDiv Style
  export const StimerDiv = styled.div`
    font-size:70px;
    text-align:center;
    background-color:green;
    padding:25px; 
  `;
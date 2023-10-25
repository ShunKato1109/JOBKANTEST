import React from "react";
import styled from "styled-components";

// Style Shooter
const ShooterMaindiv = styled.div`
  flex-grow:1;
  margin-top:auto;
`;

// Style Shooter Div
const ShooterDiv = styled.div`
    display:flex;
    background-color:#333333;
    height:45.5px;
    width:100%;
    margin-top:auto;
    font-size:13px;
    color:#FFFFFF;
    align-items:center;
    justify-content: center;
`;

// Compornent HooterMain
export const HooterMain = ()=>{
  return(
    <ShooterMaindiv>
     <ShooterDiv>©2010 DONUTS Co.ltd.</ShooterDiv>
    </ShooterMaindiv>
  )
};

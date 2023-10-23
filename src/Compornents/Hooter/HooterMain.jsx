import React from "react";
import styled from "styled-components";

const ShooterMaindiv = styled.div`
  flex-grow:1;
`;

// Hooter div Style
const ShooterDiv = styled.div`
    display:flex;
    background-color:#333333;
    // height:45.5px;
    padding:13px;
    width:100%;
    font-size:13px;
    color:#FFFFFF;
    align-items:center;
    justify-content: center;
`;

// BodyHooter Compornent
export const HooterMain = ()=>{
  return(
    <ShooterMaindiv>
     <ShooterDiv>©2010 DONUTS Co.ltd.</ShooterDiv>
    </ShooterMaindiv>
  )
};

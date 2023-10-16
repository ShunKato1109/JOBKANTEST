import React from "react";
import styled from "styled-components";

// Hooter div Style
export const HooterDiv = styled.div`
    display:flex;
    background-color:#333333;
    height:45.5px;
    width:100%;
    // margin-top:100%;
    font-size:13px;
    color:#FFFFFF;
    align-items:center;
    justify-content: center;
`;

// BodyHooter Compornent
export const BodyHooter = ()=>{
  return(
    <div style={{display:'flex'}}>
    <HooterDiv>©2010 DONUTS Co.ltd.</HooterDiv>
    </div>
  )
};

import React from "react";
import styled from "styled-components";

/* ======================================================================== */  
/* ============================ Styles ==================================== */  
/* ======================================================================== */ 

/* ====== Styled Components ====== */
// Style Shooter Div
const SfooterDiv = styled.div`
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
export const FooterMain = ()=>{
  return(
     <SfooterDiv>©2010 DONUTS Co.ltd.</SfooterDiv>
  )
};

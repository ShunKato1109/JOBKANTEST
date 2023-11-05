import React, { useContext } from "react";
import styled from "styled-components";
import { TextContext } from "./TimeCardButtonBox";

/* ======================================================================== */  
/* ============================ Styles ==================================== */  
/* ======================================================================== */ 
//タイムカードのヘッダーを囲うスタイル
export const StimecardHeader = styled.div`
  display:flex;
  height:46.79px;
  width:100%;
  font-size:22.75px;
  background-color:#E6E6E6;
  align-items:center;
  border-radius:5px 5px 0px 0px;
  margin-right:13px;
  margin-left:13px;
`;

/* ======================================================================== */  
/* ============================ Components ================================ */  
/* ======================================================================== */ 
// タイムカードのヘッダーを呼び出す関数
export const TimeCardHeader = ()=>{

  const {text} = useContext(TextContext);

  return(
    <StimecardHeader>
      <p>{text}</p>
    </StimecardHeader>
  )
};
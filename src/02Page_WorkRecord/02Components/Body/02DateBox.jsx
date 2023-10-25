import React from "react";
import styled from "styled-components";

/* ======================================================================== */  
/* ============================ Styles ==================================== */  
/* ======================================================================== */ 

/* ====== Styled Components ====== */
const SdateBox = styled.div`
    height:147px; //サンプル用なので高さ設定しておく
    background-color:#F7F7F7;
    padding:16.25px;
    margin:0px 13px 0px 13px;
    
`;

/* ====== Components ====== */
export const DateBox = ()=>{
    return <SdateBox>中身は対象外</SdateBox>
};
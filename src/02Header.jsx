import React from "react";
import styled from "styled-components";

/* ======================================================================== */  
/* ============================ Styles ==================================== */  
/* ======================================================================== */ 

/* ====== Styled Components ====== */
const SworkRecordHeader = styled.div`
    width:100%;
    font-size:26px;
    margin:0px 0px 13px 0px;
    color:#333333;
`;

/* ====== Components ====== */
export const WorkRecordHeader = ()=>{
    return <SworkRecordHeader>出勤簿</SworkRecordHeader>
};
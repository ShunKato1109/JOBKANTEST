import React from "react";
import styled from "styled-components";
import { WorkRecordHeader } from "./02Header";
import { WRCardBody } from "./02CardBody";

/* ======================================================================== */  
/* ============================ Styles ==================================== */  
/* ======================================================================== */ 

/* ====== Styled Components ====== */
const SworkRecordMain = styled.div` //WorkRecordMainスタイル
    width:100%;
    padding:13px 15px 13px 15px;
    background-color:#F7F7F7;
`;

const SworkRecordSub = styled.div` //WorkRecordMainスタイル
    max-width:1110px;
    padding:0px 15px 0px 15px;
    margin:0px;
`;

/* ====== Components ====== */
export const WorkRecordMain = ()=>{
    return(
        <SworkRecordMain>
            <SworkRecordSub>
                <WorkRecordHeader />
                <WRCardBody />
            </SworkRecordSub>
        </SworkRecordMain>
    )
};
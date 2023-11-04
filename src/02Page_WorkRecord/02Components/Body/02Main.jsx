import React from "react";
import styled from "styled-components";
import { WorkRecordHeader } from "./02Header";
import { WRCardBody } from "./02CardBody";
import { FooterMain } from "../../../Components/Footer/FooterMain";

/* ======================================================================== */  
/* ============================ Styles ==================================== */  
/* ======================================================================== */ 

/* ====== Styled Components ====== */
const SworkRecordMain = styled.div` //WorkRecordMainスタイル
    padding:13px 15px 13px 15px;
    background-color:#F7F7F7;
`;

const SworkRecordSub = styled.div` //WorkRecordMainスタイル
    max-width:1110px;
    padding:0px 15px 0px 15px;
`;

/* ======================================================================== */  
/* ============================ Components ================================ */  
/* ======================================================================== */ 

/* ====== Components ====== */
export const WorkRecordMain = ()=>{
    return(
        <div style={{display:'flex',flexDirection:'column',width:'100%'}}>
        <SworkRecordMain>
            <SworkRecordSub>
                <WorkRecordHeader />
                <WRCardBody />
            </SworkRecordSub>
        </SworkRecordMain>
        <FooterMain />
        </div>
    )
};
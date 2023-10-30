import React from "react";
import styled from "styled-components";
import { DateBox } from "./02DateBox";
import { AccountInfo } from "./AccountInfomation/AccountInfo";
import { Calender } from "../Calender/Calender";

/* ======================================================================== */  
/* ============================ Styles ==================================== */  
/* ======================================================================== */ 

/* ====== Styled Components ====== */
const SwrCardBody =styled.div` //出勤簿内容全体のスタイル
    padding:16.25px ;
    border-radius:3px;
    background-color:#FFFFFF;
    color:#333333;
`;

const SwrCardTitle = styled.div` //年月タイトルのスタイル
    padding:0px 15px 0px 15px;
    font-size:19.5px;
    
`;

/* ====== Components ====== */
export const WRCardBody = ()=>{
    return(
        <SwrCardBody>
            <SwrCardTitle>2023年10月度の出勤簿</SwrCardTitle>
            <DateBox />
            <AccountInfo />
            <Calender />
        </SwrCardBody>
    )
}; 
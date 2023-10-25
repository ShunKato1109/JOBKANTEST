import React from "react";
import styled from "styled-components";
import { HeaderBody } from "../Components/Header/HeaderBody";
import { WorkRecordBody } from "./02Components/Body/02Body";

/* ======================================================================== */  
/* ============================ Styles ==================================== */  
/* ======================================================================== */ 

/* ====== Styled Components ====== */

const SworkRecordMain = styled.div` //ページ全体のスタイル
    height:100vh;
    width:100%;
`;

// Page 出勤簿
export const WorkRecordPage = ()=>{
    return (
// ============================ 全体 ====================================
    <SworkRecordMain>
{/* ============================ ヘッダー ==================================== */}
        <HeaderBody />
{/* ============================ ボディ ==================================== */}
        <WorkRecordBody />
    </SworkRecordMain>

)};

export default WorkRecordPage;
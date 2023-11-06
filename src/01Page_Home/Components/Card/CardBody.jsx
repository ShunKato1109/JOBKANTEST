
/* ======================================================================== */  
/* ============================ import ==================================== */  
/* ======================================================================== */  
import React from "react";
import styled from "styled-components";
import { AdminMessageCard } from "./AdminMessageCard";

/* ======================================================================== */  
/* ============================ Styles ==================================== */  
/* ======================================================================== */ 
const SinfoBodyDiv = styled.div` //お知らせカード全体を囲うスタイル
    display:flex;
`;


const ScardDiv = styled.div` // ユーザー情報カード関数全体を囲うスタイル
    width:50%;
    margin:0px 15px 0px 15px;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
    border-radius:5px 5px 5px 5px;
`;


const ScardHeaderDiv = styled.div` // ユーザー情報カード内のヘッダーを囲うスタイル
    display:flex;
    padding:9.75px 16.25px 9.75px 16.25px;
    background-color:#E6E6E6;
    align-items:center;
    border-radius:5px 5px 0px 0px;
    color:#333333;
    font-size:13px;
`;


const ScardBodyDiv = styled.div` // ユーザー情報カードのボディを囲うスタイル
    background-color:#FFFFFF;
    border-radius:0px 0px 5px 5px;
    padding:16.25px;
`;


const SuserMsgRow = styled.div` // ユーザー情報カードボディ内のテキスト行を囲うスタイル
    display:flex;
    justify-content:space-between;
    color:#ADADAD;
    font-size:13px;
    padding:9.75px;
    border-top:1px solid
`;

/* ======================================================================== */  
/* ============================== Arry ==================================== */  
/* ======================================================================== */ 
// ユーザー情報カード内のテキスト配列
const userMsg = [ 
    {lefttext:"打刻忘れ・漏れ",righttext:"0件"},
    {lefttext:"打刻エラー",righttext:"0件"},
];

/* ======================================================================== */  
/* ============================ Components ================================ */  
/* ======================================================================== */ 
/* ====== ユーザー情報カード内テキスト行 ====== */
export const UserMsgText = (props)=>{
    return(
        <SuserMsgRow>
            <div>{props.lefttext}</div>
            <div style={{alignItems:'right'}}>{props.righttext}</div>
        </SuserMsgRow>
    )
};

/* ====== ユーザー情報カード ====== */
export const UserMessageCard = ()=>{
    return(
        <ScardDiv>
            <ScardHeaderDiv>以下の項目の確認をお願いいたします。</ScardHeaderDiv>
            <ScardBodyDiv>{userMsg.map(userMsg=><UserMsgText lefttext={userMsg.lefttext} righttext={userMsg.righttext} />)}</ScardBodyDiv>
        </ScardDiv>
    )
};

/* ======================================================================== */  
/* ============================ Main ====================================== */  
/* ======================================================================== */
export const CardBody = ()=>{
    return(
        <SinfoBodyDiv>
            <UserMessageCard />
            <AdminMessageCard />
        </SinfoBodyDiv>
    )
};



/* ======================================================================== */  
/* ============================ Styles ==================================== */  
/* ======================================================================== */ 





/* ======================================================================== */  
/* ========================= Helper Components ============================ */  
/* ======================================================================== */ 


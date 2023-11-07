
/* ======================================================================== */  
/* ============================ import ==================================== */  
/* ======================================================================== */  
import React from "react";
import styled from "styled-components";

/* ======================================================================== */  
/* ============================ Styles ==================================== */  
/* ======================================================================== */ 
const SinfoBodyDiv = styled.div` //お知らせカード全体を囲うスタイル
    display:flex;
`;

const Scard = styled.div` // ユーザー情報カード関数全体を囲うスタイル
    background-color:#FFFFFF;
    width:50%;
    margin:0px 15px 0px 15px;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
    border-radius:5px 5px 5px 5px;
`;

const ScardHeader = styled.div` // ユーザー情報カード内のヘッダーを囲うスタイル
    display:flex;
    background-color:#E6E6E6;
    padding:9.75px 16.25px 9.75px 16.25px;
    align-items:center;
    border-radius:5px 5px 0px 0px;
    color:#333333;
    font-size:13px;
`;


const SuserCardBody = styled.div` // ユーザー情報カードのボディを囲うスタイル
    background-color:#FFFFFF;
    padding:16.25px;
    border-radius:0px 0px 5px 5px;
`;

const SadminCardBody = styled.div` //カード内のボディを囲うスタイル
    padding:16.25px;
    color:black;
    font-size:13px;
`;



const SuserMsgRow = styled.div` // ユーザー情報カードボディ内のテキスト行を囲うスタイル
    display:flex;
    padding:9.75px;
    justify-content:space-between;
    color:#ADADAD;
    font-size:13px;
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
        <Scard>
            <ScardHeader>以下の項目の確認をお願いいたします。</ScardHeader>
            <SuserCardBody>{userMsg.map(userMsg=><UserMsgText lefttext={userMsg.lefttext} righttext={userMsg.righttext} />)}</SuserCardBody>
        </Scard>
    )
};

/* ====== 管理者お知らせカード ====== */
export const AdminMessageCard = ()=>{
    return(
        <Scard>
            <ScardHeader>管理者からのお知らせ</ScardHeader>
            <SadminCardBody>管理者からのお知らせはありません</SadminCardBody>
        </Scard>
    )
};

/* ======================================================================== */  
/* ============================ Main ====================================== */  
/* ======================================================================== */
/* ====== カードボディを呼び出す関数 ====== */
export const CardBody = ()=>{
    return(
        <SinfoBodyDiv>
            <UserMessageCard />
            <AdminMessageCard />
        </SinfoBodyDiv>
    )
};

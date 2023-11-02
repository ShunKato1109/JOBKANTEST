import React from "react";
import styled from "styled-components";

/* ======================================================================== */  
/* ============================ Styles ==================================== */  
/* ======================================================================== */ 

// ユーザー情報カード関数全体を囲うスタイル
const ScardDiv = styled.div`
    width:50%;
    margin:0px 15px 0px 15px;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
    border-radius:5px 5px 5px 5px;
`;

// ユーザー情報カード内のヘッダーを囲うスタイル
export const ScardHeaderDiv = styled.div`
    display:flex;
    padding:9.75px 16.25px 9.75px 16.25px;
    background-color:#E6E6E6;
    align-items:center;
    border-radius:5px 5px 0px 0px;
    color:#333333;
    font-size:13px;
`;

// ユーザー情報カードのボディを囲うスタイル
export const ScardBodyDiv = styled.div`
    background-color:#FFFFFF;
    border-radius:0px 0px 5px 5px;
    padding:16.25px;
`;

// ユーザー情報カードボディ内のテキスト行を囲うスタイル
const SuserMsgRow = styled.div`
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
/* ========================= Helper Components ============================ */  
/* ======================================================================== */ 

// ユーザー情報カードのヘッダーを呼び出す関数
export const CardHeader = (props)=>{
    return(
        <ScardHeaderDiv>{props.headerlabel}</ScardHeaderDiv>
    )
};

// ユーザ情報カード内のテキストを呼び出す関数
export const UserMsgText = (props)=>{
    return(
        <SuserMsgRow>
            <div>{props.lefttext}</div>
            <div style={{alignItems:'right'}}>{props.righttext}</div>
        </SuserMsgRow>
    )
};

// ユーザー情報カードのボディを呼び出す関数
export const Cardbody = (props)=>{
    return(
        <ScardBodyDiv>
            {props.arry.map(userMsg=><UserMsgText lefttext={userMsg.lefttext} righttext={userMsg.righttext} />)}
        </ScardBodyDiv>
    )
};


/* ======================================================================== */  
/* ============================ Components ================================ */  
/* ======================================================================== */ 
// ユーザー情報カードを呼び出す関数
export const UserMessageCard = (props)=>{
    return(
        <ScardDiv>
            <CardHeader headerlabel="以下の項目の確認をお願いいたします。"/>
            <Cardbody arry={userMsg} />
        </ScardDiv>
    )
};
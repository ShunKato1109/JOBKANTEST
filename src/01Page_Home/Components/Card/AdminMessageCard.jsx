import React from "react";
import styled from "styled-components";

/* ======================================================================== */  
/* ============================ Styles ==================================== */  
/* ======================================================================== */ 
const ScardDiv = styled.div` //メインの関数全体を囲うスタイル
    width:50%;
    // height:151.28px;
    background-color:#FFFFFF;
    margin:0px 15px 0px 15px;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
    border-radius:5px 5px 5px 5px;
`;


export const ScardHeaderDiv = styled.div` //カード内のヘッダーを囲うスタイル
    display:flex;
    padding:9.75px 16.25px 9.75px 16.25px;
    background-color:#E6E6E6;
    align-items:center;
    border-radius:5px 5px 0px 0px;
    color:#333333;
    font-size:13px;
`;

export const ScardBodyDiv = styled.div` //カード内のボディを囲うスタイル
    background-color:#FFFFFF;
    border-radius:5px 5px 5px 5px;
    padding:16.25px;
    color:black;
    font-size:13px;
`;

/* ======================================================================== */  
/* ========================= Helper Components ============================ */  
/* ======================================================================== */ 
// カードのヘッダーを呼び出す関数
export const CardHeader = (props)=>{
    return(
        <ScardHeaderDiv>{props.headerlabel}</ScardHeaderDiv>
    )
};

// カードのボディを呼び出す関数
export const Cardbody = ()=>{
    return <ScardBodyDiv>管理者からのお知らせはありません</ScardBodyDiv> 
};

/* ======================================================================== */  
/* ============================ Components ================================ */  
/* ======================================================================== */ 

// 管理者お知らせカードを呼び出す関数
export const AdminMessageCard = (props)=>{
    return(
        <ScardDiv>
            <CardHeader headerlabel="管理者からのお知らせ"/>
            <Cardbody />
        </ScardDiv>
    )
};
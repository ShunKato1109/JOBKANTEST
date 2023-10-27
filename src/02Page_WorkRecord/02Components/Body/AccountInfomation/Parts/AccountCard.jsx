import React from "react";
import styled from "styled-components";

/* ======================================================================== */  
/* ============================ Styles ==================================== */  
/* ======================================================================== */ 

/* ====== Styled Components ====== */
const Sdiv = styled.div` //関数全体を囲うスタイル
    flex:1;
    padding:0px 15px 0px 15px;
    // margin:15px 0px 15px 0px;
    color:#333333;
`;

const Scarddiv = styled.div`
    height:100%;
    background-color:#FFFFFF;
    border:1px solid #848484;
    border-radius:5px;
`;

const ScardHeaderdiv = styled.div` //カードのヘッダーを囲うスタイル
    background-color:#E6E6E6;
    padding:9.75px 16.25px 9.75px 16.25px;

    font-size:16.25px;
    font-weight:400;
`;

const ScardBodydiv = styled.div` //カードのボディを囲うスタイル
    background-color:#FFFFFF;
    padding:16.25px;


`;

const ScardBodyMsgdiv = styled.div` //カード内1行を囲うスタイル
    display:flex;
    padding:9.75px;
    border-top:1px solid #848484;
    font-size:13px;
    
`;

const ScardBodyLmsgdiv = styled.div` //カード内行の左側を囲うスタイル
    flex:1;
    color:#848484;
`;

const ScardBodyRmsgdiv = styled.div` //カード内行の右側を囲うスタイル
    flex:1;
    color:#333333;
    font-weight:400;
`;



/* ====== Components ====== */
// アカウントカードを呼び出す関数(Props:headlabel/)
export const AccountCard = (props)=>{
    return(
        <Sdiv style={props.style}>
         <Scarddiv>
            <ScardHeaderdiv>{props.headlabel}</ScardHeaderdiv>
            <ScardBodydiv>
                    {props.arry.map(userInfo=><CardMsgRow lefttext={userInfo.lefttext} righttext={userInfo.righttext} />)}
            </ScardBodydiv>
         </Scarddiv>
        </Sdiv>
    )
};

// アカウントカード内の行を呼び出す関数(Props:lefttext/righttext)
const CardMsgRow = (props)=>{
    return(
        <ScardBodyMsgdiv>
            <ScardBodyLmsgdiv>{props.lefttext}</ScardBodyLmsgdiv>
            <ScardBodyRmsgdiv>{props.righttext}</ScardBodyRmsgdiv>
        </ScardBodyMsgdiv>
    )
};


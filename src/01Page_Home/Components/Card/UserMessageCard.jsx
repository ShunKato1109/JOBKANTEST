import React from "react";
import styled from "styled-components";

// Style CardHeader Div
export const ScardHeaderDiv = styled.div`
    display:flex;
    // height:39px;
    padding:9.75px 16.25px 9.75px 16.25px;
    background-color:#E6E6E6;
    align-items:center;
    border-radius:5px 5px 0px 0px;
    color:#333333;
    font-size:13px;
`;

// Component CardHeader
export const CardHeader = (props)=>{
    return(
        <ScardHeaderDiv>{props.headerlabel}</ScardHeaderDiv>
    )
};

// Style UserMsg
const SuserMsg = styled.div`
    display:flex;
    justify-content:space-between;
    color:#ADADAD;
    font-size:13px;
    padding:9.75px;
    border-top:1px solid
`;

// Component UserMsg
export const UserMsg = (props)=>{
    return(
        <SuserMsg>
            <div>{props.msg}</div>
            <div style={{alignItems:'right'}}>{props.msgcount}</div>
        </SuserMsg>
    )
};


// Style CardBody Div
export const ScardBodyDiv = styled.div`
    background-color:#FFFFFF;
    border-radius:0px 0px 5px 5px;
    padding:16.25px;
`;

// Component CardBody
export const Cardbody = ()=>{
    return(
        <ScardBodyDiv>
            <UserMsg msg="打刻忘れ・漏れ" msgcount="0件" />
            <UserMsg msg="打刻エラー" msgcount="0件" />
        </ScardBodyDiv>
    )
};


// Style Card Div
const ScardDiv = styled.div`
    // flex-grow:1;
    width:50%;
    margin-right:15px;
    margin-left:15px;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
`;

// Component UserMsgCard
export const UserMessageCard = (props)=>{
    return(
        <ScardDiv>
        <CardHeader headerlabel="以下の項目の確認をお願いいたします。"/>
        <Cardbody />
        </ScardDiv>
    )
};
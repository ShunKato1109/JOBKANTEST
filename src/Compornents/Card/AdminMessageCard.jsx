import React from "react";
import styled from "styled-components";

// Card div
const ScardDiv = styled.div`
    width:50%;
    margin-right:15px;
    margin-left:15px;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
`;

// CardHeader div Style
export const ScardHeaderDiv = styled.div`
    display:flex;
    padding:9.75px 16.25px 9.75px 16.25px;
    background-color:#E6E6E6;
    align-items:center;
    border-radius:5px 5px 0px 0px;
    color:#333333;
    font-size:13px;
`;

// CardHeader div Compornent
export const CardHeader = (props)=>{
    return(
        <ScardHeaderDiv>{props.headerlabel}</ScardHeaderDiv>
    )
};

// CardBody div Style
export const ScardBodyDiv = styled.div`
    background-color:#FFFFFF;
    border-radius:0px 0px 5px 5px;
    padding:16.25px;
`;

// Style AdminMsg
const SadminMsg = styled.div`
    color:black;
    font-size:13px;
`;

// Compornent AdminMsg
export const AdminMsg = (props)=>{
    return(
        <SadminMsg>
            <div>{props.msg}</div>
        </SadminMsg>
    )
};

// CardBody Compornent
export const Cardbody = ()=>{
    return(
        <ScardBodyDiv>
            <AdminMsg msg="管理者からのメッセージはありません"/>
        </ScardBodyDiv>
    )
};

export const AdminMessageCard = (props)=>{
    return(
        <ScardDiv>
        <CardHeader headerlabel="管理者からのお知らせ"/>
        <Cardbody />
        </ScardDiv>
    )
};
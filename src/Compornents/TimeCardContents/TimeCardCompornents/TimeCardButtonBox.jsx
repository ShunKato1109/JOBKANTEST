import React from "react";
import styled from "styled-components";

// Div Style
export const Sdiv = styled.div`
    display:flex;
    justify-content:center;
`;

// TimeCardButtonBox div Style
export const StimeCardButtonBoxDiv = styled.div`
    display:flex;
    justify-content:space-between;
    height:35px;
    width:383.88px;
    margin-top:10px;
`;

// TimeCardButton button Style
export const StimeCardButton = styled.button`
    width:73.47px;
    height:30.58px;
    font-size:13px;
    justify-content:space-between;
    border-radius:5px ;
    border:none;
    cursor:pointer;
`;

export const TimeCardButton =(props)=>{
    return(
        <StimeCardButton style={{backgroundColor:props.backcolor ,color:props.fontcolor}}>{props.label}</StimeCardButton>
    )
};


export const TimeCardButtonBox =()=>{
    return(
        <Sdiv>
        <StimeCardButtonBoxDiv>
            <TimeCardButton label="出 勤" backcolor="#EB840B" fontcolor="white"/>
            <TimeCardButton label="休憩開始" backcolor="#ADADAD" fontcolor="white"/>
            <TimeCardButton label="休憩終了" backcolor="#ADADAD" fontcolor="white"/>
            <TimeCardButton label="退 勤" backcolor="#30B2D6" fontcolor="white"/>
        </StimeCardButtonBoxDiv>
        </Sdiv>
    )
};
import React from "react";
import styled from "styled-components";

// Div Style
export const Sdiv = styled.div`
    display:flex;
    justify-content:center;
`;

// Style TimeCardButtonBox div 
export const StimeCardButtonBoxDiv = styled.div`
    display:flex;
    justify-content:space-between;
    padding-left:-15px;
    padding-right:-15px;
    height:35px;
    width:100%;
    margin-top:10px;
`;

// TimeCardButton button Style
export const StimeCardButton = styled.button`
    width:100%;
    height:30.58px;
    margin-right:15px;
    font-size:13px;
    justify-content:space-between;
    border-radius:5px ;
    border:none;
    cursor:pointer;
`;

// Compornent TimeCardButton
export const TimeCardButton =(props)=>{
    return(
        <StimeCardButton style={{...props.style, backgroundColor:props.backcolor ,color:props.fontcolor}}>
            {props.label}
        </StimeCardButton>
    )
};

export const TimeCardButtonBox =()=>{
    return(
        <Sdiv>
        <StimeCardButtonBoxDiv>
            <TimeCardButton label="出 勤" backcolor="#EB840B" fontcolor="white"/>
            <TimeCardButton label="休憩開始" backcolor="#ADADAD" fontcolor="white"/>
            <TimeCardButton label="休憩終了" backcolor="#ADADAD" fontcolor="white"/>
            <TimeCardButton label="退 勤" backcolor="#30B2D6" fontcolor="white" style={{marginRight:0}}/>
        </StimeCardButtonBoxDiv>
        </Sdiv>
    )
};
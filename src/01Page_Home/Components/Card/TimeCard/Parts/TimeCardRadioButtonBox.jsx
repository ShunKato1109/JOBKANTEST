import React from "react";
import styled from "styled-components";

/* ======================================================================== */  
/* ============================ Styles ==================================== */  
/* ======================================================================== */ 
export const Sdiv = styled.div` //関数全体を囲うスタイル
    display:flex;
    justify-content:center;
`;

export const SradioButtonDiv = styled.div` //ラジオボタンを囲うスタイル
    width:100%;;
    margin-top:10px;
    font-size:13px;
`;

/* ======================================================================== */  
/* ============================ Components ================================ */  
/* ======================================================================== */ 
//ラジオボタンを呼び出す関数
export const TimeCardRadioButtonBox =()=>{
    return(
        <Sdiv>
        <SradioButtonDiv>
        <label>
            <input type="radio"/>通常モード
            <input type="radio"/>夜勤モード
        </label>
        </SradioButtonDiv>
        </Sdiv>
            
        
        
    )
};
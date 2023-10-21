import React from "react";
import styled from "styled-components";

export const Sdiv = styled.div`
    display:flex;
    justify-content:center;
`;

export const SradioButtonDiv = styled.div`
    width:100%;;
    margin-top:10px;
    font-size:13px;
`;


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